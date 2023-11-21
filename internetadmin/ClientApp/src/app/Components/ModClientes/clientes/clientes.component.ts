import { ClienteModel, clientesarray } from 'src/app/Models/Cliente-interface';
import { ClientesService } from './../../../Services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoClienteComponent } from '../modal-info-cliente/modal-info-cliente.component';
import { ModalAgregarClienteComponent } from '../modal-agregar-cliente/modal-agregar-cliente.component';
import { ModalEditarClienteComponent } from '../modal-editar-cliente/modal-editar-cliente.component';
import { AdeudosClienteComponent } from '../adeudos-cliente/adeudos-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
 
  clientes:ClienteModel[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'telefono', 'localidad','acciones','deudas','editar' ];
 
 constructor(private ClientesService:ClientesService, public dialog: MatDialog){}
  ngOnInit(): void {
    this.GetAllClientes();
  }
  public GetAllClientes(){
    this.ClientesService.getAllClientes(`https://localhost:7125/api/cliente`).subscribe(Response =>{
      
       this.clientes = Response;
    })
  }
  public OpenDialogverCliente(id:number){
    const dialogRef = this.dialog.open(ModalInfoClienteComponent,{
      data:{id}
    });
 
  }
  public OpenDialogEditarCliente(id:number){
    const dialogRef = this.dialog.open(ModalEditarClienteComponent,{
      data:{id}
    });
 
  }
  public OpenDialogagregarCliente(){
    const dialogRef = this.dialog.open(ModalAgregarClienteComponent);
 
  }

  public OpenDialogDeudasCliente(id:number,nombre:string){
    const dialogRef = this.dialog.open(AdeudosClienteComponent,{
      data:{id,nombre}
    });
  }
}
