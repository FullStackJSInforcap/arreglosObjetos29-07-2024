/* Arreglos y Objetos (literales) */
// arreglos
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for(let i = 0 ; i < arreglo.length ; i++){
    console.log(arreglo[i]);
}

console.log(arreglo);

let cadenas = [];
cadenas[0] = 'Primera cadena';
cadenas[1] = 'Segunda cadena';
cadenas[2] = 'Tercera cadena';
cadenas[3] = 'Cuarta cadena';
cadenas[4] = 'Quinta cadena';

console.log(cadenas);

for(let i = 0 ; i < cadenas.length ; i++){
    console.log(cadenas[i]);
}

// objetos literales
let persona = {
    rut: '11111111-1',
    nombre: 'Juanito perez',
    fechaNacimiento: '04-08-1990',
    signoZodiacal: 'Leo',
    direccion: {
        calle: 'De por ahí',
        numero: 5432,
        comuna: 'puente alto',
        provincia: 'cordillera',
        region: 'metropolitana'
    },
    caminar: function(){
        console.log('Caminando');
    }
}

console.log(persona.rut);
persona.caminar();

console.log(persona);
console.log(persona.direccion);
console.log(persona.direccion.calle);
