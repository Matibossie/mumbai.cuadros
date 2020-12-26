let inicio = 0;
let boton = document.querySelector("#next");
let boton2 = document.querySelector("#next2");
let boton3 = document.querySelector("#checkout");

var CUADROS = { "cantidadCuadros": 0}

var TIENDA = {"Cuadros":[
        {"Medida":"Vertical20x30","Cantidad":0},
        {"Medida":"Vertical30x40","Cantidad":0},
        {"Medida":"Vertical32x47","Cantidad":0},
        {"Medida":"Horizontal20x30","Cantidad":0},
        {"Medida":"Horizontal30x40","Cantidad":0},
        {"Medida":"Horizontal32x47","Cantidad":0},
]};

var Modelos = {"Medida":[
    {"Medida":"Vertical30x40","Modelo":""},
    {"Medida":"Vertical32x47","Modelo":""},
    {"Medida":"Vertical20x30","Modelo":""},
    {"Medida":"Horizontal20x30","Modelo":""},
    {"Medida":"Horizontal30x40","Modelo":""},
    {"Medida":"Horizontal32x47","Modelo":""},
]};

function incrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
    if(inicio==10){
        alert("Limite alcanzado");
    }else{
        boton.removeAttribute("disabled","");
    cantidad = document.getElementById('cantidad').value = ++inicio; //se obtiene el valor del cantidad, y se incrementa en 1 el valor que tenga.
    //console.log(inicio);
    }
};
function decrementar(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
    if(inicio==0){
        boton.setAttribute("disabled","");
    }else{
    cantidad = document.getElementById('cantidad').value = --inicio; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
    //console.log(inicio);
    }
};

//guardar en el JSON la cantidad de cuadros que se eligieron al hacer click en continuar.   
document.getElementById("next").onclick = function() {
        if(inicio==0){
            alert("Elija más que 0 cuadros");
        }else{
            CUADROS.cantidadCuadros = inicio   //el total (en número), que ingresó el usuario en pantalla
            localStorage.setItem("cuadros", JSON.stringify(CUADROS))
            // localStorage.setItem('cantidad',inicio); 
            // console.log(inicio);
            
        }
    }

    var value1 = 0;
    function positivo20x30V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value1==10){
            alert("Limite alcanzado");
        }else{
        var valor1 = document.getElementById('valor1').value = ++value1; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.Cuadros[0].Cantidad = value1   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo20x30V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value1==0){
        }else{
        var valor1 = document.getElementById('valor1').value = --value1; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.Cuadros[0].Cantidad = value1   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    var value2 = 0;
    function positivo30x40V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value2==10){
            alert("Limite alcanzado");
        }else{
        var valor2 = document.getElementById('valor2').value = ++value2; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.Cuadros[1].Cantidad = value2   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo30x40V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value2==0){
        }else{
        var valor2 = document.getElementById('valor2').value = --value2; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.Cuadros[1].Cantidad = value2   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    var value3 = 0;  
    function positivo32x47V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value3==10){
            alert("Limite alcanzado");
        }else{
        var valor3 = document.getElementById('valor3').value = ++value3; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.Cuadros[2].Cantidad = value3   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo32x47V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value3==0){
        }else{
        var valor3 = document.getElementById('valor3').value = --value3; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.Cuadros[2].Cantidad = value3   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    } 
    var value4 = 0;  
    function positivo20x30H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value4==10){
            alert("Limite alcanzado");
        }else{
        var valor4 = document.getElementById('valor4').value = ++value4; //se obtiene el valor del valor4, y se incrementa en 1 el valor que tenga.
        TIENDA.Cuadros[3].Cantidad = value4   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo20x30H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value4==0){
        }else{
        var valor4 = document.getElementById('valor4').value = --value4; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.Cuadros[3].Cantidad = value4   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    } 
    var value5 = 0;
    function positivo30x40H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value5==10){
            alert("Limite alcanzado");
        }else{
        var valor5 = document.getElementById('valor5').value = ++value5; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.Cuadros[4].Cantidad = value5   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo30x40H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value5==0){
        }else{
        var valor5 = document.getElementById('valor5').value = --value5; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.Cuadros[4].Cantidad = value5   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }  
    var value6 = 0;   
    function positivo32x47H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value6==10){
            alert("Limite alcanzado");
        }else{
        var valor6 = document.getElementById('valor6').value = ++value6; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.Cuadros[5].Cantidad = value6   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo32x47H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value6==0){
        }else{
        var valor6 = document.getElementById('valor6').value = --value6; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.Cuadros[5].Cantidad = value6   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }

$(document).ready(function(){
$('body .calculo').on('click', 'button', function calculoCantidadesSeleccionadas(){
    

    let resultado = CUADROS.cantidadCuadros - (Number(TIENDA.Cuadros[0].Cantidad) + Number(TIENDA.Cuadros[1].Cantidad) + Number(TIENDA.Cuadros[2].Cantidad) + Number(TIENDA.Cuadros[3].Cantidad) + Number(TIENDA.Cuadros[4].Cantidad) + Number(TIENDA.Cuadros[5].Cantidad))
            if (resultado == 0) {
                
                boton2.removeAttribute("disabled","");
            } else { 
                boton2.setAttribute("disabled","");
        }
    })
})
    
const button = document.querySelector('#next2');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
 
button.addEventListener('click', () => {
    popup.style.display = 'block';
});
close.addEventListener('click', () => {
    popup.style.display = 'none';
});
popup.addEventListener('click', e => {
    // console.log(e);
    if(e.target.className === 'popup-wrapper') {
        popup.style.display = 'none';
    }
});

function cargarDatos(){
    var DatosJson = JSON.parse(JSON.stringify(TIENDA));
    //console.log(DatosJson.Cuadros.length);
      $("#Table").append('<tr><td class="text-center">Medida</td>'+
      '<td class="text-center">Cantidad</td>'+
      '<td class="text-center">Ingrese modelos separados por comas</td>' );
      for (i = 0; i < DatosJson.Cuadros.length; i++){

   $("#Table").append('<tr>' + 
      '<td align="center" style="dislay: none;">' + DatosJson.Cuadros[i].Medida + '</td>'+
      '<td align="center" style="dislay: none;">' + DatosJson.Cuadros[i].Cantidad + '</td>' +
      '<td align="center" style="dislay: none;">' + '<input type="text" value="" '+' </td>' );
    }
}

function checkout() {
          
        
    }