import { Injectable } from '@angular/core';
import { ClienteModel, clientesarray } from '../Models/Cliente-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  public getAllClientes (url:string){
    return this.http.get<clientesarray>(url);
  }
  public getCliente(url: string) {
    return this.http.get<ClienteModel>(url);
  }
  
  crearCliente(url: string, cliente: ClienteModel) {

    return this.http.post(url, cliente).subscribe(response => {
      
      window.location.reload();
    },
      error => {
        console.error('Error al crear usuario:', error);
        // Manejar el error si es necesario
      }
    );
  }

  EditarCliente(url: string, cliente: ClienteModel) {
    return this.http.put(url, cliente).subscribe(response => {
      console.log('producto editado:', response);
      window.location.reload();
    },
      error => {
        console.error('Error al editar producto:', error);
        // Manejar el error si es necesario
      });
  }
  EliminarCliente(url: string) {
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
