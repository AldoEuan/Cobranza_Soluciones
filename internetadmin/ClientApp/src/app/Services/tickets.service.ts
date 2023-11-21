import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketModel, Ticketsarray } from '../Models/Tickets-interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  public getAllTickets(url:string){
    return this.http.get<Ticketsarray>(url);
  }
  public getTicket(url: string) {
    return this.http.get<TicketModel>(url);
  }
  
}
