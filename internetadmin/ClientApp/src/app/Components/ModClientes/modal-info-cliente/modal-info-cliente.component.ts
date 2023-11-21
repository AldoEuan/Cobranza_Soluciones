import { ClientesService } from 'src/app/Services/clientes.service';
import { ClienteModel, clientesarray } from '../../../Models/Cliente-interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-info-cliente',
  templateUrl: './modal-info-cliente.component.html',
  styleUrls: ['./modal-info-cliente.component.css']
})
export class ModalInfoClienteComponent implements OnInit{

  cliente:ClienteModel={
    id: 1,
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    colonia: '',
    localidad: '',
    referencia: '',
    ssid: '',
    ip: '',
    estado: false,
    idPlan: '',
  }
  constructor( private clienteService: ClientesService, @Inject(MAT_DIALOG_DATA) public data: ClienteModel,){
    this.cliente.id =data.id
  }
  ngOnInit(): void {
    this.ObtenerCliente();
  }
 public ObtenerCliente(){
   
    this.clienteService.getCliente(`https://localhost:7125/api/cliente/${this.cliente.id}`).subscribe(Response => {
 
    this.cliente = Response;
      
    });
}
 
}
