
using InternetAdmin.model;
using InternetAdmin.services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace internetadmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        public readonly TicketService _ticketService;

        public TicketController(TicketService ticketService)
        {
            _ticketService = ticketService;
        }
        [HttpGet]
        public IActionResult obtenertodosTickets(int pagina)
        {
            try
            {
                var tickets = _ticketService.ObtenerTodosTicketsConNombresDeCliente(pagina);
                return Ok(tickets);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult obtenerTicket(int id)
        {
            try
            {
                var ticket = _ticketService.ObtenerTicketPorId(id);
                return Ok(ticket);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public IActionResult agregarTicket([FromBody] Ticket ticket)
        {
            try
            {
                _ticketService.AgregarTicket(ticket);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult actualizarTicket(int id, [FromBody] Ticket ticket)
        {
            try
            {
                var existeticket = _ticketService.ObtenerTicket(id);
                ticket.Id = id;
                _ticketService.ActualizarTicket(ticket);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);

            }
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarDeuda(int id)
        {
            try
            {
                var deuda = _ticketService.ObtenerTicket(id);
                _ticketService.EliminarTicket(id);
                return Ok();
            }
            catch (Exception ex)
            { return BadRequest(ex.Message); }
        }
    }
}
