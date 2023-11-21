using InternetAdmin.model;
using InternetAdmin.services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace internetadmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistroAdeudoController : ControllerBase
    {
        public readonly RegistroAdeudoService _registroAdeudoservice;

        public RegistroAdeudoController(RegistroAdeudoService registroAdeudoService)
        {
            _registroAdeudoservice = registroAdeudoService;
        }

        [HttpGet("allClientes")]
        public IActionResult obtenertodosAdeudos()
        {
            try
            {
                var adeudo = _registroAdeudoservice.ObtenerTodosAdeudosConNombresDeCliente();
                return Ok(adeudo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("cliente")]
        public IActionResult ObtenerDeudasPorCliente(int idCliente)
        {
            try
            {
                var deudas = _registroAdeudoservice.ObtenerDeudasPorCliente(idCliente);
                return Ok(deudas);
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
                var adeudo = _registroAdeudoservice.ObtenerDeudasPorCliente(id);
                return Ok(adeudo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("nopagados")]
        public IActionResult obtenertodosAdeudosnoPagados()
        {
            try
            {
                var adeudo = _registroAdeudoservice.ObtenerAdeudosConEstadoNull();
                return Ok(adeudo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("pagados")]
        public IActionResult obtenertodosAdeudosPagados()
        {
            try
            {
                var adeudo = _registroAdeudoservice.ObtenerAdeudosConEstadoFalse();
                return Ok(adeudo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult obtenerAdeudo(string id)
        {
            try
            {
                var adeudo = _registroAdeudoservice.ObtenerAdeudo(id);
                return Ok(adeudo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPost("crearadeudo")]
        public IActionResult agregarAdeudo([FromBody] RegistroAdeudo adeudo)
        {
            try
            {
                _registroAdeudoservice.AgregarAdeudo(adeudo);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult actualizarCliente(string id, [FromBody] RegistroAdeudo adeudo)
        {
            try
            {
                var existeadeudo = _registroAdeudoservice.ObtenerAdeudo(id);
                adeudo.Id = id;
                _registroAdeudoservice.ActualizarAdeudo(adeudo);
                return Ok();
            }
            catch (Exception ex) 
            { 
                return BadRequest(ex.Message);
            
            }
        }

        [HttpDelete("{id}")]
        public IActionResult EliminarDeuda(string id) 
        {
            try
            {
                var deuda = _registroAdeudoservice.ObtenerAdeudo(id);
                _registroAdeudoservice.EliminarAdeudo(id);
                return Ok();
            }
            catch (Exception ex)
            { return BadRequest(ex.Message); }
        }
    }
}
