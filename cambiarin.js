//cambiar imagen de fondo por una lista aleatoria.
//Nahuel Jose
$( function(){
    var contenedor = $('#wape');
    var tiempo = 5000;
    contenedor.css('opacity', '0.9').fadeTo(2000,1);
    contenedor.css({'background-image':'url("../images/back1.jpg")'});
    contenedor.css('background-repeat', 'no-repeat');
    contenedor.css('background-attachment', 'fixed');
    contenedor.css('background-size', '100% 100%');

    function image(){
    setTimeout(function() {
    contenedor.css('opacity', '0.9').fadeTo(2000,1);
    contenedor.css({'background-image':'url("../images/back2.png")'}); 
    contenedor.css('background-repeat', 'no-repeat');
    contenedor.css('background-attachment', 'fixed');
    contenedor.css('background-size', '100% 100%');
    otra_imagen();
    },tiempo); 
    }

    function otra_imagen(){
    setTimeout(function() {
    contenedor.css('opacity', '0.9').fadeTo(2000,1);
    contenedor.css({'background-image':'url("../images/back3.jpg")'}); 
    contenedor.css('background-repeat', 'no-repeat');
    contenedor.css('background-attachment', 'fixed');
    contenedor.css('background-size', '100% 100%');
    otra_img();},tiempo);
    }

    function otra_img(){
    setTimeout(function() { 
    contenedor.css('opacity', '0.9').fadeTo(2000,1);
    contenedor.css({'background-image':'url("../images/back4.jpg")'}); 
    contenedor.css('background-repeat', 'no-repeat');
    contenedor.css('background-attachment', 'fixed');
    contenedor.css('background-size', '100% 100%');
    image();},tiempo);
    }

    otra_imagen();

})
/*//cambiar imagen de fondo por una lista aleatoria.
//Nahuel Jose
$( function(){
    var contenedor = $('#wape');
    var tiempo = 5000;
    contenedor.css({'background-image':'url("images/24kmagic.jpg")'});
    contenedor.css('background-repeat', 'no-repeat');
    contenedor.css('background-attachment', 'fixed');
    contenedor.css('opacity', '0.9').fadeTo(1000,1);

    function image(){
    setTimeout(function() {
    contenedor.fadeTo('swing', 0.3, function() {
    $(this).css('opacity', '0.9').fadeTo(1000,1);
    $(this).css({'background-image':'url("images/hash.jpg")'}); 
    $(this).css('background-repeat', 'no-repeat');
    $(this).css('background-attachment', 'fixed');
    otra_imagen();}).fadeTo('swing', 1); },tiempo); }

    function otra_imagen(){
    setTimeout(function() {
    contenedor.fadeTo('swing', 0.3, function() {
        $(this).css('opacity', '0.9').fadeTo(1000,1);
    $(this).css({'background-image':'url("images/maroon5.jpg")'}); 
    $(this).css('background-repeat', 'no-repeat');
    $(this).css('background-attachment', 'fixed');
    otra_img();
    }).fadeTo('swing', 1); },tiempo);
    }

    function otra_img(){
    setTimeout(function() {
    contenedor.fadeTo('swing', 0.3, function() {
        $(this).css('opacity', '0.9').fadeTo(1000,1);
    $(this).css({'background-image':'url("images/wall16.jpg")'}); 
    $(this).css('background-repeat', 'no-repeat');
    $(this).css('background-attachment', 'fixed');
    image();
    }).fadeTo('swing', 1); },tiempo);
    }

    otra_imagen();

})*/