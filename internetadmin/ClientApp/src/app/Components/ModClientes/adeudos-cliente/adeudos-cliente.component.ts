import { ModalEditarClienteComponent } from './../modal-editar-cliente/modal-editar-cliente.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AdeudoModel } from 'src/app/Models/Adeudo-Interface';
import { ClienteModel } from 'src/app/Models/Cliente-interface';
import { AdeudosService } from 'src/app/Services/adeudos.service';
import { ModalEditarAdeudosComponent } from '../../ModAdeudos/modal-editar-adeudos/modal-editar-adeudos.component';
import { ModalEditarCobrosComponent } from '../../ModCobros/modal-editar-cobros/modal-editar-cobros.component';

@Component({
  selector: 'app-adeudos-cliente',
  templateUrl: './adeudos-cliente.component.html',
  styleUrls: ['./adeudos-cliente.component.css']
})
export class AdeudosClienteComponent implements OnInit {
  adeudo: AdeudoModel[] = [];
  displayedColumns: string[] = ['id', 'idCliente', 'fechaVencimiento', 'descripcion', 'importe', 'idCobros', 'importeCobrado', 'fechaCobro', 'saldo', 'status'];
  urlapi = 'https://interadmin.azurewebsites.net/';
  cliente: ClienteModel = {
    id: 0,
    nombre: '',
  }
  constructor(private adeudoservice: AdeudosService, @Inject(MAT_DIALOG_DATA) public data: ClienteModel, public dialog: MatDialog,public dialogRef:MatDialogRef<AdeudosClienteComponent>) {
    this.cliente.id = data.id;
    this.cliente.nombre = data.nombre;
  }
  ngOnInit(): void {
    this.getAllAdeudos();
  }

  public getAllAdeudos() {
    this.adeudoservice.getAllAdeudos(`${this.urlapi}api/registroadeudo/deudas/${this.cliente.id}`).subscribe(Response => {
      this.adeudo = Response;

      console.log(Response);
    });
  }
  public cobrar() {
    if (this.adeudo.length > 0) {
      const dialogRef = this.dialog.open(ModalEditarCobrosComponent, { data: { id: this.adeudo[0].idCobros } });
    }
  }

  cerrarDialogo(): void {
    this.dialogRef.close();
  }
}
