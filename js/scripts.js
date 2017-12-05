$(function() {

    var datePicker = $('.datepicker');
    if( datePicker.length ) $('.datepicker').datetimepicker({format: 'DD/MM/YYYY',locale: 'es'});

    $('#returnInPlace').click(function() {
        if($(this).is(':checked')) {
            $('.sh-toggle').hide();
        } else {
            $('.sh-toggle').show();
        }
    });

    $('.adicionales .sh-toggle-btn').click(function() {
        $(this).toggleClass('sh-toggle-shown');
        if( !$(this).hasClass('sh-toggle-shown') ) {
            $('.adicionales .sh-toggle-xs').hide();
            $(this).text('MOSTRAR');
        } else {
            $('.adicionales .sh-toggle-xs').show();
            $(this).text('OCULTAR');
        }
    });

    $('.detalle .sh-toggle-btn').click(function() {
        $(this).toggleClass('sh-toggle-hidden');
        if( !$(this).hasClass('sh-toggle-hidden') ) {
            $('.detalle .sh-toggle-xs').show();
            $(this).text('Ocultar detalle');
        } else {
            $('.detalle .sh-toggle-xs').hide();
            $(this).text('Mostrar detalle');
        }
    });


});