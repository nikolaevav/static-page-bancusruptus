jQuery(document).ready(function(){
  var newYear = new Date();
  newYear = new Date(2014, 8, 10);

  $('#counter').countdown({until: newYear, format: 'ODH', padZeroes: true});

  $.mask.definitions['~'] = "[+-]";
  $("#phone_number").mask("+7 (999) 999-99-99");


  $(document).on('click', '.j-callback-send', function(event) {
      event.preventDefault();
      if(($('.j-callback-name').val() !== '') && ($('.j-callback-phone').val() !== '')) {
        $('.alert-message-true').load("callback.php", { '11F1A3A9CC1486DFFECC0F35334CDF16FAEF863D': $('.j-callback-name').val(), '8835E3D5DF64178F370BF9F841ECF54D5D8D079D': $('.j-callback-phone').val()}).slideDown(500).delay(3000).slideUp(500);
        $("#callback").find('form').trigger('reset');
      } else {
        $('.alert-message-true').html('Пожалуйста заполните форму со всеми полями.').slideDown(500).delay(3000).slideUp(500);
      }

      return false;
  });
});

