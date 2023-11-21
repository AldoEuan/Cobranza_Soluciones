import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { planModel } from 'src/app/Models/Plan-interface';
import { PlanesService } from 'src/app/Services/planes.service';

@Component({
  selector: 'app-modal-agregar-planes',
  templateUrl: './modal-agregar-planes.component.html',
  styleUrls: ['./modal-agregar-planes.component.css']
})
export class ModalAgregarPlanesComponent implements OnInit{
  
  plan:planModel={
    id:1,
    nombre:'',
    costoRenta:0,
    
  }

  planForm:FormGroup;
  constructor(private fb: FormBuilder ,private planService:PlanesService,){
    this.planForm = this.fb.group({
      nombre:['',Validators.required],
      costoRenta:[0,[Validators.required]],
    });
  }
  
  ngOnInit(): void {
    
  }
  registrarPlan() {
    if(this.planForm.valid){
      this.planService.crearPlan(`https://localhost:7125/api/plan`,this.planForm.value);
    }
  }
}
