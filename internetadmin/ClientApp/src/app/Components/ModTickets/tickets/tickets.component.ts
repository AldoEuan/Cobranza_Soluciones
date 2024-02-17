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
  isLoading: boolean = false; 
  ticket: TicketModel[] =[ ];
  displayedColumns: string[] = ['id', 'fecha', 'idAdeudo', 'idCobros', 'cliente', 'localidad', 'fechaVencimiento', 'descripcion', 'total', 'ver'];
  pagina=1;
  urlapi='https://interadmin.azurewebsites.net/';
  constructor(private ticketService:TicketsService, public dialog:MatDialog){}
  ngOnInit(): void {
    this.getAllTickets();
    this.isLoading = false;
  }

  public opendialogTicket(id:number){
    const dialogRef = this.dialog.open(ModalInfoTicketsComponent,{
      data:{id}
    });
  }

  public getAllTickets(){
    this.isLoading = true;
    this.ticketService.getAllTickets(`${this.urlapi}api/ticket?pagina=${this.pagina}`).subscribe(Response =>{
      this.ticket = Response;
      console.log(Response);
      this.ticket.forEach(element => {
        if (element.fecha === null) {
          element.fecha = new Date(); // Asignamos una nueva fecha
        }
      });
      this.isLoading = false;

      }
    )
  }

  public paginaprev(){
    this.pagina--;
    if(this.pagina==0){
      this.pagina=1;
      this.getAllTickets();
    }
    this.getAllTickets();
  }
  public paginanext(){
    this.pagina++;
    this.getAllTickets();
  }
}
