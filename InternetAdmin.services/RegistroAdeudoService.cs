using InternetAdmin.dal;
using InternetAdmin.model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternetAdmin.services
{
    public class RegistroAdeudoService
    {
        private readonly CobranzaSolucionesContext _dbContext;

        public RegistroAdeudoService(CobranzaSolucionesContext Cobranzacontext)
        {
            _dbContext = Cobranzacontext;
        }
        public List<RegistroAdeudo> ObtenerTodosAdeudos()
        {
            return _dbContext.RegistroAdeudos.ToList();
        }

        public RegistroAdeudo ObtenerAdeudo(int id)
        {

            using (var newcontext = new CobranzaSolucionesContext())
            {
                return _dbContext.RegistroAdeudos.FirstOrDefault(u => u.Id == id);
            }
        }

        public void AgregarAdeudo(RegistroAdeudo adeudo)
        {
            _dbContext.RegistroAdeudos.Add(adeudo);
            _dbContext.SaveChanges();
 
        }
    
        public void ActualizarAdeudo(RegistroAdeudo adeudo)
        {
            using (var newcontext = new CobranzaSolucionesContext())
            {
                newcontext.RegistroAdeudos.Update(adeudo);
                newcontext.SaveChanges();

            }
        }
        public void EliminarAdeudo(int id)
        {
            using (var newContext = new CobranzaSolucionesContext())
            {
                var adeudo = _dbContext.RegistroAdeudos.FirstOrDefault(u => u.Id == id);
                if (adeudo != null)
                {
                    _dbContext.RegistroAdeudos.Remove(adeudo);
                    _dbContext.SaveChanges();
                }
            }
        }

        public List<RegistroAdeudo> ObtenerTodosAdeudosConNombresDeCliente()
        {
            return _dbContext.RegistroAdeudos
                .Include(ra => ra.IdClienteNavigation) // Asumiendo que la propiedad de navegación a Cliente se llama ClienteNavigation
                .Select(ra => new RegistroAdeudo
                {
                    Id = ra.Id,
                    IdCliente = ra.IdCliente,
                    ClienteNombre = ra.IdClienteNavigation.Nombre, // el nombre del cliente
                    FechaVencimiento = ra.FechaVencimiento,
                    Descripcion = ra.Descripcion,
                    Importe = ra.Importe,
                    IdCobros = ra.IdCobros,
                    ImporteCobrado = ra.ImporteCobrado,
                    FechaCobro = ra.FechaCobro,
                    Saldo = ra.Saldo,
                    Status = ra.Status
                })
                .ToList();
        }

        public List<RegistroAdeudo> ObtenerAdeudosConEstadoFalse()
        {
            return _dbContext.RegistroAdeudos
                .Where(ra => ra.Status == false)
                .Include(ra => ra.IdClienteNavigation) // Asumiendo que la propiedad de navegación a Cliente se llama ClienteNavigation
                .Select(ra => new RegistroAdeudo
                {
                    Id = ra.Id,
                    IdCliente = ra.IdCliente,
                    ClienteNombre = ra.IdClienteNavigation.Nombre, // el nombre del cliente
                    FechaVencimiento = ra.FechaVencimiento,
                    Descripcion = ra.Descripcion,
                    Importe = ra.Importe,
                    IdCobros = ra.IdCobros,
                    ImporteCobrado = ra.ImporteCobrado,
                    FechaCobro = ra.FechaCobro,
                    Saldo = ra.Saldo,
                    Status = ra.Status
                })
                .ToList();
        }

        public List<RegistroAdeudo> ObtenerAdeudosConEstadoNull()
        {
            return _dbContext.RegistroAdeudos
                .Where(ra => ra.Status == null)
                .Include(ra => ra.IdClienteNavigation) // Asumiendo que la propiedad de navegación a Cliente se llama ClienteNavigation
                .Select(ra => new RegistroAdeudo
                {
                    Id = ra.Id,
                    IdCliente = ra.IdCliente,
                    ClienteNombre = ra.IdClienteNavigation.Nombre, // el nombre del cliente
                    FechaVencimiento = ra.FechaVencimiento,
                    Descripcion = ra.Descripcion,
                    Importe = ra.Importe,
                    IdCobros = ra.IdCobros,
                    ImporteCobrado = ra.ImporteCobrado,
                    FechaCobro = ra.FechaCobro,
                    Saldo = ra.Saldo,
                    Status = ra.Status
                })
                .ToList();
        }
        public List<RegistroAdeudo> ObtenerDeudasPorCliente(int idCliente)
        {
            return _dbContext.RegistroAdeudos
                .Where(ra => ra.IdCliente == idCliente)
                .Include(ra => ra.IdClienteNavigation) // Asumiendo que la propiedad de navegación a Cliente se llama ClienteNavigation
                .Select(ra => new RegistroAdeudo
                {
                    Id = ra.Id,
                    IdCliente = ra.IdCliente,
                    ClienteNombre = ra.IdClienteNavigation.Nombre, // el nombre del cliente
                    FechaVencimiento = ra.FechaVencimiento,
                    Descripcion = ra.Descripcion,
                    Importe = ra.Importe,
                    IdCobros = ra.IdCobros,
                    ImporteCobrado = ra.ImporteCobrado,
                    FechaCobro = ra.FechaCobro,
                    Saldo = ra.Saldo,
                    Status = ra.Status
                })
                .ToList();
        }

    }
}
