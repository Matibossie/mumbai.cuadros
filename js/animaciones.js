$('#PasoUno').ready(function(){ 
    $("div.PasoUno").slideDown(1200, function(){}); 
    });

$('#next').click(function(){
    $("div.PasoUno").slideUp(1200, function(){
        $("div.PasoDos").slideDown(1200, function(){}); 
    }); 
})    

$('#Horizontal').click(function(){ 
    $("#medidasVerticales").fadeOut(600, function(){ 
        $("#medidasHorizontales").fadeIn(600)
    }	
    ); //al terminar, se ejecuta la función 
 });
 
 $('#Vertical').click(function(){ 
    $("#medidasHorizontales").fadeOut(600, function(){ 
        $("#medidasVerticales").fadeIn(600)}	
    ); 
 });