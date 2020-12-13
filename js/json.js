let inicio = 0;
let boton = document.querySelector("#next");
let boton2 = document.querySelector("#next2");
let TIENDA = {
    "cantidadCuadros": 0,	
    "totalVertical20x30": 0,
	"totalVertical30x40": 0,
	"totalVertical32x47": 0,
	"totalHorizontal20x30": 0,
	"totalHorizontal30x40": 0,
	"totalHorizontal32x47": 0,

}

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
            TIENDA.cantidadCuadros = inicio   //el total (en número), que ingresó el usuario en pantalla
            localStorage.setItem("tienda", JSON.stringify(TIENDA))
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
        TIENDA.totalVertical20x30 = value1   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo20x30V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value1==0){
        }else{
        var valor1 = document.getElementById('valor1').value = --value1; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.totalVertical20x30 = value1   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    var value2 = 0;
    function positivo30x40V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value2==10){
            alert("Limite alcanzado");
        }else{
        var valor2 = document.getElementById('valor2').value = ++value2; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.totalVertical30x40 = value2   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo30x40V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value2==0){
        }else{
        var valor2 = document.getElementById('valor2').value = --value2; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.totalVertical30x40 = value2   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    var value3 = 0;  
    function positivo32x47V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value3==10){
            alert("Limite alcanzado");
        }else{
        var valor3 = document.getElementById('valor3').value = ++value3; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.totalVertical32x47 = value3   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo32x47V(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value3==0){
        }else{
        var valor3 = document.getElementById('valor3').value = --value3; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.totalVertical32x47 = value3   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    } 
    var value4 = 0;  
    function positivo20x30H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value4==10){
            alert("Limite alcanzado");
        }else{
        var valor4 = document.getElementById('valor4').value = ++value4; //se obtiene el valor del valor4, y se incrementa en 1 el valor que tenga.
        TIENDA.totalHorizontal20x30 = value4   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo20x30H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value4==0){
        }else{
        var valor4 = document.getElementById('valor4').value = --value4; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.totalHorizontal20x30 = value4   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    } 
    var value5 = 0;
    function positivo30x40H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value5==10){
            alert("Limite alcanzado");
        }else{
        var valor5 = document.getElementById('valor5').value = ++value5; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.totalHorizontal30x40 = value5   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo30x40H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value5==0){
        }else{
        var valor5 = document.getElementById('valor5').value = --value5; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.totalHorizontal30x40 = value5   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }  
    var value6 = 0;   
    function positivo32x47H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id aumentar
        if(value6==10){
            alert("Limite alcanzado");
        }else{
        var valor6 = document.getElementById('valor6').value = ++value6; //se obtiene el valor del valor1, y se incrementa en 1 el valor que tenga.
        TIENDA.totalHorizontal32x47 = value6   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }
    function negativo32x47H(){ // se crean la funcion y se agrega al evento onclick en en la etiqueta button con id disminuir
        if(value6==0){
        }else{
        var valor6 = document.getElementById('valor6').value = --value6; //se obtiene el valor del input, y se decrementa en 1 el valor que tenga.
        TIENDA.totalHorizontal32x47 = value6   //el total (en número), que ingresó el usuario en pantalla
        localStorage.setItem("tienda", JSON.stringify(TIENDA))
        }
    }

$(document).ready(function(){
$('body .calculo').on('click', 'button', function calculoCantidadesSeleccionadas(){
    
    let resultado = Number(TIENDA.cantidadCuadros) - (Number(TIENDA.totalHorizontal20x30) + Number(TIENDA.totalHorizontal30x40) + Number(TIENDA.totalHorizontal32x47) + Number(TIENDA.totalVertical20x30) + Number(TIENDA.totalVertical30x40) + Number(TIENDA.totalVertical32x47))
            if (resultado == 0) {
                
                boton2.removeAttribute("disabled","");
            } else { 
                boton2.setAttribute("disabled","");
        }
    })
})
    
