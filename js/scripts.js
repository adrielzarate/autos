$(function() {

    var datePicker = $('.datepicker');
    if( datePicker.length ) $('.datepicker').datetimepicker({format: 'DD/MM/YYYY',locale: 'es'});

    $("#returnInPlace").click(function() {
        if($(this).is(':checked')) {
            // visible
            $('.sh-toggle').show();
        } else {
            // no visible
            $('.sh-toggle').hide();
        }
    });

});