import { Component, OnInit } from '@angular/core';
import { Contacto, listaContactos } from '../../../app/interfaces/contacto';
@Component({
  selector: 'app-vista-lista',
  templateUrl: './vista-lista.component.html',
  styleUrls: ['./vista-lista.component.scss']
})
export class VistaListaComponent implements OnInit {

  contactos:Array<Contacto>;

  constructor() { 
    this.contactos = listaContactos;
  }

  ngOnInit(): void {
  }

}
