import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarContactoComponent } from '../app/aplicacion/adicionar-contacto/adicionar-contacto.component';
import { VistaCartaComponent } from '../app/aplicacion/vista-carta/vista-carta.component';
import { VistaListaComponent } from '../app/aplicacion/vista-lista/vista-lista.component';

const routes: Routes = [
  {path: 'vistaCarta', component: VistaCartaComponent},
  {path: 'vistaLista', component: VistaListaComponent},
  {path:'', component: AdicionarContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
