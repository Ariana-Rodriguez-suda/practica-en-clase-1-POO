var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años.');
    };
    return Persona;
}());
//Crear un objeto de la clase
var persona1 = new Persona("Caro", 25);
persona1.saludar();
