using InternetAdmin.model;
using InternetAdmin.services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace internetadmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        public readonly ClienteService _clienteservice;

        public ClienteController (ClienteService clienteservice)
        {
            _clienteservice = clienteservice;
        }

        [HttpGet]
        public IActionResult ObtenerTodosClientes()
        {
            try
            {
                var clientes = _clienteservice.ObtenerTodosClientes();
                return Ok(clientes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Se produjo un error interno: {ex.Message}");
            }
        }
        [HttpGet("porPlan/{idPlan}")]
        public IActionResult ObtenerClientesPorPlan(int idPlan)
        {
            try
            {
                var clientes = _clienteservice.ObtenerClientesPorPlan(idPlan);
                return Ok(clientes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Se produjo un error interno: {ex.Message}");
            }
        }
            [HttpGet("{id}")]
        public IActionResult ObtenerClientePorId(int id)
        {
            try
            {
                var cliente = _clienteservice.ObtenerCliente(id);
                if (cliente == null)
                {
                    return NotFound();
                }
                return Ok(cliente);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AgregarCliente([FromBody] Cliente cliente)
        {
            try
            {
                _clienteservice.AgregarCliente(cliente);
                
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        [HttpPut("{id}")]
        public IActionResult ActualizarCliente(int id, [FromBody] Cliente cliente)
        {
            try
            {
                var existecliente = _clienteservice.ObtenerCliente(id);

                if (existecliente == null)
                {
                    return NotFound();
                }

                cliente.Id = id;
                _clienteservice.ActualizarCliente(cliente);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("{id}")]
        public IActionResult EliminarCliente(int id)
        {
            try
            {
                if (id == null)
                {
                    return BadRequest("El ID proporcionado no es válido.");
                }

                var cliente = _clienteservice.ObtenerCliente(id);

                if (cliente == null)
                {
                    return NotFound();
                }

                _clienteservice.EliminarCliente(id);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
