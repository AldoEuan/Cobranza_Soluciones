using System;
using System.Collections.Generic;

namespace InternetAdmin.model;

public partial class RegistroAdeudo
{
    public int Id { get; set; }

    public int? IdCliente { get; set; }

    public DateTime? FechaVencimiento { get; set; }

    public DateTime? Descripcion { get; set; }

    public int? Importe { get; set; }

    public int? IdCobros { get; set; }

    public int? ImporteCobrado { get; set; }

    public DateTime? FechaCobro { get; set; }

    public int? Saldo { get; set; }

    public bool? Status { get; set; }

    public string ClienteNombre { get; set; }
    public virtual Cliente? IdClienteNavigation { get; set; }

    public virtual RegistroCobro? IdCobrosNavigation { get; set; }

    public virtual ICollection<RegistroCobro> RegistroCobros { get; set; } = new List<RegistroCobro>();

    public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
}
