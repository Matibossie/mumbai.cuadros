$('#PasoUno').ready(function(){ 
    $("div.PasoUno").slideDown(1200, function(){}); 
    });

$('#next').click(function(){
    $("div.PasoUno").slideUp(1200, function(){
        $("div.PasoDos").slideDown(1200, function(){}); 
    }); 
})    
///////////////////////////////////////////////////////////
$('#Horizontal').click(function(){ 
    $("#medidasVerticales").fadeOut(600, function(){ 
        $("#medidasHorizontales").fadeIn(600)
        }	
    ); 
 });
 
 $('#Vertical').click(function(){ 
    $("#medidasHorizontales").fadeOut(600, function(){ 
        $("#medidasVerticales").fadeIn(600)
        }	
    ); 
 });
//////////////////////////////////////////////////////////////
 $('#previous').click(function(){ 
    $("div.PasoDos").slideUp(1200, function(){
        $("div.PasoUno").slideDown(1200, function(){}
        ); 
    }); 
})
///////////////////////////////////////////////////////////////
$('#next2').click(function(){ 
    $("div.PasoDos").slideUp(1200, function(){
        $("div.PasoTres").slideDown(1200, function(){}
        );
    });
})


///////////////////////////////////////////////////////////////
$('#next3').click(function(){ 
    $("div.PasoTres").slideUp(1200, function(){
        $("div.Checkout").slideDown(1200, function(){}
        );
    });
})