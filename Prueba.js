/*
1) cuando declaras una variable let es un tipo de variable que se tiene un delimitado que es entre {} y solo se puede usar 
dentro de la misma funcion,a let cuando se le asigna un valor  puede ser modificado por fuera de la misma,
cuando declaras una varible var es un tipo de variable que es global osea si la pongo fuera de una funcion puedo 
traerla en las funciones que yo tenga pero si la tengo  en una funcion solo servira dentro de la misma 
no puedo pedirla desde otra funcion ya que solo pertenece a la funcion anterior lo cual nosotros la pusimos,
cuando declaras una variable const significa que es constante y que no se puede modificar el valor dentro de la misma.
2) no me acuerdo xd
3)lo que devuelve filter es que podes seleccionar algunos elementos de un array 
y lo que  devuelve es un nuevo array con todos los elementos del array original que hace lo que hacia el array anterior
y con map se pueden  manipular arrays de forma segura, y lo que 
devuelve es un nuevo array con los elementos transformados según una función aplicada a cada uno sin filtrarlos.
4) el metodo arrays que permite agregar un elemento al principio  de un arreglo es el unshift(valor)
*/

const alumnos = [
  { nombre: "Ana", edad: 20, nota: 8 },
  { nombre: "Luis", edad: 17, nota: 5 },
  { nombre: "Carla", edad: 22, nota: 9 },
];

// act 1
alumnos.forEach((alumnos) => {
  if (alumnos.nota >= 6) {
    console.log(`${alumnos.nombre} está aprobado.`);
  } else {
    console.log(`${alumnos.nombre} está desaprobado.`);
  }
});

//ejersicio 2
function obtenerPromedio(notas) {
  let sumaDenotas = 0;
  let cantidadNotas = 0;
  let promedio = 0;
  notas.forEach((alumno) => {
    sumaDenotas += alumno.nota;
  });
  cantidadNotas = notas.length;
  return (promedio = sumaDenotas / cantidadNotas);
}

console.log(obtenerPromedio(alumnos));

//act 2
//ejercicio 1
const alumnosMayores = alumnos.filter((alumno) => alumno.edad >= 18);

console.log(alumnosMayores);

//ejercicio 2
const nombresMayusculas = alumnos.map((alumno) => alumno.nombre.toUpperCase());

console.log(nombresMayusculas);

.