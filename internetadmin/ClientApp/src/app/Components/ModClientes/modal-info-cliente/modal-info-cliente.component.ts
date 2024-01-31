import { PlanesService } from './../../../Services/planes.service';
import { ClientesService } from 'src/app/Services/clientes.service';
import { ClienteModel, clientesarray } from '../../../Models/Cliente-interface';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { planModel } from 'src/app/Models/Plan-interface';

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
  planes:planModel={
    id:0,
    nombre:'',
    costoRenta:0,
  };
  constructor( private clienteService: ClientesService, @Inject(MAT_DIALOG_DATA) public data: ClienteModel, private planesService:PlanesService){
    this.cliente.id =data.id
  }
  ngOnInit(): void {
    this.ObtenerCliente();
  }
 public ObtenerCliente(){
   
    this.clienteService.getCliente(`https://localhost:7125/api/cliente/${this.cliente.id}`).subscribe(Response => {
 
    this.cliente = Response;
    this.obtenerplan();
    });
 
}
 public obtenerplan(){
 
  this.planesService.getPlan(`https://localhost:7125/api/plan/${this.cliente.idPlan}`).subscribe(res=>{
    
    this.planes = res;
    
  })
 }

}
