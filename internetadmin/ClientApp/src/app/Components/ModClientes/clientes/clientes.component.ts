import { ClienteModel, clientesarray } from 'src/app/Models/Cliente-interface';
import { ClientesService } from './../../../Services/clientes.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoClienteComponent } from '../modal-info-cliente/modal-info-cliente.component';
import { ModalAgregarClienteComponent } from '../modal-agregar-cliente/modal-agregar-cliente.component';
import { ModalEditarClienteComponent } from '../modal-editar-cliente/modal-editar-cliente.component';
import { AdeudosClienteComponent } from '../adeudos-cliente/adeudos-cliente.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  isLoading: boolean = false; 
  searchText: string = '';
  clientes:ClienteModel[]=[];
  BuscarClienform:FormGroup;
  displayedColumns: string[] = ['id', 'nombre', 'telefono', 'localidad','acciones','deudas','editar' ];
  urlapi='https://interadmin.azurewebsites.net/';
 constructor(private fb:FormBuilder ,private ClientesService:ClientesService, public dialog: MatDialog){
  this.BuscarClienform = this.fb.group(
    {
      buscador: ['',Validators.required]
    }
  )
 }
  ngOnInit(): void {
    
    this.GetAllClientes();
  }
  public GetAllClientes(){
    this.isLoading = true; 
    this.ClientesService.getAllClientes(`${this.urlapi}api/cliente`).subscribe(Response =>{
       this.clientes = Response;
       this.isLoading = false; 
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

  public ObtenerClientesporNombre(){
    this.clientes=[];
    this.isLoading = true
    if(this.BuscarClienform.value.buscador==''){
      this.GetAllClientes();
      this.isLoading = false
    }
    else{
    console.log(this.BuscarClienform.value)
    this.ClientesService.getAllClientesporNombre(`${this.urlapi}api/cliente/nombre/${this.BuscarClienform.value.buscador}`).subscribe(res=>{
      this.clientes = res;
      this.isLoading = false
    });
  }    
  }

  public OpenDialogDeudasCliente(id:number,nombre:string){
    const dialogRef = this.dialog.open(AdeudosClienteComponent,{
      data:{id,nombre}
    });
  }
}
