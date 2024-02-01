

$(document).ready(function () {
  //  event handler for the textarea
  $('.new-tweet textarea').on('input', function () {
      // update the character counter
      const remainingChars = 140 - $(this).val().length;
      $('.counter').text(remainingChars);

      // Check if remaining characters are negative
      if (remainingChars < 0) {
        $('.counter').css('color', 'red', 'font-size', '18px');
    } else {
        // Reset the color if not negative
        $('.counter').css('color', ''); // Empty string resets to default
    }
  });
});