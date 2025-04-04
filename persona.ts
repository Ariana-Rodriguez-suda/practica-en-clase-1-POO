 class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años.');
    }
 }

 //Crear un objeto de la clase
 const persona1 = new Persona("Caro", 25);
 persona1.saludar();
