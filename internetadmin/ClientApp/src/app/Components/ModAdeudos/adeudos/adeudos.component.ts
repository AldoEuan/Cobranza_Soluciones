import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdeudoModel } from 'src/app/Models/Adeudo-Interface';
import { ModalAgregarAdeudosComponent } from '../modal-agregar-adeudos/modal-agregar-adeudos.component';
import { AdeudosService } from 'src/app/Services/adeudos.service';

@Component({
  selector: 'app-adeudos',
  templateUrl: './adeudos.component.html',
  styleUrls: ['./adeudos.component.css']
})
export class AdeudosComponent implements OnInit{
  isLoading: boolean = false; 
  adeudo: AdeudoModel[] =[];
  displayedColumns: string[] = ['id', 'idCliente', 'fechaVencimiento', 'descripcion', 'importe', 'idCobros', 'importeCobrado', 'fechaCobro', 'saldo', 'status'];
  totalImportePorPagar: number = 0;
  totalImporteCobrado: number = 0;
  urlapi='https://interadmin.azurewebsites.net/';
  constructor(public dialog:MatDialog,private adeudoservice:AdeudosService){

  }
  ngOnInit(): void {
     this.getAllAdeudos();
     this.isLoading = false;
  }
  public getAllAdeudos(){
    this.isLoading = true;
    this.adeudoservice.getAllAdeudos(`${this.urlapi}api/registroadeudo/allClientes`).subscribe(Response =>{
      this.adeudo = Response;
      this.calculateTotalImporteporPagar();
      this.calculateTotalImporteCobrado(); 
      console.log(Response);
      this.isLoading = false;
    });
  }

  public getAllAdeudosNoPagados(){
    this.isLoading = true;
    this.adeudoservice.getAllAdeudos(`${this.urlapi}api/registroadeudo/nopagados`).subscribe(Response =>{
      this.adeudo = Response;
      this.calculateTotalImporteporPagar();
      this.calculateTotalImporteCobrado(); 
      console.log(Response);
      this.isLoading = false;
    });
  }
  public getAllAdeudosPagados(){
    this.isLoading = true;
    this.adeudoservice.getAllAdeudos(`${this.urlapi}api/registroadeudo/pagados`).subscribe(Response =>{
      this.adeudo = Response;
      this.calculateTotalImporteporPagar();
      this.calculateTotalImporteCobrado(); 
      console.log(Response);
      this.isLoading = false;
    });
  }
  public calculateTotalImporteporPagar() {
    this.totalImportePorPagar = this.adeudo.reduce((total, element) => {
      if (element.status === null || element.status === true) {
        return total + (element.importe || 0);
      }
      return total;
    }, 0);
  }
  
  
  public calculateTotalImporteCobrado(){
    this.totalImporteCobrado = this.adeudo.reduce((total, element) => total + (element.importeCobrado || 0), 0);
  }
  
  public OpenDialogagregarAdeudo(){

    const dialogRef = this.dialog.open(ModalAgregarAdeudosComponent);
  }
}
