import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { planModel } from 'src/app/Models/Plan-interface';
import { PlanesService } from 'src/app/Services/planes.service';

@Component({
  selector: 'app-modal-editar-planes',
  templateUrl: './modal-editar-planes.component.html',
  styleUrls: ['./modal-editar-planes.component.css']
})
export class ModalEditarPlanesComponent implements OnInit {
  plan:planModel={
    id:1,
    nombre:'',
    costoRenta:0
  }
  planForm:FormGroup;
  constructor(private fb: FormBuilder ,private planService:PlanesService,@Inject(MAT_DIALOG_DATA) public data:planModel){
    this.plan.id = data.id;
    this.planForm = this.fb.group({
      nombre:['',Validators.required],
      costoRenta:[0,[Validators.required]],
    });
  }
  ngOnInit(): void {
    this.getPlan();
  }
  public getPlan(){
    this.planService.getPlan(`https://localhost:7125/api/plan/${this.plan.id}`).subscribe(Response =>{
      this.planForm.patchValue(Response)
    })
  }
public editarPlan(){
  if(this.planForm.valid)
  this.planService.EditarPlan(`https://localhost:7125/api/plan/${this.plan.id}`,this.planForm.value);

  }
}