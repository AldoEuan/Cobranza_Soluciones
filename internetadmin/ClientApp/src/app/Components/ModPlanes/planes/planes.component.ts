import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAgregarPlanesComponent } from '../modal-agregar-planes/modal-agregar-planes.component';
import { planModel } from 'src/app/Models/Plan-interface';
import { PlanesService } from 'src/app/Services/planes.service';
import { ModalEditarPlanesComponent } from '../modal-editar-planes/modal-editar-planes.component';
import { ModalEliminarPlanesComponent } from '../modal-eliminar-planes/modal-eliminar-planes.component';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {
  planes:planModel[]=[];
  displayedColumns: string[] = ['id', 'nombre', 'renta', 'editar' ];
  constructor(public dialog:MatDialog, private planService:PlanesService){}
  ngOnInit(): void {
    this.GetAllPlanes();
  }
  public GetAllPlanes(){
    this.planService.getAllPlanes(`https://localhost:7125/api/plan`).subscribe(Response =>{
      console.log(Response);
       this.planes = Response;
    })
  }
  public OpenDialogagregarPlan(){
    const dialogRef = this.dialog.open(ModalAgregarPlanesComponent);
 
  }
  public OpenDialogEditar(id:number){
    const dialogRef = this.dialog.open(ModalEditarPlanesComponent,{
      data:{id}
    });
 
  }
  public OpenDialogEliminar(id:number){
    const dialogRef = this.dialog.open(ModalEliminarPlanesComponent,{
      data:{id}
    });
 
  }
}
