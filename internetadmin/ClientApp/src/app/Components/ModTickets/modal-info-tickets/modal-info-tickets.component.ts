import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TicketModel } from 'src/app/Models/Tickets-interface';
import { TicketsService } from 'src/app/Services/tickets.service';

@Component({
  selector: 'app-modal-info-tickets',
  templateUrl: './modal-info-tickets.component.html',
  styleUrls: ['./modal-info-tickets.component.css']
})
export class ModalInfoTicketsComponent implements OnInit {
  ticket: TicketModel={
    id: 0,
    fecha: new Date() ,
    idAdeudo: 0,
    idCobros: 0,
    cliente: 0,
    localidad:'',
    fechaVencimiento:new Date(),
    descripcion:new Date(),
    total: 0,
    nombreCliente: '',
    telefonoCliente:'',
    nombreplan:'',
  };
  constructor(private ticketService:TicketsService, @Inject(MAT_DIALOG_DATA) public data: TicketModel){
    this.ticket.id =data.id
 
  }

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(){
    this.ticketService.getTicket(`https://localhost:7125/api/ticket/${this.ticket.id}`).subscribe(Response =>{
      console.log(Response)
      this.ticket = Response;
    
     if (this.ticket.fecha === null) {
      this.ticket.fecha = new Date();
    }
  
    });
  }
}
