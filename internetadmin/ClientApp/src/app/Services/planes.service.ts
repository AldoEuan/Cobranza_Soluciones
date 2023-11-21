import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { planModel, planesarray } from '../Models/Plan-interface';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(private http:HttpClient) { }
  public getAllPlanes (url:string){
    return this.http.get<planesarray>(url);
  }
  public getPlan(url: string) {
    return this.http.get<planModel>(url);
  }
  
  crearPlan(url: string, plan: planModel) {

    return this.http.post(url, plan).subscribe(response => {
      
      window.location.reload();
    },
      error => {
        console.error('Error al crear usuario:', error);
        // Manejar el error si es necesario
      }
    );
  }

  EditarPlan(url: string, plan: planModel) {
    return this.http.put(url, plan).subscribe(response => {
      console.log('producto editado:', response);
      window.location.reload();
    },
      error => {
        console.error('Error al editar producto:', error);
        // Manejar el error si es necesario
      });
  }
  EliminarPlan(url: string) {
    return this.http.delete(url).subscribe(response => {
      console.log('producto Eliminado:', response);
      window.location.reload();
    },
      error => {
        console.error('Error al Eliminar producto:', error);
        // Manejar el error si es necesario
      });
  }
}
