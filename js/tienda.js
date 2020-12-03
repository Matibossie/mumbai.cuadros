const totalidad = function eleccion() {
    if (sessionStorage.getItem('sumaValores') == sessionStorage.getItem('cantidad') {
        alert("ya eligio todos");
    }



};













// // La logica seria que al seleccionar la cantidad de cuadros que desea
// // el siguiente paso le pida que elija las medidas para cada uno de esos
// // si desea no comprar alguno de los elegidos entonces con una X podra 
// // cancelar ese item y el paso 1 restara la cantidad de items que cancele
// // si llega a 0 items se reinicia y vuelve al paso 1.

// // Paso 1 
// //Titulo
// var numeroDePasos = document.createElement('div'); numeroDePasos.setAttribute("class", "numeroDePaso"); numeroDePasos.setAttribute("id", "numeroDePaso");
// var numeroUno = document.createElement('h2'); numeroUno.setAttribute("class", "numeroUno"); numeroUno.setAttribute ("id", "numeroUno");
// var primero = document.createTextNode("1"); numeroDePasos.appendChild(numeroUno); numeroUno.appendChild(primero);
// var tituloDePaso = document.createElement('div'); tituloDePaso.setAttribute("class", "tituloDePaso"); ("id", "tituloDePaso");
// var textoPaso = document.createElement('h2'); textoPaso.setAttribute("class", "textoPaso"); textoPaso.setAttribute("id", "textoPaso");
// var texto = document.createTextNode("¿Cuántos cuadros deseas comprar?"); tituloDePaso.appendChild(textoPaso); textoPaso.appendChild(texto);
// document.getElementById("pasosTienda").appendChild(numeroDePasos);
// document.getElementById("pasosTienda").appendChild(tituloDePaso);


// //Contador
// var contador = document.createElement('div'); contador.setAttribute("class", "contador"); contador.setAttribute("id", "contador");
// var cajaSignos = document.createElement('div'); cajaSignos.setAttribute("class", "cajaSignos");
// var sumar = document.createElement('button'); sumar.setAttribute("class", "aumentar"); sumar.setAttribute("id", "incrementar"); sumar.setAttribute("onclick", "incrementar()");
// var aumentar = document.createTextNode("+"); 
// sumar.appendChild(aumentar);
// var restar = document.createElement('button'); restar.setAttribute("class", "disminuir"); restar.setAttribute("id", "decrementar"); restar.setAttribute("onclick", "decrementar()");
// var disminuir = document.createTextNode("-"); 
// restar.appendChild(disminuir);

// var valor = document.createElement("INPUT"); valor.setAttribute("type", "text"); valor.setAttribute("class", "cantidad"); valor.setAttribute("id", "cantidad"); valor.setAttribute("value", "0"); 

// document.getElementById("contenedor").appendChild(contador);
// document.getElementById("contador").appendChild(valor);
// cajaSignos.appendChild(sumar);
// cajaSignos.appendChild(restar);
// document.getElementById("contador").appendChild(cajaSignos); 


// var inicio = 0;

// function incrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
//     if(inicio==99){
//         alert("Limite alcanzado");
//     }else{
//     var cantidad = document.getElementById('cantidad').value = ++inicio; //se obtiene el valor del cantidad, y se incrementa en 1 el valor que tenga.
//     //console.log(inicio);
//     }
// }
// function decrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
//     if(inicio==0){
//         alert("Elija más que 0 cuadros");
//     }else{
//     var cantidad = document.getElementById('cantidad').value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
//     //console.log(inicio);
//     }
// }


// //Boton Continuar

// var next = document.createElement('button');
// next.setAttribute("class", "next boton"); next.setAttribute("id", "next");
// var siguiente = document.createTextNode("Continuar");
// next.appendChild(siguiente);
// document.getElementById("contenedor").appendChild(next);


// var segundo = document.createTextNode("2"); numeroDePasos.appendChild(numeroUno); numeroUno.appendChild(primero);
// var segundotexto = document.createTextNode("¡Elegí el tamaño y orientación de tus cuadros!"); tituloDePaso.appendChild(textoPaso); textoPaso.appendChild(texto);

// function cambiarNumeroDePaso(){
//     document.getElementById("numeroUno").innerHTML = "2";
// }
// function cambiarTituloDePaso(){
//     document.getElementById("textoPaso").innerHTML = "¡Elegí las medidas y orientación de tus cuadros!";
        
// }


// document.getElementById("next").onclick = function() {
//     if(inicio==0){
//         alert("Elija más que 0 cuadros");
//     }else{
//         sessionStorage.setItem('cantidad',inicio);
//         // console.log(inicio);

//         document.getElementById("contenedor").removeChild(contador); 
//         cambiarNumeroDePaso();
//         cambiarTituloDePaso();
// // Paso 2
// //Titulo

    
//     }
// }



// // function enviar() {
// //   function Cantidad(cantidad){
// //     this.cantidad = cantidad;
// //   }
// //   enviarCantidad = document.getElementById("cantidadCuadros").value;

// // nuevaCantidad = new Cantidad(enviarCantidad);
// //   if (enviarCantidad <1 || enviarCantidad > 9){
// //     alert("Ingrese una cantidad entre 1 y 9 cuadros");
// //  }else{
// //   //console.log(enviarCantidad)      
// //   document.getElementById("resultado").innerHTML = '<h2 class="titulo">'+enviarCantidad+'</h2>';
// // }
// // sessionStorage.setItem('Cantidad',enviarCantidad);
// // }
 

// // function registrar() {
// //   // console.log(" funciona");
// //   function Medidas(anchoalto,horientacion){
// //     this.anchoalto = anchoalto;
// //     this.horientacion = horientacion;
// //   }
// //   let registrarAnchoalto = document.getElementById("anchoalto").value;
// //   // console.log(registrarAnchoalto);
// //     let registrarHorientacion = document.getElementById("horientacion").value;
// //   // console.log(registrarHorientacion);

// //   nuevaMedida = new Medidas(registrarAnchoalto,registrarHorientacion);
// //       //console.log(nuevaMedida);
// //       agregar();
// //     } 

// //   let baseMedidas = [];
// //   function agregar() {

// //       for (baseMedidas == 0; baseMedidas.length < enviarCantidad; (baseMedidas.push(nuevaMedida))++) {
// //         document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaMedida.anchoalto+'</td><td>'+nuevaMedida.horientacion+'</td></tbody>';
// //       }  

// //     };







