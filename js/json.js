let inicio = 0;
let TIENDA = {
	"cantidadCuadros": 0,
	"totalHorizontal20x30": 0,
	"totalHorizontal30x40": 0,
	"totalHorizontal32x47": 0,
	"totalVertical20x30": 0,
	"totalVertical30x40": 0,
	"totalVertical32x47": 0,
}

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






// function seleccionoCantidadCuadros(o, cuadro, cantidad) {
//     //Primero, recuperás el JSON guardado en localStorage
//     TIENDA = JSON.parse(localStorage("tienda"))

//     //o: es la operación: (incremento o decremento)
//     //cuadro: es el tipo de cuadro con la medida correspondiente
//     //cantidad: es el número que ingresó el usuario
//     if (o == "+") {
// 	    TIENDA[cuadro] += Number(cantidad)
//     } else {    
// 	    TIENDA[cuadro] -= Number(cantidad)
//     }
//     localStorage.setItem("tienda", JSON.stringify(TIENDA)) //Siempre salvá el JSON en localStorage
// }




// function calculoCantidadesSeleccionadas() {
//     let resultado = Number(TIENDA.cantidadCuadros) - (Number(totalHorizontal20x30) + Number(totalHorizontal30x40) + Number(totalHorizontal32x47) + Number(totalVertical20x30) + Number(totalVertical30x40) + Number(totalVertical32x47))
// 	if (resultado == 0) {
//         return TRUE
//     } else {
//         return FALSE
//     }
// }



// function paso03() {
//     if (calculoCantidadesSeleccionadas) {
//         //redirijo al usuario a la siguiente página o paso
//     } else {
//         alert("Hay una diferencia entre la cantidad de medidas seleccionadas y el total de cuadros elegidos")
//         //puedo bloquear el botón siguiente, o no hacer nada hasta que el usuario corrija el total de cuadros
//    }
// }