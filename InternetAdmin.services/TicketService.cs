﻿using InternetAdmin.dal;
using InternetAdmin.model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternetAdmin.services
{
 

    public class TicketService
    {
        private readonly CobranzaSolucionesContext _dbContext;

        public TicketService(CobranzaSolucionesContext Cobranzacontext)
        {
            _dbContext = Cobranzacontext;
        }
         
        public List<Ticket> ObtenerTodosTickets()
        {
            return _dbContext.Tickets.ToList();
        }

        public Ticket ObtenerTicket(string id)
        {

            using (var newcontext = new CobranzaSolucionesContext())
            {
                return _dbContext.Tickets.FirstOrDefault(u => u.Id == id);
            }
        }

        public void AgregarTicket(Ticket ticket)
        {
            _dbContext.Tickets.Add(ticket);
            _dbContext.SaveChanges();
        }
        public void ActualizarTicket(Ticket ticket)
        {
            using (var newcontext = new CobranzaSolucionesContext())
            {
                newcontext.Tickets.Update(ticket);
                newcontext.SaveChanges();

            }
        }
        public void EliminarTicket(string id)
        {
            using (var newContext = new CobranzaSolucionesContext())
            {
                var ticket = _dbContext.Tickets.FirstOrDefault(u => u.Id == id);
                if (ticket != null)
                {
                    _dbContext.Tickets.Remove(ticket);
                    _dbContext.SaveChanges();
                }
            }
        }
        public List<Ticket> ObtenerTodosTicketsConNombresDeCliente()
        {
            return _dbContext.Tickets
                .Include(t => t.ClienteNavigation) // Asumiendo que la propiedad de navegación a Cliente se llama ClienteNavigation
                .Select(t => new Ticket
                {
                    Id = t.Id,
                    Fecha = t.Fecha,
                    IdAdeudo = t.IdAdeudo,
                    IdCobros = t.IdCobros,
                    NombreCliente = t.ClienteNavigation.Nombre, // el nombre del cliente
                    Localidad = t.Localidad,
                    FechaVencimiento = t.FechaVencimiento,
                    Descripcion = t.Descripcion,
                    Total = t.Total
                })
                .ToList();
        }
        public Ticket ObtenerTicketPorId(int id)
        {
            return _dbContext.Tickets
                .Include(t => t.ClienteNavigation)
                .Include(t => t.IdAdeudoNavigation)
                .Where(t => t.Id == id)
                .Select(t => new Ticket
                {
                    Id = t.Id,
                    Fecha = t.Fecha,
                    IdAdeudo = t.IdAdeudo,
                    IdCobros = t.IdCobros,
                    Cliente = t.Cliente,
                    NombreCliente = t.ClienteNavigation.Nombre,
                    Localidad = t.Localidad,
                    FechaVencimiento = t.IdAdeudoNavigation.FechaVencimiento,
                    TelefonoCliente = t.ClienteNavigation.Telefono, 
                    Nombreplan = t.ClienteNavigation.IdPlanNavigation.Nombre,
                    Descripcion = t.Descripcion,
                    Total = t.Total,
                    
                })
                .FirstOrDefault();
        }

        public void ActualizarTicket()
        {
            throw new NotImplementedException();
        }
    }
}
