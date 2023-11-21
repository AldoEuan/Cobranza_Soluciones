import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdeudoModel, adeudoarray } from '../Models/Adeudo-Interface';

@Injectable({
  providedIn: 'root'
})
export class AdeudosService {

  constructor(private http:HttpClient) { }
  
  public getAllAdeudos (url:string){
    return this.http.get<adeudoarray>(url);
  }
  public getAdeudo(url: string) {
    return this.http.get<AdeudoModel>(url);
  }
  
  crearAdeudo(url: string, adeudo: AdeudoModel) {

    return this.http.post(url, adeudo).subscribe(response => {
      
      window.location.reload();
    } 
    );
  }

  EditarAdeudo(url: string, adeudo: AdeudoModel) {
    return this.http.put(url, adeudo).subscribe(response => {
       
      window.location.reload();
    } );
  }
}
