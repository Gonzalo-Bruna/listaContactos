export interface Contacto {
    nombres:string;
    apellidos:string;
    genero:string;
    pais:string;
    region:string;
}

export let listaContactos:Array<Contacto> = [];