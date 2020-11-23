// La logica seria que al seleccionar la cantidad de cuadros que desea
// el siguiente paso le pida que elija las medidas para cada uno de esos
// si desea no comprar alguno de los elegidos entonces con una X podra 
// cancelar ese item y el paso 1 restara la cantidad de items que cancele
// si llega a 0 items se reinicia y vuelve al paso 1.

var inicio = 0;

function incrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(inicio==10){
        alert("Limite alcanzado");
    }else{
    var cantidad = document.getElementById('cantidad').value = ++inicio; //se obtiene el valor del cantidad, y se incrementa en 1 el valor que tenga.
    //console.log(inicio);
    }
}
function decrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(inicio==0){
        alert("Elija más que 0 cuadros");
    }else{
    var cantidad = document.getElementById('cantidad').value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(inicio);
    }
}

document.getElementById("next").onclick = function() {
    if(inicio==0){
        alert("Elija más que 0 cuadros");
    }else{
        sessionStorage.setItem('cantidad',inicio);
        console.log(inicio);
        document.getElementById("PasoUno").classList.add("hide");
        document.getElementById("PasoDos").classList.remove("hide");
    }
}
document.getElementById("previous").onclick = function() {
    document.getElementById("PasoUno").classList.remove("hide");
    document.getElementById("PasoDos").classList.add("hide");
}

document.getElementById("Horizontal").onclick = function() {
    document.getElementById("medidasVerticales").classList.add("hide");
    document.getElementById("medidasHorizontales").classList.remove("hide");    
}

document.getElementById("Vertical").onclick = function() {
    document.getElementById("medidasHorizontales").classList.add("hide");
    document.getElementById("medidasVerticales").classList.remove("hide");
}








//Boton Continuar

// var next = document.createElement('button'); next.setAttribute("class", "next boton"); next.setAttribute("id", "next");
// var siguiente = document.createTextNode("Continuar");
// next.appendChild(siguiente);
// document.getElementById("contenedor").appendChild(next);


// // Paso 2
// //Titulo

// var segundo = document.createTextNode("2"); numeroDePasos.appendChild(numeroUno); numeroUno.appendChild(primero);
// var segundotexto = document.createTextNode("¡Elegí el tamaño y orientación de tus cuadros!"); tituloDePaso.appendChild(textoPaso); textoPaso.appendChild(texto);

 
 
// var contenedorMedidas = document.createElement('div'); contenedorMedidas.setAttribute("class", "contenedorMedidas"); contenedorMedidas.setAttribute("id", "contenedorMedidas");



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
//         document.getElementById("contenedor").removeChild(next); 
//         cambiarNumeroDePaso();
//         cambiarTituloDePaso();   

//         document.getElementById("contenedor").appendChild(contenedorMedidas);

//         c2030h.appendChild(c20x30h);
//         document.getElementById("contenedorMedidas").appendChild(c2030h);

//         c2030v.appendChild(c20x30v);
//         document.getElementById("contenedorMedidas").appendChild(c2030v);

//         c3030h.appendChild(c30x30h);
//         document.getElementById("contenedorMedidas").appendChild(c3030h);

//         c3030v.appendChild(c30x30v);
//         document.getElementById("contenedorMedidas").appendChild(c3030v);

//         c3040h.appendChild(c30x40h);
//         document.getElementById("contenedorMedidas").appendChild(c3040h);

//         c3040v.appendChild(c30x40v);
//         document.getElementById("contenedorMedidas").appendChild(c3040v);

//         c3247h.appendChild(c32x47h);
//         document.getElementById("contenedorMedidas").appendChild(c3247h);

//         c3247v.appendChild(c32x47v);
//         document.getElementById("contenedorMedidas").appendChild(c3247v);

//         c4060h.appendChild(c40x60h);
//         document.getElementById("contenedorMedidas").appendChild(c4060h);

//         c4060v.appendChild(c40x60v);
//         document.getElementById("contenedorMedidas").appendChild(c4060v);

//         c5070h.appendChild(c50x70h);
//         document.getElementById("contenedorMedidas").appendChild(c5070h);

//         c5070v.appendChild(c50x70v);
//         document.getElementById("contenedorMedidas").appendChild(c5070v);
        
//         document.getElementById("contenedor").appendChild(next);

//     }
// }




 


// function registrar() {
//   // console.log(" funciona");
//   function Medidas(anchoalto,horientacion){
//     this.anchoalto = anchoalto;
//     this.horientacion = horientacion;
//   }
//   let registrarAnchoalto = document.getElementById("anchoalto").value;
//   // console.log(registrarAnchoalto);
//     let registrarHorientacion = document.getElementById("horientacion").value;
//   // console.log(registrarHorientacion);

//   nuevaMedida = new Medidas(registrarAnchoalto,registrarHorientacion);
//       //console.log(nuevaMedida);
//       agregar();
//     } 

//   let baseMedidas = [];
//   function agregar() {

//       for (baseMedidas == 0; baseMedidas.length < enviarCantidad; (baseMedidas.push(nuevaMedida))++) {
//         document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaMedida.anchoalto+'</td><td>'+nuevaMedida.horientacion+'</td></tbody>';
//       }  

//     };
 




