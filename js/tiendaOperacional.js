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
    cantidad = document.getElementById('cantidad').value = ++inicio; //se obtiene el valor del cantidad, y se incrementa en 1 el valor que tenga.
    //console.log(inicio);
    }
};
function decrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(inicio==0){
        alert("Elija más que 0 cuadros");
    }else{
    cantidad = document.getElementById('cantidad').value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(inicio);
    }
};
document.getElementById("next").onclick = function() {
    if(inicio==0){
        alert("Elija más que 0 cuadros");
    }else{
        sessionStorage.setItem('cantidad',inicio);
        //console.log(inicio);
        // document.getElementById("PasoUno").classList.add("hide");
        // document.getElementById("PasoDos").classList.remove("hide");
    }
}
document.getElementById("previous").onclick = function() {
    // document.getElementById("PasoUno").classList.remove("hide");
    // document.getElementById("PasoDos").classList.add("hide");
}
document.getElementById("Horizontal").onclick = function() {
    // document.getElementById("medidasVerticales").classList.add("hide");
    // document.getElementById("medidasHorizontales").classList.remove("hide");
}
document.getElementById("Vertical").onclick = function() {
    // document.getElementById("medidasHorizontales").classList.add("hide");
    // document.getElementById("medidasVerticales").classList.remove("hide");
};
 
var sumaCuadros = parseInt(document.getElementById('valor1').value)+parseInt(document.getElementById('valor2').value)+parseInt(document.getElementById('valor3').value)+parseInt(document.getElementById('valor4').value)+parseInt(document.getElementById('valor5').value)+parseInt(document.getElementById('valor6').value);


var value1 = 0;

function positivo20x30V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(value1==10){
        alert("Limite alcanzado");
    }else{
    var valor1 = document.getElementById('valor1').value = ++value1; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
    //console.log(value1);
    }
}
function negativo20x30V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(value1==0){
        alert("Elija más que 0 cuadros");
    }else{
    var valor1 = document.getElementById('valor1').value = --value1; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(value1);
    }
}

var value2 = 0;

function positivo30x40V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(value2==10){
        alert("Limite alcanzado");
    }else{
    var valor2 = document.getElementById('valor2').value = ++value2; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
    //console.log(value2);
    }
}
function negativo30x40V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(value2==0){
        alert("Elija más que 0 cuadros");
    }else{
    var valor2 = document.getElementById('valor2').value = --value2; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(value2);
    }
}

var value3 = 0;

function positivo32x47V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(value3==10){
        alert("Limite alcanzado");
    }else{
    var valor3 = document.getElementById('valor3').value = ++value3; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
    //console.log(value3);
    }
}
function negativo32x47V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(value3==0){
        alert("Elija más que 0 cuadros");
    }else{
    var valor3 = document.getElementById('valor3').value = --value3; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(value3);
    }
}

var value4 = 0;

function positivo20x30H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(value4==10){
        alert("Limite alcanzado");
    }else{
    var valor4 = document.getElementById('valor4').value = ++value4; //se obtiene el valor del valor4, y se incrementa en 1 el valor que tenga.
    //console.log(value4);
    }
}
function negativo20x30H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(value4==0){
        alert("Elija más que 0 cuadros");
    }else{
    var valor4 = document.getElementById('valor4').value = --value4; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(value4);
    }
}

var value5 = 0;

function positivo30x40H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(value5==10){
        alert("Limite alcanzado");
    }else{
    var valor5 = document.getElementById('valor5').value = ++value5; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
    //console.log(value5);
    }
}
function negativo30x40H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(value5==0){
        alert("Elija más que 0 cuadros");
    }else{
    var valor5 = document.getElementById('valor5').value = --value5; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(value5);
    }
}

var value6 = 0;

function positivo32x47H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(value6==10){
        alert("Limite alcanzado");
    }else{
    var valor6 = document.getElementById('valor6').value = ++value6; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
    //console.log(value6);
    }
}
function negativo32x47H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(value6==0){
        alert("Elija más que 0 cuadros");
    }else{
    var valor6 = document.getElementById('valor6').value = --value6; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(value6);
    }
}

//Declarar una variable con toda la sumatoria de los value
//
var sumanding = (value1 + value2 + value3 + value4 +value5 + value6);


document.getElementById("next2").onclick = function() {

}