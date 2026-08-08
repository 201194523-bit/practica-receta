const persona = { name: 'Dani'}
persona.age = 30
console.log(persona) // -> { name: 'Dani', age: 30 }

const alumno = {
    nombre: "Ana",
    edad: 20,
    carrera: "TI",

    presentarse: function() {
        return `Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio ${this.carrera}.`;
    }
};

console.log(alumno.presentarse());