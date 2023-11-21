using System;
using System.Collections.Generic;

namespace InternetAdmin.model.Models;

public partial class Ticket
{
    public int Id { get; set; }

    public DateTime? Fecha { get; set; }

    public int? IdAdeudo { get; set; }

    public int? IdCobros { get; set; }

    public int? Cliente { get; set; }

    public string? Localidad { get; set; }

    public DateTime? FechaVencimiento { get; set; }

    public DateTime? Descripcion { get; set; }

    public int? Total { get; set; }

    public string? NombreCliente { get; set; }

    public virtual Cliente? ClienteNavigation { get; set; }

    public virtual RegistroAdeudo? IdAdeudoNavigation { get; set; }

    public virtual RegistroCobro? IdCobrosNavigation { get; set; }
}
