
//los de fz son los pares (2, 4, 6, 8, 10)


// 1: Calculadora de Edad
function CalculadoraDeEdad(fechaNacimiento) {
  const hoy = new Date();
  const fechaUsuario = new Date(fechaNacimiento);
  const anos = hoy.getFullYear() - fechaUsuario.getFullYear();
  const mesActual = hoy.getMonth();
  const mesNacimiento = fechaUsuario.getMonth();
  if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaUsuario.getDate())) {
    return anos - 1;
  }
  return anos;
}



//2 Tirando Fruta: TERMINADO. 
function TirandoFruta (){
  const frutas = ["manzana", "banana", "mandarina", "naranja", "uvas", "tomate", "pera", "pomelo", "frutilla", "ananá"]
  
    for(const fruta of frutas){
      console.log(fruta)
    }
  
    let texto = prompt("Elija una fruta");
    buscar = frutas.find(palabra => palabra === texto);
    const respuesta = document.getElementById('respuesta')
    if(buscar == undefined){
      respuesta.innerHTML = "No, no tenemos esa fruta...";
    }else{
      respuesta.innerHTML = "Sí, tenemos " + buscar + "!";
    } 
}

// 3: Comparando datos y tipos
function CompararDatosYTipos(){
  resultado = document.getElementById('resultado')
  resultado.innerHTML += `\n Punto A: ${10 == '10'}`;
  resultado.innerHTML += `\n Punto B: ${10 === '10'}, la diferencia es que en este caso da FALSE, esto es porque comprara tambien el tipo de dato y uno es int y el otro string`
  resultado.innerHTML += `\n Punto C: ${typeof 10.6}`
  resultado.innerHTML += `\n Punto D: ${true == 1}, las conclusiones que podemos obtener es que 'true' es considerado como 1 positivo.`
}
//4: Yo Objeto. TERMINADO. 
 function YoObjeto(){
const ciudad1 = {
  nombre: "Buenos Aires", 
  fechaFundacion: '1999-07-19', 
  poblacion: 2000, 
  extension: 8339
 }
const listaCiudades = [
  ciudad1, 
  {
    nombre: "Ciudad Gótica", 
    fechaFundacion: '1987-02-10', 
    poblacion: 6000, 
    extension: 9000,
  },
  {
    nombre: "Metrópolis", 
    fechaFundacion: '1929-03-8', 
    poblacion: 6600, 
    extension: 20000,
  }
]
let yoObjeto = document.getElementById('yoObjeto')
for (const ciudad of listaCiudades) {
  yoObjeto.innerHTML += "<p>Nombre ciudad: " + ciudad.nombre + "</p>"
  yoObjeto.innerHTML += "<p>Fundación: " + ciudad.fechaFundacion + "</p>"
  yoObjeto.innerHTML += "<p>Población: " + ciudad.poblacion + "</p>"
  yoObjeto.innerHTML += "<p>Extensión: " + ciudad.extension + "</p>"
}
}

// 5: Doble elementos

function doblarArray(originalArray) {
  let newArray = [];  
  for (let i = 0; i < originalArray.length; i++) {
  const elementoDuplicado = originalArray[i] * 2;
  newArray.push(elementoDuplicado);
  }
  return newArray;
}

//6: Triángulo de asteriscos. TERMINADO. 
function TrianguloAsteriscos(){
const asterisco = document.getElementById('asterisco');
let asteriscos = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    asteriscos += "*";
  }
  asteriscos += '<br>';
}
asterisco.innerHTML = asteriscos;

let numero = 2
let numGuion = 4
for(let i = numGuion; i > 0; i--){
  for(let o = numGuion; o > 0; o--){
  asteriscos += "-"
  }
  for(let j = 1; j < numero; j++){ 
    asteriscos += "*"
  }
  if(numero <5){
    numero++
  }
  for(let ñ = numGuion; ñ > 0; ñ--){
    asteriscos += "-"
  }
  asteriscos += "<br>"
  numGuion--
}
asterisco.innerHTML = asteriscos
}

// 7: Nombres con 'A'
function filtradorNombres() {
  const nombresIngreso = prompt("Ingresa una lista de nombres separados por comas:");
  const nombresArray = nombresIngreso.split(',');
  const nombresConA = nombresArray.filter(name => name.trim().toUpperCase().charAt(0) == 'A');

  const resultadodiv = document.getElementById('resultado');
  resultadodiv.innerHTML = 'Nombres que comienzan con "A":<br>' + nombresConA.join(', ');
}

//8: Reemplazar palabras: TERMINADO. 
function CadenaTexto(){
let cadenaTexto = prompt("Ingrese una cadena de texto");
let palabraAReemplazar = prompt("Ingrese una palabra que quiere reemplazar/quitar");
let palabraNueva = prompt("Ingrese una nueva palabra para sustituirla");
const cadenaModificada = cadenaTexto.replace(palabraAReemplazar, palabraNueva)
console.log(cadenaModificada)
const cadenaej8 = document.getElementById('cadenaej8')
cadenaej8.innerHTML = cadenaModificada
}

// 9: Cortar Texto
function CortarTexto(){
  const textYNum=(prompt("ingrese una cadena de texto y un numero separados por coma", "todo bien, 9")).split(",")
  const text=textYNum[0]
  const num=parseInt(textYNum[1])

  const result=text.substring(0,num)
  document.getElementById("resultado").innerHTML=result
}

//10: String con separador. TERMINADO.  
function StringSeparador(){
const stringAlDOM = document.getElementById('stringAlDOM');
let cadenaConComas = prompt("Ingrese una cadena de texto separada por comas (,)");

const palabras = cadenaConComas.split(',');
let stringCompleto = ""
for(const p of palabras){
  stringCompleto += p + " - "
}
console.log(stringCompleto)

stringAlDOM.innerHTML = stringCompleto
}

// 11: Calculadora de Recaudación
function CalculadoraDeRecaudacion(){
  const text=(prompt("ingrese objetos pedidos con sus respectivos totales en formato nombre:total", "hamburguesa:8.75")).split(",")
  const recaudacionCuen= text.map(i => Number(i.substring(i.indexOf(":")+1)))
  let recTotal=0;
  recaudacionCuen.forEach(rec=>recTotal+=rec)
  document.getElementById("resultado").innerHTML=recTotal
}
