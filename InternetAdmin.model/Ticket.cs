using System;
using System.Collections.Generic;

namespace InternetAdmin.model;

public partial class Ticket
{
    public string Id { get; set; } = null!;

    public DateTime? Fecha { get; set; }

    public string? IdAdeudo { get; set; }

<<<<<<< HEAD
<<<<<<< HEAD
    public int? IdCobros { get; set; }

    public int? Cliente { get; set; }

    public string? Localidad { get; set; }

    public DateTime? FechaVencimiento { get; set; }

    public DateTime? Descripcion { get; set; }
     

    public int? Total { get; set; }
=======
    public string? IdCobros { get; set; }
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)

    public string? NombreCliente { get; set; }
    public string? TelefonoCliente { get; set; }
    public string? Nombreplan { get; set; }
    public virtual Cliente? ClienteNavigation { get; set; }
=======
    public string? IdCobros { get; set; }
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)

    public virtual RegistroAdeudo? IdAdeudoNavigation { get; set; }

    public virtual RegistroCobro? IdCobrosNavigation { get; set; }
}
