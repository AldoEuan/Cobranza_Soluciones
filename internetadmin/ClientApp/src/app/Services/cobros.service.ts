import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CobrarModel, CobrosModel, cobrosArray } from '../Models/Cobros-interface';

@Injectable({
  providedIn: 'root'
})
export class CobrosService {

  constructor(private http: HttpClient) { }
  
  public getAllCobros(url: string) {
    return this.http.get<cobrosArray>(url);
  }
  public getAllCobrosporNombre (url:string){
    return this.http.get<cobrosArray>(url);
  }
  public getCobro(url: string) {
    return this.http.get<CobrosModel>(url);
  }
  EditarCobro(url: string, cobro: CobrosModel) {
    return this.http.put(url, cobro).subscribe(response => {
       
      window.location.reload();
    });
  }
}
