

$(document).ready(function () {
  //  event handler for the textarea
  $('.new-tweet textarea').on('input', function () {
      // update the character counter
      const remainingChars = 140 - $(this).val().length;
      $('.counter').text(remainingChars);

      // if remaining characters are negative
      if (remainingChars < 0) {
        $('.counter').css('color', 'red');
    } else {
        // reset the color 
        $('.counter').css('color', ''); 
    }
  });


});