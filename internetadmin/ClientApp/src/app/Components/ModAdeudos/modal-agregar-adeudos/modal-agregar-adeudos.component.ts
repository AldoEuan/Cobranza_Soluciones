import { AdeudosService } from './../../../Services/adeudos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdeudoModel } from 'src/app/Models/Adeudo-Interface';
import { ClienteModel } from 'src/app/Models/Cliente-interface';
import { ClientesService } from 'src/app/Services/clientes.service';
import { PlanesService } from 'src/app/Services/planes.service';

@Component({
  selector: 'app-modal-agregar-adeudos',
  templateUrl: './modal-agregar-adeudos.component.html',
  styleUrls: ['./modal-agregar-adeudos.component.css']
})
export class ModalAgregarAdeudosComponent implements OnInit{
  adeudo: AdeudoModel[] = [
    {
      id: 1,
      idCliente: 0,
      fechaVencimiento: new Date(),
      descripcion:new Date(),
      importe: 0,
       
      status: true
    }];

  adeudoFrom:FormGroup;
  clientes: ClienteModel[] = [];
  constructor(private adeudoServices:AdeudosService,private clientesService:ClientesService,private fb: FormBuilder){
    this.adeudoFrom = this.fb.group({
      idCliente:[0,Validators.required],
      fechaVencimiento: [new Date(new Date().getFullYear(), new Date().getMonth(), 6), Validators.required],
      descripcion: [new Date(), Validators.required],
      importe:[0,Validators.required]
    });
  }
  ngOnInit(): void {
    this.getClientes();
  }
  getClientes() {
    this.clientesService.getAllClientes(`https://localhost:7125/api/cliente`).subscribe(data => {
      console.log(data);
      this.clientes = data;
    });
  }
 
  public registrarAdeudo() {
    if (this.adeudoFrom) {
      const idClienteSeleccionado = this.adeudoFrom.get('idCliente')?.value;
      if (idClienteSeleccionado !== null && idClienteSeleccionado !== undefined) {
        const ClienteNombre = this.clientes.find(cliente => cliente.id === idClienteSeleccionado)?.nombre;
    
        if (ClienteNombre) {
          const adeudoData = {
            ...this.adeudoFrom.value,
            ClienteNombre: ClienteNombre // Agregar el nombre del cliente al objeto de datos del adeudo
          };
          console.log(this.adeudoFrom.value);
          this.adeudoServices.crearAdeudo('https://localhost:7125/api/registroadeudo/crearadeudo', adeudoData);
        } else {
          console.error('No se pudo encontrar el nombre del cliente seleccionado');
        }
      } else {
        console.error('El campo idCliente no tiene un valor seleccionado');
      }
    } else {
      console.error('this.adeudoFrom es nulo o indefinido');
    }
  }
  
}
