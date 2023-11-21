using InternetAdmin.model;
using InternetAdmin.services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace internetadmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistroCobroController : ControllerBase
    {
        public readonly RegistroCobroService _registroCobroservice;

        public RegistroCobroController(RegistroCobroService registroCobroService)
        {
            _registroCobroservice = registroCobroService;
        }
        [HttpGet]
        public IActionResult obtenertodosCobros()
        {
            try
            {
                var cobros = _registroCobroservice.ObtenerTodosCobros();
                return Ok(cobros);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult obtenerCobro(int id)
        {
            try
            {
                var cobro = _registroCobroservice.ObtenerCobro(id);
                return Ok(cobro);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("deudas/{id}")]
        public IActionResult obtenertodosAdeudosporCliente(int id)
        {
            try
            {
                var adeudo = _registroCobroservice.ObtenerRegistrosCobrosPorCliente(id);
                return Ok(adeudo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult agregarAdeudo([FromBody] RegistroCobro cobro)
        {
            try
            {
                _registroCobroservice.AgregarCobro(cobro);
                return Ok("cobro Creado");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult actualizarCliente(int id, [FromBody] RegistroCobro cobro)
        {
            try
            {
                var existecobro = _registroCobroservice.ObtenerCobro(id);
                cobro.Id = existecobro.Id;
                Console.WriteLine(cobro.Id);
                _registroCobroservice.ActualizarCobro(cobro);
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
                var deuda = _registroCobroservice.ObtenerCobro(id);
                _registroCobroservice.EliminarCobro(id);
                return Ok();
            }
            catch (Exception ex)
            { return BadRequest(ex.Message); }
        }

    }
}
