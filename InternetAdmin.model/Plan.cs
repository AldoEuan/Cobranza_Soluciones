﻿using System;
using System.Collections.Generic;

namespace InternetAdmin.model;

public partial class Plan
{
    public string Id { get; set; } = null!;

    public string? Nombre { get; set; }

    public int? CostoRenta { get; set; }

    public virtual ICollection<Cliente> Clientes { get; set; } = new List<Cliente>();
}
