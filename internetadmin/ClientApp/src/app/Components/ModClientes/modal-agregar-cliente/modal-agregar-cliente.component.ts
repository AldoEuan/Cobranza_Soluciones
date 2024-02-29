import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteModel } from 'src/app/Models/Cliente-interface';
import {  planModel } from 'src/app/Models/Plan-interface';
import { ClientesService } from 'src/app/Services/clientes.service';
import { PlanesService } from 'src/app/Services/planes.service';

@Component({
  selector: 'app-modal-agregar-cliente',
  templateUrl: './modal-agregar-cliente.component.html',
  styleUrls: ['./modal-agregar-cliente.component.css']
})
export class ModalAgregarClienteComponent implements OnInit {
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
  urlapi='https://interadmin.azurewebsites.net/';
  planes: planModel[] = [];
  localidades: string[] = ['Calkini', 'Nunkini', 'Poocboc','Santa Cruz', 'Hecelchakan','Dzitbalche','Tepakan','Bacabchen']; // Puedes cargar estas opciones desde tu servicio si es necesario
  clienteForm: FormGroup;
  constructor(private fb: FormBuilder ,private planService:PlanesService, private clienteService:ClientesService, public dialogRef:MatDialogRef<ModalAgregarClienteComponent>){

    this.clienteForm = this.fb.group({
      nombre: ['',Validators.required],
      telefono: ['',Validators.required],
      correo: ['',Validators.required],
      direccion: ['',Validators.required],
      colonia: ['',Validators.required],
      localidad: ['',Validators.required],
      referencia: ['',Validators.required],
      ssid: ['',Validators.required],
      ip: ['',Validators.required],
      estado: [false],
      idPlan: ['',Validators.required]
    });
  }
  ngOnInit(): void {
     this.getPlanes();
  
  }
  registrarCliente() {
    if(this.clienteForm.valid){
      this.clienteService.crearCliente(`${this.urlapi}api/cliente`,this.clienteForm.value);
    }
  }
  getPlanes() {
    this.planService.getAllPlanes(`${this.urlapi}api/plan`).subscribe(data => {
      this.planes = data;
    });
  }
  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
