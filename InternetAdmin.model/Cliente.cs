using System;
using System.Collections.Generic;

namespace InternetAdmin.model;

public partial class Cliente
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public string? Telefono { get; set; }

    public string? Correo { get; set; }

    public string? Direccion { get; set; }

    public string? Colonia { get; set; }

    public string? Localidad { get; set; }

    public string? Referencia { get; set; }

    public string? Ssid { get; set; }

    public string? Ip { get; set; }

    public bool? Estado { get; set; }

    public int? IdPlan { get; set; }

    public virtual Plan? IdPlanNavigation { get; set; }

    public virtual ICollection<RegistroAdeudo> RegistroAdeudos { get; set; } = new List<RegistroAdeudo>();

    public virtual ICollection<RegistroCobro> RegistroCobros { get; set; } = new List<RegistroCobro>();

    public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
