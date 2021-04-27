export interface Contacto {
    nombres:string;
    apellidos:string;
    genero:string;
    pais:string;
    ciudad:string;
}

export let listaContactos:Array<Contacto> = [];