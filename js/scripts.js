$(function() {

    var datePicker = $('.lieber-carro .datepicker');
    if( datePicker.length ) $('.lieber-carro .datepicker').datetimepicker({format: 'DD/MM/YYYY',locale: 'es'});

    $('.lieber-carro .datepicker input').click(function(event){
       $(this).siblings('.input-group-addon').click();
    });

    $('.lieber-carro #returnInPlace').click(function() {
        if($(this).is(':checked')) {
            $('.lieber-carro .sh-toggle').hide();
        } else {
            $('.lieber-carro .sh-toggle').show();
        }
    });

    $('.lieber-carro .adicionales .sh-toggle-btn').click(function() {
        $(this).toggleClass('sh-toggle-shown');
        if( !$(this).hasClass('sh-toggle-shown') ) {
            $('.lieber-carro .adicionales .sh-toggle-xs').hide();
            $(this).text('MOSTRAR');
        } else {
            $('.lieber-carro .adicionales .sh-toggle-xs').show();
            $(this).text('OCULTAR');
        }
    });

    $('.lieber-carro .similares .sh-toggle-btn').click(function() {
        $(this).toggleClass('sh-toggle-shown');
        if( !$(this).hasClass('sh-toggle-shown') ) {
            $('.lieber-carro .similares #similarCar').hide();
            $(this).text('MOSTRAR');
        } else {
            $('.lieber-carro .similares #similarCar').show();
            $(this).text('OCULTAR');
        }
    });

    $('.lieber-carro .detalle .sh-toggle-btn').click(function() {
        $(this).toggleClass('sh-toggle-hidden');
        if( !$(this).hasClass('sh-toggle-hidden') ) {
            $('.lieber-carro .detalle .sh-toggle-xs').show();
            $(this).text('Ocultar detalle');
        } else {
            $('.lieber-carro .detalle .sh-toggle-xs').hide();
            $(this).text('Mostrar detalle');
        }
    });


});