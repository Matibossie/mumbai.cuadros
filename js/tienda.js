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
  enviarCantidad = document.getElementById("cantidadCuadros").value;

nuevaCantidad = new Cantidad(enviarCantidad);
  if (enviarCantidad <1 || enviarCantidad > 9){
    alert("Ingrese una cantidad entre 1 y 9 cuadros");
 }else{
  console.log(enviarCantidad)      
  document.getElementById("resultado").innerHTML = '<h2 class="titulo">'+enviarCantidad+'</h2>';
}
}

function registrar() {
  // console.log(" funciona");
  function Medidas(anchoalto,horientacion){
    this.anchoalto = anchoalto;
    this.horientacion = horientacion;
  }
  let registrarAnchoalto = document.getElementById("anchoalto").value;
  // console.log(registrarAnchoalto);
    let registrarHorientacion = document.getElementById("horientacion").value;
  // console.log(registrarHorientacion);

  nuevaMedida = new Medidas(registrarAnchoalto,registrarHorientacion);
      //console.log(nuevaMedida);
      agregar();
    } 

  let baseMedidas = [];
  function agregar() {

      for (baseMedidas == 0; baseMedidas.length < enviarCantidad; (baseMedidas.push(nuevaMedida))++) {
        document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaMedida.anchoalto+'</td><td>'+nuevaMedida.horientacion+'</td></tbody>';
      }  
      document.getElementById("tabla").innerHTML += '<hr>'+'Precio Total'+ ' $xxxxx';
      document.getElementById("tabla").innerHTML += '<br><br><button class="" type="button" id="elegirModelos" onclick="elegirModelos()"> Elegir Modelos </button>';

    };








