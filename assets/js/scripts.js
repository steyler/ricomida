$(document).ready(function() {
    $('a').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente")
    })
    $("#empezarLetter").click(function() {
        alert("Te has subscrito correctamente")
    })
    $('.carousel').carousel()
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('.ingredients').dblclick(function() {
        $(this).css("color", "red")
    })
    $('.preparation').dblclick(function() {
        $(this).css("color", "red")
    })
    $('.card-1').click(function() {
        $('.card-11').toggle()
    })
    $('.card-2').click(function() {
        $('.card-22').toggle()
    })
    $('.card-3').click(function() {
        $('.card-33').toggle()
    })

})