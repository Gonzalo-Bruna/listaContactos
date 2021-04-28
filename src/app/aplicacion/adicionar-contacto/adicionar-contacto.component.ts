import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto, listaContactos } from '../../../app/interfaces/contacto';

@Component({
  selector: 'app-adicionar-contacto',
  templateUrl: './adicionar-contacto.component.html',
  styleUrls: ['./adicionar-contacto.component.scss']
})
export class AdicionarContactoComponent implements OnInit {

  listaPaises:Array<string>;
  listaContactos:Array<Contacto>;
  formulario:FormGroup;
  nombres:AbstractControl;
  apellidos:AbstractControl;
  radio:AbstractControl;
  pais:AbstractControl;
  ciudad:AbstractControl;

  constructor(public fb:FormBuilder) { 
    this.formulario = this.fb.group({
      nombres:['', [Validators.required]],
      apellidos:['', [Validators.required]],
      radio:['', [Validators.required]],
      pais:['', [Validators.required]],
      ciudad:['', [Validators.required]]
    });

    this.nombres = this.formulario.controls['nombres'];
    this.apellidos = this.formulario.controls['apellidos'];
    this.radio = this.formulario.controls['radio'];
    this.pais = this.formulario.controls['pais'];
    this.ciudad = this.formulario.controls['ciudad'];
    
    this.listaPaises = [
      "Argentina",
      "Bolivia",
      "Brasil",
      "Chile",
      "Colombia",
      "Costa Rica",
      "Cuba",
      "Ecuador",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "México",
      "Nicaragua",
      "Panamá",
      "Paraguay",
      "Perú",
      "República Dominicana",
      "Uruguay",
      "Venezuela"
    ];

    this.listaContactos = listaContactos;
  }

  ngOnInit(): void {
    
  }

  crear(){
    let contacto:Contacto = {
      nombres: this.nombres.value,
      apellidos: this.apellidos.value,
      genero: this.radio.value,
      pais: this.pais.value,
      ciudad: this.ciudad.value
    }

    this.listaContactos.push(contacto);
    this.mostrarAlert();
    this.limpiar();
  }

  cancelar(){
    this.nombres.setValue("");
    this.apellidos.setValue("");
    this.radio.setValue("");
    this.pais.setValue("");
    this.ciudad.setValue("");
  }

  limpiar(){
    this.apellidos.reset();
    this.radio.reset();
    this.pais.reset();
    this.ciudad.reset();
    this.nombres.reset();
  }

  mostrarAlert(){
    let alert:any;
    alert = document.getElementById("alert-contacto-agregado");
    if(alert.classList.contains("d-none")){
      alert.classList.toggle("d-none");
    }
    
  }

  cerrarAlert(){
    let alert:any;
    alert = document.getElementById("alert-contacto-agregado");
    alert.classList.toggle("d-none");
  }

}
