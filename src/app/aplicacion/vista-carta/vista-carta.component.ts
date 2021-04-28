import { Component, OnInit } from '@angular/core';
import { Contacto, listaContactos } from '../../../app/interfaces/contacto';

@Component({
  selector: 'app-vista-carta',
  templateUrl: './vista-carta.component.html',
  styleUrls: ['./vista-carta.component.scss']
})
export class VistaCartaComponent implements OnInit {

  contactos:Array<Contacto>;

  constructor() {
    this.contactos = listaContactos;  
  }

  ngOnInit(): void {
  }

}
