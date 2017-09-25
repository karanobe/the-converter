function lbToKg(value) {
  return (value * (0.45359237));
};

function kgToLb(value) {
  return (value * (1/0.45359237));
};

$ ( document ).ready(function() {

  $input     = $('input.weight');
  $inputLb  = $('.js-input-lb');
  $inputKg  = $('.js-input-kg');
  $errorsDiv = $('.js-errors');

  $input.on('blur', function() {
    var value   = $(this).val();
    var type    = $(this).attr('data-unit');

    if ( value == '' ) {
      value = 0;
    };

    if ( $.isNumeric(value) ) {

      if ( type == 'lb' ) {
        var output = lbToKg(value);
        $('.js-input-kg').val(output.toFixed(1));
      }
      else {
        var output = kgToLb(value);       
        $('.js-input-lb').val(output.toFixed(1));
      };

      $errorsDiv.addClass('is-hidden');
      $errorsDiv.html("");

    } else {
      
      $errorsDiv.removeClass('is-hidden');
      $errorsDiv.html("Sorry, I can only convert numbers");
    
    };
  });

});

