
// JavaScript
// menu hamburguer

// letreiro com efeito
$(document).ready(function(){
    var cargos = ["Desenvolvedor Front-End", "Programador Web","Apaixonado por tecnologia" ];
    var atual = 0;
    $('.multiple-text').text(cargos[atual++]);
    setInterval(function() {
        $('.multiple-text').fadeOut(function() {
            if (atual >= cargos.length) atual = 0;
            $('.multiple-text').text(cargos[atual++]).fadeIn();
        });
    }, 2000);
});