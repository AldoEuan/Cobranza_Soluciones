import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioModel } from 'src/app/Models/Usuario-Interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public form:FormGroup;
  public errorMessage: string = '';

  urlapi='https://interadmin.azurewebsites.net/';

  usuario:UsuarioModel={
    token:'',
    correo:''
  }
  constructor(private formBuilder:FormBuilder, private http:HttpClient,private cookieService:CookieService, private router:Router){
    this.form = this.formBuilder.group({
      correo:['',Validators.required],
      clave:['',Validators.required]
    })
    
  }

  ngOnInit(): void {
   
   
  }

  loggear() {
    this.http.post(`${this.urlapi}api/autenticacion/login/`, this.form.value).subscribe(
      (res: any) => {
        console.log(this.form.value);
        this.usuario = res;
        this.cookieService.set('token', this.usuario.token, 4, '/');
        this.router.navigate(['/InterAdmin']);
      },
      (error) => {
        if (error.status === 401) {
          // Error de credenciales incorrectas
          this.errorMessage = 'Usuario y/o contraseña incorrectos';
        } else {
          // Otro manejo de errores si es necesario
          console.error('Error en la solicitud de inicio de sesión:', error);
          this.errorMessage = 'Error en la solicitud de inicio de sesión. Por favor, inténtalo de nuevo más tarde.';
        }
      }
    );
  }
}