using InternetAdmin.dal;
using InternetAdmin.model;
 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternetAdmin.services
{
    public class ClienteService
    {

        private readonly CobranzaSolucionesContext _dbContext;

        public ClienteService(CobranzaSolucionesContext Cobranzacontext)
        {
            _dbContext = Cobranzacontext;
        }
        public List<Cliente> ObtenerTodosClientes()
        {
            return _dbContext.Clientes.ToList();
        }

<<<<<<< HEAD
<<<<<<< HEAD
        public List<Cliente> ObtenerClientesActivos()
        {
            return _dbContext.Clientes.Where(c => c.Estado == true).ToList();
        }

        public List<Cliente> ObtenerClientesInactivos()
        {
            return _dbContext.Clientes.Where(c => c.Estado == false).ToList();
        }


        public Cliente ObtenerCliente(int id) {
=======
        public Cliente ObtenerCliente(string id) {
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
        public Cliente ObtenerCliente(string id) {
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)

            using (var newcontext = new CobranzaSolucionesContext())
            {
                return _dbContext.Clientes.FirstOrDefault(u => u.Id == id);
            }
        }
<<<<<<< HEAD
<<<<<<< HEAD

        public List<Cliente> FiltrarClientesPorNombre(string nombre)
        {
            return _dbContext.Clientes.Where(c => c.Nombre.Contains(nombre)).ToList();
        }

        public List<Cliente> FiltrarClientesPorPlan(int idPlan)
        {
            return _dbContext.Clientes.Where(c => c.IdPlan == idPlan).ToList();
        }

        public List<Cliente> FiltrarClientesPorEstadoYPlan(bool estado, int idPlan)
        {
            return _dbContext.Clientes.Where(c => c.Estado == estado && c.IdPlan == idPlan).ToList();
        }

        public List<Cliente> FiltrarClientesPorDireccionYLocalidad(string colonia, string localidad)
        {
            return _dbContext.Clientes
                .Where(c => c.Colonia.Contains(colonia) && c.Localidad.Contains(localidad))
                .ToList();
        }
-

        public List<Cliente> ObtenerClientesPorPlan(int idPlan)
=======
        public List<Cliente> ObtenerClientesPorPlan(string idPlan)
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
        public List<Cliente> ObtenerClientesPorPlan(string idPlan)
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
        {
            var clientesAsociados = _dbContext.Clientes.Where(c => c.IdPlan == idPlan).ToList();
            return clientesAsociados;
        }
        public void AgregarCliente (Cliente cliente)
        {
            _dbContext.Clientes.Add(cliente);
            _dbContext.SaveChanges();
        }
        public void ActualizarCliente (Cliente cliente) {
            using (var newcontext = new CobranzaSolucionesContext()) 
            {
                newcontext.Clientes.Update(cliente);
                var planAsociado = newcontext.Plans.FirstOrDefault(p => p.Id == cliente.IdPlan);
                if (planAsociado != null)
                {
                    planAsociado.Clientes.Add(cliente);
                    newcontext.SaveChanges();
                }
            }
        }
        public void EliminarCliente(string id)
        {
            using (var newContext = new CobranzaSolucionesContext())
            {
                var cliente = _dbContext.Clientes.FirstOrDefault(u =>u.Id == id);
                if (cliente != null) {
                 _dbContext.Clientes.Remove(cliente);
                    _dbContext.SaveChanges();   
                }
            }
        }
    }
}
