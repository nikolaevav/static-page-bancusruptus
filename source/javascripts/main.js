jQuery(document).ready(function(){
  var newYear = new Date();
  newYear = new Date(2014, 8, 10);

  $('#counter').countdown({until: newYear, format: 'ODH', padZeroes: true});

  $(document).on('click', '.j-callback-send', function(event) {
      event.preventDefault();
      $('.alert-message-true').load("callback.php", { '11F1A3A9CC1486DFFECC0F35334CDF16FAEF863D': $('.j-callback-name').val(), '8835E3D5DF64178F370BF9F841ECF54D5D8D079D': $('.j-callback-phone').val()}).slideDown(500).delay(3000).slideUp(500);
      // $('.alert-message-true').html('Ваше письмо отправлено! Пожалайста подождите немного и с вами свяжется наш сотрудник.');
      $('#callback').modal('hide');
      $("#callback").find('form').trigger('reset');
      return false;
  });
});

