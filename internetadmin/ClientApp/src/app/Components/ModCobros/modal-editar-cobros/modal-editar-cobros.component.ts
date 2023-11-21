import { MatPaginatorModule } from '@angular/material/paginator';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CobrosService } from 'src/app/Services/cobros.service';
import { CobrosModel } from 'src/app/Models/Cobros-interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
 
 
@Component({
  selector: 'app-modal-editar-cobros',
  templateUrl: './modal-editar-cobros.component.html',
  styleUrls: ['./modal-editar-cobros.component.css']
})
export class ModalEditarCobrosComponent implements OnInit{
  cobro:CobrosModel={
    id:0,
    cliente:0,

    idAdeudo:0,
    // descripcionPago:new Date(),
    importeAdeudo:0,
    // fechaPago:new Date(),
    total:0,
    observaciones:'',
    localidad:'',
  }
  cobroForm: FormGroup;
  localidades: string[] = ['Calkini', 'Nunkini', 'Poocboc','Santa Cruz', 'Hecelchakan','Dzitbalche','Tepakan'];
  constructor(private fb: FormBuilder ,private cobroService:CobrosService,@Inject(MAT_DIALOG_DATA) public data:CobrosModel ,  ){
    this.cobro.id = data.id;
    this.cobroForm = this.fb.group({
      cliente:[0],
      nombreCliente:[''],
      idAdeudo:[0],
      descripcionPago:[new Date()],
      importeAdeudo:[0],
      fechaPago: [new Date()],
      total:[0,Validators.required],
      localidad:['',Validators.required],
      observaciones:['',[Validators.required,Validators.maxLength(249)]],
    });
  }
  ngOnInit(): void {
    this.getCobro();
  }
  public getCobro(){
    this.cobroService.getCobro(`https://localhost:7125/api/registrocobro/${this.cobro.id}`).subscribe(Response=>{
      
      if (Response.descripcionPago) {
        const fecha = new Date(Response.descripcionPago);
        const fechaFormateada = `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, '0')}-${String(fecha.getDate()).padStart(2, '0')}`;
        
        this.cobroForm.patchValue(Response);
        this.cobroForm.patchValue({descripcionPago: fechaFormateada });
      }
      
    });
  }
  public editarCobro(){
    if(this.cobroForm.valid){
      // const cobroFormValue = this.cobroForm.value;
      // delete cobroFormValue.nombreCliente; // Elimina el campo nombreCliente del objeto
      console.log(this.cobroForm.value);
      this.cobroService.EditarCobro(`https://localhost:7125/api/registrocobro/${this.cobro.id}`, this.cobroForm.value);

    }
  }
}
