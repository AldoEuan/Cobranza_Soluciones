import { Component, OnInit } from '@angular/core';
import { AdeudoModel } from 'src/app/Models/Adeudo-Interface';
import { CobrosModel } from 'src/app/Models/Cobros-interface';
import { CobrosService } from 'src/app/Services/cobros.service';
import { ModalEditarCobrosComponent } from '../modal-editar-cobros/modal-editar-cobros.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.component.html',
  styleUrls: ['./cobros.component.css']
})
export class CobrosComponent implements OnInit {
  isLoading: boolean = false; 
  cobros: CobrosModel[] =[];
  displayedColumns: string[] = ['id', 'cliente', 'idAdeudo', 'descripcionPago', 'importeAdeudo', 'fechaPago', 'total', 'observaciones', 'localidad','cobrar'];
 

  constructor(private cobroService:CobrosService, private dialog:MatDialog){

  }

  ngOnInit(): void {
    this.getAllCobros();
    this.isLoading = false;
  }

  public OpenDialogEditarCobro(id:number){

    const dialogRef = this.dialog.open(ModalEditarCobrosComponent,{
      data:{id}
    });
  }

  public getAllCobros(){
    this.isLoading = true; 
    this.cobroService.getAllCobros('https://localhost:7125/api/registrocobro').subscribe(Response =>{
      this.cobros = Response;
      console.log(Response);
    });
  }
  
}
