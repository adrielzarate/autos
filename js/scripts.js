$(function() {

    var datePicker = $('.lieber-carro .datepicker');
    if( datePicker.length ) $('.lieber-carro .datepicker').datetimepicker({format: 'DD/MM/YYYY',locale: 'es'});

    var delivery;
    var devolution;

    function evalDeliveryDevolution() {

        console.log(delivery, devolution);

        // 0 - Seleccione el lugar de entrega
        // 1 - Aeropuerto el Plumerillo Mza
        // 2 - Oficina LIBER
        // 3 - Terminal del Sol - Mendoza
        // 4 - Zona centro
        // 5 - Otro

        /*
            .delivery-date
            .delivery-address
            .airline
            .devolution-date
            .devolution-address
        */

        if( delivery == 4 && devolution == 5 ) { // zona centro - otro
            $('.airline').addClass('sh-toggle');
            $('.delivery-date, .delivery-address, .devolution-date, .devolution-address').removeClass('sh-toggle');
        }
        else if( delivery == 2 && devolution == 3 ) { // oficina - terminal
            $('.delivery-address, .airline, .devolution-address').addClass('sh-toggle');
            $('.delivery-date, .devolution-date').removeClass('sh-toggle');
        }
        else if( delivery == 1 && devolution == 1 ) { // aeropuerto - aeropuerto
            $('.delivery-address, .devolution-address').addClass('sh-toggle');
            $('.delivery-date, .airline, .devolution-date').removeClass('sh-toggle');
        }
        else if(
            delivery == 2 && devolution == 2 ||
            delivery == 3 && devolution == 3 ||
            delivery == 4 && devolution == 4 ||
            delivery == 5 && devolution == 5
            ) { // iguales sin caso aeropuerto
            $('.delivery-address, .airline, .devolution-address').addClass('sh-toggle');
            $('.delivery-date, .devolution-date').removeClass('sh-toggle');
        }
        else { // casos distintos
            $('#devolution').removeAttr('disabled');
            $('.lieber-carro #returnInPlace').attr('checked', false);
            $('.delivery-address').addClass('sh-toggle');
            $('.delivery-date, .airline, .devolution-date, .devolution-address').removeClass('sh-toggle');
        }
    }

    evalDeliveryDevolution();

    $('#delivery').change(function() {
        delivery = $(this).find(':selected').data('delivery');
        evalDeliveryDevolution();
    });

    $('#devolution').change(function() {
        devolution = $(this).find(':selected').data('devolution');
        evalDeliveryDevolution();
    });

    $('.lieber-carro .datepicker input').click(function(event){
       $(this).siblings('.input-group-addon').click();
    });

    $('.lieber-carro #returnInPlace').click(function() {
        if($(this).is(':checked')) {
            $('#devolution').attr('disabled', true);
            $('#devolution').val( $('#delivery').val() );
            delivery = $('#delivery').find(':selected').data('delivery');
            devolution = $('#devolution').find(':selected').data('devolution');
            // $('.lieber-carro .sh-toggle').hide();
        } else {
            $('#devolution').removeAttr('disabled');
            // $('.lieber-carro .sh-toggle').show();
        }
        evalDeliveryDevolution();
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