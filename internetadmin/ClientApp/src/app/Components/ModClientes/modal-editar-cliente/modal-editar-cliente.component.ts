import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteModel } from 'src/app/Models/Cliente-interface';
import { planModel } from 'src/app/Models/Plan-interface';
import { ClientesService } from 'src/app/Services/clientes.service';
import { PlanesService } from 'src/app/Services/planes.service';
 

@Component({
  selector: 'app-modal-editar-cliente',
  templateUrl: './modal-editar-cliente.component.html',
  styleUrls: ['./modal-editar-cliente.component.css']
})
export class ModalEditarClienteComponent implements OnInit{
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
  planes: planModel[] = [];
  localidades: string[] = ['Calkini', 'Nunkini', 'Poocboc','Santa Cruz', 'Hecelchakan','Dzitbalche','Tepakan'];
  clienteForm: FormGroup;
  constructor(private fb: FormBuilder ,private planService:PlanesService, private clienteService:ClientesService,@Inject(MAT_DIALOG_DATA) public data:ClienteModel){
    this.cliente.id = this.data.id
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
    
     this.getCliente();
    this.getPlanes();
  }
 public editarCliente() {
    if(this.clienteForm.valid){
      this.clienteService.EditarCliente(`https://localhost:7125/api/cliente/${this.cliente.id}`,this.clienteForm.value);
    }
  }
  public getCliente(){
    this.clienteService.getCliente(`https://localhost:7125/api/cliente/${this.cliente.id}`).subscribe( Response =>{
 
      this.clienteForm.patchValue(Response);
    });
  }
  getPlanes() {
    this.planService.getAllPlanes(`https://localhost:7125/api/plan`).subscribe(data => {
      this.planes = data;
    });
  }
}
