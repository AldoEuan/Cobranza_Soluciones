using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using InternetAdmin.services;
using InternetAdmin.dal;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
 
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<ClienteService>();
builder.Services.AddScoped<PlanService>();
builder.Services.AddScoped<RegistroAdeudoService>();
builder.Services.AddScoped<RegistroCobroService>();
builder.Services.AddScoped<TicketService>();
builder.Services.AddScoped<CobranzaSolucionesContext>();

builder.Services.AddCors(Options =>
{
    Options.AddPolicy("nuevapolitica", app =>
    {
        app.AllowAnyOrigin()
       .AllowAnyHeader()
       .AllowAnyMethod();
    });
});

var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
     
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
app.UseCors("nuevapolitica");
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;
 
app.Run();
