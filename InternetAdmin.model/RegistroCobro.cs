using System;
using System.Collections.Generic;

namespace InternetAdmin.model;

public partial class RegistroCobro
{
    public string Id { get; set; } = null!;

    public string? Cliente { get; set; }

    public string? IdAdeudo { get; set; }

    public DateTime? DescripcionPago { get; set; }

    public int? ImporteAdeudo { get; set; }

    public DateTime? FechaPago { get; set; }

    public int? Total { get; set; }

    public string? Observaciones { get; set; }

    public string? Localidad { get; set; }
    public string? NombreCliente { get; set; }

    public virtual Cliente? ClienteNavigation { get; set; }

    public virtual RegistroAdeudo? IdAdeudoNavigation { get; set; }

    public virtual ICollection<RegistroAdeudo> RegistroAdeudos { get; set; } = new List<RegistroAdeudo>();

    public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
