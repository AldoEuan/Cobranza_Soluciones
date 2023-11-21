import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './Shared/angular-materials.module';
import { ClientesComponent } from './Components/ModClientes/clientes/clientes.component';
import { ModalInfoClienteComponent } from './Components/ModClientes/modal-info-cliente/modal-info-cliente.component';
import { ModalAgregarClienteComponent } from './Components/ModClientes/modal-agregar-cliente/modal-agregar-cliente.component';
import { PlanesComponent } from './Components/ModPlanes/planes/planes.component';
import { ModalAgregarPlanesComponent } from './Components/ModPlanes/modal-agregar-planes/modal-agregar-planes.component';
import { ModalEliminarPlanesComponent } from './Components/ModPlanes/modal-eliminar-planes/modal-eliminar-planes.component';
import { ModalEditarPlanesComponent } from './Components/ModPlanes/modal-editar-planes/modal-editar-planes.component';
import { ModalEditarClienteComponent } from './Components/ModClientes/modal-editar-cliente/modal-editar-cliente.component';
import { ModalEliminarClienteComponent } from './Components/ModClientes/modal-eliminar-cliente/modal-eliminar-cliente.component';
import { AdeudosComponent } from './Components/ModAdeudos/adeudos/adeudos.component';
import { ModalAgregarAdeudosComponent } from './Components/ModAdeudos/modal-agregar-adeudos/modal-agregar-adeudos.component';
import { ModalEditarAdeudosComponent } from './Components/ModAdeudos/modal-editar-adeudos/modal-editar-adeudos.component';
import { CobrosComponent } from './Components/ModCobros/cobros/cobros.component';
import { ModalEditarCobrosComponent } from './Components/ModCobros/modal-editar-cobros/modal-editar-cobros.component';
import { TicketsComponent } from './Components/ModTickets/tickets/tickets.component';
import { ModalInfoTicketsComponent } from './Components/ModTickets/modal-info-tickets/modal-info-tickets.component';
import { AdeudosClienteComponent } from './Components/ModClientes/adeudos-cliente/adeudos-cliente.component';
import { CommonModule } from '@angular/common';
=======
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    FetchDataComponent,
   ClientesComponent,
    ModalInfoClienteComponent,
    ModalAgregarClienteComponent,
    ModalEditarClienteComponent,
    ModalEliminarClienteComponent,
    PlanesComponent,
    ModalAgregarPlanesComponent,
    ModalEliminarPlanesComponent,
    ModalEditarPlanesComponent,
    AdeudosComponent,
    ModalAgregarAdeudosComponent,
    ModalEditarAdeudosComponent,
    CobrosComponent,
    ModalEditarCobrosComponent,
    TicketsComponent,
    ModalInfoTicketsComponent,
    AdeudosClienteComponent,
=======
    FetchDataComponent
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
    FetchDataComponent
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
<<<<<<< HEAD
    AngularMaterialsModule,
    ReactiveFormsModule,
 
   
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'adeudos', component: AdeudosComponent },
      { path: 'planes', component: PlanesComponent },
      { path: 'cobros', component: CobrosComponent },
      { path: 'tickets', component: TicketsComponent },
=======
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
=======
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
>>>>>>> parent of 65afcfb (Frontend Funcional modulos de clientes y planes)
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
