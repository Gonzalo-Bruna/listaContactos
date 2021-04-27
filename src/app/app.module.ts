import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaCartaComponent } from './aplicacion/vista-carta/vista-carta.component';
import { VistaListaComponent } from './aplicacion/vista-lista/vista-lista.component';
import { AdicionarContactoComponent } from './aplicacion/adicionar-contacto/adicionar-contacto.component';
import { HeaderComponent } from './aplicacion/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VistaCartaComponent,
    VistaListaComponent,
    AdicionarContactoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
