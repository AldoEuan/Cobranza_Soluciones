import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketModel } from 'src/app/Models/Tickets-interface';
import { TicketsService } from 'src/app/Services/tickets.service';
import { ModalInfoTicketsComponent } from '../modal-info-tickets/modal-info-tickets.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  ticket: TicketModel[] =[ ];
  displayedColumns: string[] = ['id', 'fecha', 'idAdeudo', 'idCobros', 'cliente', 'localidad', 'fechaVencimiento', 'descripcion', 'total', 'ver'];
 
  constructor(private ticketService:TicketsService, public dialog:MatDialog){}
  ngOnInit(): void {
    this.getAllTickets();
  }

  public opendialogTicket(id:number){
    const dialogRef = this.dialog.open(ModalInfoTicketsComponent,{
      data:{id}
    });
  }

  public getAllTickets(){
    this.ticketService.getAllTickets('https://localhost:7125/api/ticket').subscribe(Response =>{
      this.ticket = Response;
      console.log(Response);
      this.ticket.forEach(element => {
        if (element.fecha === null) {
          element.fecha = new Date(); // Asignamos una nueva fecha
        }
      });
      }
    )
  }
}
