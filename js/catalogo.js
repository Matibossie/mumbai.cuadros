
// for (var i=1;i<=329;i++){
// document.getElementById("catalogo").innerHTML += '<li><a href="../img/1x/'+[i]+'.png" class="example-image-link"data-lightbox="example-set" ><img class="imagen-galeria" src="../img/1x/'+[i]+'.png" alt="galeria" ></a></li>';

// // console.log(i);
// };

let HTMLCard = "";
let contenidoJSON = []

function cargoContenidoStreaming() {
   $.ajax({
      url: "../js/api.json",
      dataType: "json",
      success: function(response) {
         contenidoJSON = response
         $.each(contenidoJSON, function(i) {
            HTMLCard += `<li>
                            <a href="${contenidoJSON[i].imagen}" class="example-image-link"data-lightbox="example-set" >
                                <img class="imagen-galeria" src="${contenidoJSON[i].imagen}" alt="galeria" >
                            </a>
                        </li>`
         })
         $('#galeria').html(HTMLCard)
      },
      error: function() {
         console.error("Ocurrió un error... :(")
         HTMLCard = `<div class="center black-text"> 
                        <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                     </div>`
         $('#galeria').html(HTMLCard)
      } 
   })
}
setTimeout(() => {
   cargoContenidoStreaming()
      $('#contenido').fadeIn("fast", function() {
         $('#cargando').fadeOut(200)
      })
}, 2000)
//configuracion del boton de categoria
$(document).ready(function(){
    $("#Todos").click(function(){
        $(".categorias li").removeClass("active");
        $("#Todos").addClass("active");
    });
	$("#Frases").click(function(){
        $(".categorias li").removeClass("active");
        $("#Frases").addClass("active");
    });
	$("#Abstractos").click(function(){
        $(".categorias li").removeClass("active");
        $("#Abstractos").addClass("active");
    });
    $("#Lineales").click(function(){
        $(".categorias li").removeClass("active");
        $("#Lineales").addClass("active");    
    });
    $("#Pantone").click(function(){
        $(".categorias li").removeClass("active");
        $("#Pantone").addClass("active");
    });
    $("#Love").click(function(){
        $(".categorias li").removeClass("active");
        $("#Love").addClass("active");
    });
    $("#Botanicas").click(function(){
        $(".categorias li").removeClass("active");
        $("#Botanicas").addClass("active");
    });
    $("#Travel").click(function(){
        $(".categorias li").removeClass("active");
        $("#Travel").addClass("active");    
    });
    $("#Novedades").click(function(){
        $(".categorias li").removeClass("active");
        $("#Novedades").addClass("active");
    });
});
// Elegir por categoria 


