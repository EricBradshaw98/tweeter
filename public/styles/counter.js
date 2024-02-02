

$(document).ready(function () {

  // Attach the event handler to the form instead of the button
  $('#new-tweet-button').on('submit', function(event) {
    event.preventDefault();

    // Set remainingChars to 140
    const remainingChars = 140;
    $('.counter').text(remainingChars).css('color', ''); // Reset the counter and color
  });

  // Event handler for the textarea
  $('.new-tweet textarea').on('input', function () {
    // Update the character counter
    const remainingChars = 140 - $(this).val().length;
    $('.counter').text(remainingChars);

    // If remaining characters are negative
    if (remainingChars < 0) {
      $('.counter').css('color', 'red');
    } else {
      // Reset the color 
      $('.counter').css('color', ''); 
    }
  });

});
