using InternetAdmin.model;
using InternetAdmin.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace internetadmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
 
    public class PlanController : ControllerBase
    {
        public readonly PlanService _planservice;
        public PlanController(PlanService planservice)
        {
            _planservice = planservice;
        }
        [HttpGet]
        public IActionResult ObtenerTodosPlanes() {

            try
            {
                var planes = _planservice.ObtenerTodosPlanes();
                return Ok(planes);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpGet("{id}")]
        public IActionResult ObtenerPlan(int id) 
        {
            try
            {
                var plan = _planservice.ObtenerPlan(id);
                if (plan == null)
                {
                    return BadRequest();
                }
                return Ok(plan);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult AgregarPlan([FromBody] Plan plan)
        {
            try
            {
                _planservice.AgregarPlan(plan);
                return Ok(plan);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult ActualizarPlan(int id, [FromBody] Plan plan) 
        {
            try
            {
                var existeplan = _planservice.ObtenerPlan(id);
                if (existeplan == null)
                {
                    return BadRequest();
                }
                plan.Id = id;
                _planservice.ActualizarPlan(plan);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult EliminarPlan(int id)
        {
            try
            {
                var cliente = _planservice.ObtenerPlan(id);
                _planservice.Eliminarplan(id);
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
