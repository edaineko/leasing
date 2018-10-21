$(document).ready(function() {
    $('#owl-carousel-partner').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: true,
        pagination:true,
        items: 1,
        navText: ["<div class='glyphicon-right'><img src='images/leasing/arrow_partner_slider.png'></div>"]
    });
$( function() {
    $( "#slider" ).slider({
        orientation: "horizontal",
        value:600000,
        min: 250000,
        max: 6000000,
        step: 1,
        range: "min",
        slide: function( event, ui ) {
            $( "#calculator_price_input" ).val( ui.value );
        }
    });
    $( "#calculator_price_input" ).val( $( "#slider" ).slider( "value" ) );
} );
    $( function() {
        $( "#slider-month" ).slider({
            orientation: "horizontal",
            value:14,
            min: 12,
            max: 60,
            step: 1,
            range: "min",
            slide: function( event, ui ) {
                $( "#calculator_month_input" ).val( ui.value );
            }
        });
        $( "#calculator_month_input" ).val( $( "#slider-month" ).slider( "value" ) );
    } );
    $( function() {
        $( "#slider-proc" ).slider({
            orientation: "horizontal",
            value:40,
            min: 20,
            max: 80,
            step: 1,
            range: "min",
            slide: function( event, ui ) {
                $( "#calculator_proc_input" ).val( ui.value );
            }
        });
        $( "#calculator_proc_input" ).val( $( "#slider-proc" ).slider( "value" ) );
    } );
    $( function() {
        $( "#slider-vykup" ).slider({
            orientation: "horizontal",
            value:5,
            min: 0,
            max: 10,
            step: 1,
            range: "min",
            slide: function( event, ui ) {
                $( "#calculator_vykup_input" ).val( ui.value );
            }
        });
        $( "#calculator_vykup_input" ).val( $( "#slider-vykup" ).slider( "value" ) );
    } );


    // var pipsSlider = document.getElementById('slider-pips');
    //
    // noUiSlider.create(pipsSlider, {
    //     range: {
    //         min: 250000,
    //         max: 6000000
    //     },
    //     start: [250000],
    //     pips: {
    //         mode: 'positions',
    //         values: [0, 25, 50, 75, 100]
    //     }
    // });
});
