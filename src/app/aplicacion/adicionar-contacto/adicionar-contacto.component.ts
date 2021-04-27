import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-contacto',
  templateUrl: './adicionar-contacto.component.html',
  styleUrls: ['./adicionar-contacto.component.scss']
})
export class AdicionarContactoComponent implements OnInit {

  listaPaises:Array<string>;
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
  }

  ngOnInit(): void {
    
  }

  crear(){
    console.log(this.pais.value);
  }

  cancelar(){
    this.nombres.setValue("");
    this.apellidos.setValue("");
    this.radio.setValue("");
    this.pais.setValue("");
    this.ciudad.setValue("");
  }

}
