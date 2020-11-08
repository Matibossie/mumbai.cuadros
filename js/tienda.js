// La logica seria que al seleccionar la cantidad de cuadros que desea
// el siguiente paso le pida que elija las medidas para cada uno de esos
// si desea no comprar alguno de los elegidos entonces con una X podra 
// cancelar ese item y el paso 1 restara la cantidad de items que cancele
// si llega a 0 items se reinicia y vuelve al paso 1.

// var cantidadCuadros = prompt("¿Cuántos cuadros te interesan comprar?");

// while (cantidadCuadros <1 || cantidadCuadros > 9){
//   var cantidadCuadros = prompt("¿Cuántos cuadros te interesan comprar?");
// }
//   document.getElementById("cantidad").innerHTML = '<h2 class="titulo">'+cantidadCuadros+'</h2>';


function enviar() {
  function Cantidad(cantidad){
    this.cantidad = cantidad;
  }
  let enviarCantidad = document.getElementById("cantidadCuadros").value;

nuevaCantidad = new Cantidad(enviarCantidad);
  if (enviarCantidad <1 || enviarCantidad > 9){
    alert("Ingrese una cantidad entre 1 y 9 cuadros");
 }else{
document.getElementById("resultado").innerHTML = '<h2 class="titulo">'+enviarCantidad+'</h2>';
}
}

function registrar() {
  // console.log(" funciona");
  function Medidas(ancho,alto){
    this.ancho = ancho;
    this.alto = alto;
  }
  let registrarAncho = document.getElementById("ancho").value;
  // console.log(registrarAncho);
    let registrarAlto = document.getElementById("alto").value;
  // console.log(registrarAlto);

  nuevaMedida = new Medidas(registrarAncho,registrarAlto);
      //console.log(nuevaMedida);
      agregar();
    } 

  let baseMedidas = [];
  function agregar() {
      baseMedidas.push(nuevaMedida);
      console.log(baseMedidas)  
      document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaMedida.ancho+'</td><td>'+nuevaMedida.alto+'</td></tbody>';
  };








