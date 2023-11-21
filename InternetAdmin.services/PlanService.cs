using InternetAdmin.dal;
using InternetAdmin.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternetAdmin.services
{
    public class PlanService
    {
        private readonly CobranzaSolucionesContext _dbContext;

        public PlanService(CobranzaSolucionesContext Cobranzacontext)
        {
            _dbContext = Cobranzacontext;
        }
        public List<Plan> ObtenerTodosPlanes()
        {
            return _dbContext.Plans.ToList();
        }

        public Plan ObtenerPlan(string id)
        {

            using (var newcontext = new CobranzaSolucionesContext())
            {
                return _dbContext.Plans.FirstOrDefault(u => u.Id == id);
            }
        }

        public void AgregarPlan(Plan plan)
        {
            _dbContext.Plans.Add(plan);
            _dbContext.SaveChanges();
        }
        public void ActualizarPlan(Plan plan)
        {
            using (var newcontext = new CobranzaSolucionesContext())
            {
                newcontext.Plans.Update(plan);
                newcontext.SaveChanges();

            }
        }
        public void Eliminarplan(string id)
        {
            using (var newContext = new CobranzaSolucionesContext())
            {
                var plan = _dbContext.Plans.FirstOrDefault(u => u.Id == id);
                if (plan != null)
                {
                    _dbContext.Plans.Remove(plan);
                    _dbContext.SaveChanges();
                }
            }
        }
    }
}
