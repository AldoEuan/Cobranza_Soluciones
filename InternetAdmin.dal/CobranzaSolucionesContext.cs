using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using InternetAdmin.model;
namespace InternetAdmin.dal;

public partial class CobranzaSolucionesContext : DbContext
{
    public CobranzaSolucionesContext()
    {
    }

    public CobranzaSolucionesContext(DbContextOptions<CobranzaSolucionesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente> Clientes { get; set; }

    public virtual DbSet<Plan> Plans { get; set; }

    public virtual DbSet<RegistroAdeudo> RegistroAdeudos { get; set; }

    public virtual DbSet<RegistroCobro> RegistroCobros { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=DESKTOP-LB6Q5MO\\QUALFIX;Database=CobranzaSoluciones;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente>(entity =>
        {
            entity.ToTable("Cliente");

            entity.Property(e => e.Id).HasMaxLength(250);
            entity.Property(e => e.Colonia).HasMaxLength(150);
            entity.Property(e => e.Correo).HasMaxLength(150);
            entity.Property(e => e.Direccion).HasMaxLength(255);
            entity.Property(e => e.IdPlan).HasMaxLength(250);
            entity.Property(e => e.Ip).HasMaxLength(50);
            entity.Property(e => e.Localidad).HasMaxLength(150);
            entity.Property(e => e.Nombre).HasMaxLength(255);
            entity.Property(e => e.Referencia).HasMaxLength(255);
            entity.Property(e => e.Ssid)
                .HasMaxLength(150)
                .HasColumnName("SSID");
            entity.Property(e => e.Telefono).HasMaxLength(50);

            entity.HasOne(d => d.IdPlanNavigation).WithMany(p => p.Clientes)
                .HasForeignKey(d => d.IdPlan)
                .HasConstraintName("FK_Cliente_Plan");
        });

        modelBuilder.Entity<Plan>(entity =>
        {
            entity.ToTable("Plan");

            entity.Property(e => e.Id).HasMaxLength(250);
            entity.Property(e => e.Nombre).HasMaxLength(250);
        });

        modelBuilder.Entity<RegistroAdeudo>(entity =>
        {
            entity.ToTable("RegistroAdeudo");

            entity.Property(e => e.Id).HasMaxLength(250);
            entity.Property(e => e.Descripcion).HasColumnType("datetime");
            entity.Property(e => e.FechaCobro).HasColumnType("datetime");
            entity.Property(e => e.FechaVencimiento).HasColumnType("datetime");
            entity.Property(e => e.IdCliente).HasMaxLength(250);
            entity.Property(e => e.IdCobros).HasMaxLength(250);

            entity.HasOne(d => d.IdClienteNavigation).WithMany(p => p.RegistroAdeudos)
                .HasForeignKey(d => d.IdCliente)
                .HasConstraintName("FK_RegistroAdeudo_Cliente");

            entity.HasOne(d => d.IdCobrosNavigation).WithMany(p => p.RegistroAdeudos)
                .HasForeignKey(d => d.IdCobros)
                .HasConstraintName("FK_RegistroAdeudo_RegistroCobros");
        });

        modelBuilder.Entity<RegistroCobro>(entity =>
        {
<<<<<<< HEAD
<<<<<<< HEAD
            entity.HasKey(e => e.Id).HasName("PK__Registro__3213E83FE892E781");

            entity.ToTable(tb =>
                {
                    tb.HasTrigger("tr_RegistroCobros_Update");
                    tb.HasTrigger("trg_ActualizarRegistroAdeudo");
                });

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DescripcionPago).HasColumnType("date");
            entity.Property(e => e.FechaPago).HasColumnType("date");
=======
=======
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
            entity.Property(e => e.Id)
                .HasMaxLength(250)
                .HasColumnName("id");
            entity.Property(e => e.Cliente).HasMaxLength(250);
            entity.Property(e => e.DescripcionPago).HasColumnType("datetime");
            entity.Property(e => e.FechaPago).HasColumnType("datetime");
            entity.Property(e => e.IdAdeudo).HasMaxLength(250);
<<<<<<< HEAD
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
            entity.Property(e => e.Localidad).HasMaxLength(250);
            entity.Property(e => e.Observaciones).HasMaxLength(250);

            entity.HasOne(d => d.ClienteNavigation).WithMany(p => p.RegistroCobros)
                .HasForeignKey(d => d.Cliente)
                .HasConstraintName("FK_RegistroCobros_Cliente");

            entity.HasOne(d => d.IdAdeudoNavigation).WithMany(p => p.RegistroCobros)
                .HasForeignKey(d => d.IdAdeudo)
                .HasConstraintName("FK_RegistroCobros_RegistroAdeudo");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.ToTable("Ticket");

            entity.Property(e => e.Id).HasMaxLength(250);
            entity.Property(e => e.Fecha).HasColumnType("datetime");
<<<<<<< HEAD
<<<<<<< HEAD
            entity.Property(e => e.FechaVencimiento).HasColumnType("date");
            entity.Property(e => e.Localidad).HasMaxLength(250);
            entity.Property(e => e.NombreCliente).HasMaxLength(250);

            entity.HasOne(d => d.ClienteNavigation).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.Cliente)
                .HasConstraintName("FK_Ticket_Cliente");
=======
            entity.Property(e => e.IdAdeudo).HasMaxLength(250);
            entity.Property(e => e.IdCobros).HasMaxLength(250);
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
            entity.Property(e => e.IdAdeudo).HasMaxLength(250);
            entity.Property(e => e.IdCobros).HasMaxLength(250);
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)

            entity.HasOne(d => d.IdAdeudoNavigation).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.IdAdeudo)
                .HasConstraintName("FK_Ticket_RegistroAdeudo");

            entity.HasOne(d => d.IdCobrosNavigation).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.IdCobros)
                .HasConstraintName("FK_Ticket_RegistroCobros");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
