function mphToKph(value) {
  return (value * (1.609344));
};

function kphToMph(value) {
  return (value * (1/1.609344));
};

$ ( document ).ready(function() {

  $input     = $('input#input-mph');
  $inputMph  = $('.js-input-mph');
  $inputKph  = $('.js-input-kph');
  $errorsDiv = $('.js-errors');

  $input.on('blur', function() {
    var value   = $(this).val();
    var type    = $(this).attr('data-unit');

    if ( value == '' ) {
      value = 0;
    };

    if ( $.isNumeric(value) ) {

      if ( type == 'mph' ) {
        var output = mphToKph(value);
        $('.js-input-kph').val(output.toFixed(1));
      }
      else {
        var output = kphToMph(value);       
        $('.js-input-mph').val(output.toFixed(1));
      };

      $errorsDiv.addClass('is-hidden');
      $errorsDiv.html("");

    } else {
      
      $errorsDiv.removeClass('is-hidden');
      $errorsDiv.html("Sorry, I can only convert numbers");
    
    };
  });

});

