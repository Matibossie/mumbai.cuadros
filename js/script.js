 $(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_textarea');

/* Whatsapp Settings */
var walink = 'https://api.whatsapp.com/send',
    phone = '+5491165212783',
    walink2 = 'Hola Mumbai! Mi nombre es ',
    text_yes = 'Conectando con Whatsapp.',
    text_no = 'Por favor complete el formulario.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_name1 = $("#wa_name").val()+'.',
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + input_name1 + '%0A' + 'Quiero consultar por ' + input_textarea1;

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});