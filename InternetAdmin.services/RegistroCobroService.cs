using InternetAdmin.dal;
using InternetAdmin.model;
using Microsoft.EntityFrameworkCore;

namespace InternetAdmin.services
{
    public class RegistroCobroService
    {
        private readonly CobranzaSolucionesContext _dbContext;

        public RegistroCobroService(CobranzaSolucionesContext Cobranzacontext)
        {
            _dbContext = Cobranzacontext;
        }
        public List<RegistroCobro> ObtenerTodosCobros()
        {
            return _dbContext.RegistroCobros
                   .Include(t => t.ClienteNavigation)
                       .Select(t => new RegistroCobro
                       {
                           Id = t.Id,
                           Cliente = t.Cliente,
                           IdAdeudo = t.IdAdeudo,
                           DescripcionPago = t.DescripcionPago,
                           NombreCliente = t.ClienteNavigation.Nombre, // el nombre del cliente
                           Localidad = t.Localidad,
                           ImporteAdeudo = t.ImporteAdeudo,
                           FechaPago = t.FechaPago,
                           Total = t.Total,
                           Observaciones = t.Observaciones
                       })
                .ToList();

        }

        public RegistroCobro ObtenerCobro(string id)
        {
            return _dbContext.RegistroCobros
                                        .Where(rc => rc.Id == id) // Cambiado a buscar por el Id del cobro
                                        .Select(rc => new RegistroCobro
                                        {
                                            Id = rc.Id,
                                            Cliente = rc.Cliente,
                                            IdAdeudo = rc.IdAdeudo,
                                            DescripcionPago = rc.DescripcionPago,
                                            ImporteAdeudo = rc.ImporteAdeudo,
                                            FechaPago = rc.FechaPago,
                                            NombreCliente = rc.ClienteNavigation.Nombre,
                                            Total = rc.Total,
                                            Observaciones = rc.Observaciones,
                                            Localidad = rc.Localidad,
                                        })
                                        .FirstOrDefault(); // Cambiado a FirstOrDefault()

                
            
            
        }


        public void AgregarCobro(RegistroCobro cobro)
        {
            _dbContext.RegistroCobros.Add(cobro);
            _dbContext.SaveChanges();

        }
        public void ActualizarCobro(RegistroCobro cobro)
        {
            using (var newcontext = new CobranzaSolucionesContext())
            {
                newcontext.RegistroCobros.Update(cobro);
                newcontext.SaveChanges();

            }
        }
        public void EliminarCobro(string id)
        {
            using (var newContext = new CobranzaSolucionesContext())
            {
                var cobro = _dbContext.RegistroCobros.FirstOrDefault(u => u.Id == id);
                if (cobro != null)
                {
                    _dbContext.RegistroCobros.Remove(cobro);
                    _dbContext.SaveChanges();
                }
            }
        }
        public List<RegistroCobro> ObtenerRegistrosCobrosPorCliente(int idCliente)
        {
            return _dbContext.RegistroCobros
                .Where(rc => rc.Cliente == idCliente)
                .ToList();
        }
    }
}