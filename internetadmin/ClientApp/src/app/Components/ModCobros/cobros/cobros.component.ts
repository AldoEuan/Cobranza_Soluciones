import { Component, OnInit } from '@angular/core';
import { AdeudoModel } from 'src/app/Models/Adeudo-Interface';
import { CobrosModel } from 'src/app/Models/Cobros-interface';
import { CobrosService } from 'src/app/Services/cobros.service';
import { ModalEditarCobrosComponent } from '../modal-editar-cobros/modal-editar-cobros.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/Services/clientes.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.component.html',
  styleUrls: ['./cobros.component.css']
})
export class CobrosComponent implements OnInit {
  isLoading: boolean = false;
  cobros: CobrosModel[] = [];
  displayedColumns: string[] = ['id', 'cliente', 'idAdeudo', 'descripcionPago', 'importeAdeudo', 'fechaPago', 'total', 'observaciones', 'localidad', 'cobrar'];
  pagina = 1;
  urlapi = 'https://interadmin.azurewebsites.net/';
  BuscarClienform: FormGroup;
  constructor(private fb: FormBuilder, private cobroService: CobrosService, private dialog: MatDialog, private clienteService: ClientesService) {
    this.BuscarClienform = this.fb.group(
      {
        buscador: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getAllCobros();
  }

  public OpenDialogEditarCobro(id: number) {

    const dialogRef = this.dialog.open(ModalEditarCobrosComponent, {
      data: { id }
    });
  }

  public getAllCobros() {
    this.isLoading = true;
    this.cobroService.getAllCobros(`${this.urlapi}api/registrocobro?pagina=${this.pagina}`).subscribe(Response => {
      this.cobros = Response;
      console.log(Response);
      this.isLoading = false;
    });
  }
  public paginaprev() {
    this.pagina--;
    if (this.pagina == 0) {
      this.pagina = 1;
      this.getAllCobros();
    }
    this.getAllCobros();
  }
  public paginanext() {
    this.pagina++;
    this.getAllCobros();
  }


  public ObtenerClientesporNombre() {
    this.isLoading = true
    this.cobros = [];
    if (this.BuscarClienform.value.buscador == '') {
      this.getAllCobros();
    } 
    else
    {
      console.log(this.BuscarClienform.value)
      this.cobroService.getAllCobrosporNombre(`${this.urlapi}api/registrocobro/porcliente/${this.BuscarClienform.value.buscador}`).subscribe(res => 
        {
          this.cobros = res;
  
          const idcliente = this.cobros.map(u => u.cliente);
          const idSet = new Set(idcliente);
  
        // Convertir el Set de nuevo a un array si es necesario
          const ids = [...idSet];
  
          console.log(ids);
  
        ids.forEach(id => 
          {
            this.clienteService.getCliente(`${this.urlapi}api/cliente/${id}`).subscribe(cliente => 
            {
              const clienteDetails = cliente; // Obtenemos los detalles del cliente desde la respuesta
  
              // Iteramos sobre cada objeto CobrosModel en el array cobros
              this.cobros.forEach(cobro => {
              // Verificamos si el ID del cliente del cobro coincide con el ID del cliente obtenido
              if (cobro.cliente === clienteDetails.id)
              {
                // Si hay coincidencia, asignamos el nombre del cliente al cobro actual
                cobro.nombreCliente = clienteDetails.nombre;
              }
            });
          });
          this.isLoading = false
        });
      });
    }
  }
  

}
