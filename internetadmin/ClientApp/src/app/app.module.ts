import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

 
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
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
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
