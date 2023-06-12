// Array de cervezas de ejemplo
let cervezas = [
  { nombre: "Cerveza A", alcohol: 5, amargor: 20 },
  { nombre: "Cerveza B", alcohol: 8, amargor: 30 },
  { nombre: "Cerveza C", alcohol: 4, amargor: 25 },
  { nombre: "Cerveza D", alcohol: 6, amargor: 35 }
];
console.log(cervezas);
//Ejercicio 1.. // 
function filtrarCervezasPorAlcohol(cervezas, nivelAlcohol) {
    return cervezas.filter(function(cerveza) {
      return cerveza.alcohol <= nivelAlcohol;
    }).map(function(cerveza) {
      return {
        nombre: cerveza.nombre,
        alcohol: cerveza.alcohol,
        amargor: cerveza.amargor
      };
    });
  }
  //declare cerveza como una array y lo redeclare con un string vacio// 
 

  // Valor de alcohol máximo permitido 

  //VAR CAMBIA CUANTAS VECES.. CONST NO
  //LET es mejor// 
  var nivelAlcoholMaximo = 6;
  
  // Filtrar cervezas por nivel de alcohol
  var cervezasFiltradas = filtrarCervezasPorAlcohol(cervezas, nivelAlcoholMaximo);
  
  // Imprimir el resultado
  console.log(cervezasFiltradas);
  
  
//Ejercicio 2 ////  
function obtenerCervezasMasAlcoholicas(cervezas) {
    // Ordenar las cervezas de forma descendente según su nivel de alcohol
    cervezas.sort(function(a, b) {
      return b.alcohol - a.alcohol;
    });
    
    // Obtener las 10 cervezas más alcohólicas (o menos si el array tiene menos de 10 elementos)
    var cervezasMasAlcoholicas = cervezas.slice(0, 10);
    
    return cervezasMasAlcoholicas;
  }

  // Array de cervezas de ejemplo
const cervezas2 = [
    { nombre: "Cerveza A", alcohol: 5 },
    { nombre: "Cerveza B", alcohol: 8 },
    { nombre: "Cerveza C", alcohol: 4 },
    { nombre: "Cerveza D", alcohol: 6 },
    { nombre: "Cerveza E", alcohol: 10 },
    { nombre: "Cerveza F", alcohol: 7 },
    { nombre: "Cerveza G", alcohol: 9 },
    { nombre: "Cerveza H", alcohol: 3 },
    { nombre: "Cerveza I", alcohol: 2 },
    { nombre: "Cerveza J", alcohol: 1 },
    { nombre: "Cerveza K", alcohol: 4.5 },
  ];
  
  // Obtener las 10 cervezas más alcohólicas
  var cervezasMasAlcoholicas = obtenerCervezasMasAlcoholicas(cervezas2);
  
  // Imprimir el resultado
  console.log(cervezasMasAlcoholicas);
  
//Ejercicio 3 ///

function obtenerCervezasMasAlcoholicas(cervezas) {
    // Ordenar las cervezas de forma descendente según su nivel de alcohol
    cervezas.sort(function(a, b) {
      return b.alcohol - a.alcohol;
    });
    
    // Obtener las 10 cervezas más alcohólicas (o menos si el array tiene menos de 10 elementos)
    var cervezasMasAlcoholicas = cervezas.slice(0, 10);
    
    return cervezasMasAlcoholicas;
  }
  