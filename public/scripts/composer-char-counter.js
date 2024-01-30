// $(document).ready(function () {
//   //  event handler for the textarea
//   $('.new-tweet textarea').on('input', function () {
//       // update the character counter
//       const remainingChars = 140 - $(this).val().length;
//       $('.counter').text(remainingChars);

//       // check if remaining characters are negative
//       if (remainingChars < 0) {
//         $('.counter').css('color', 'red');
//     } else {
//         // Reset the color if not negative
//         $('.counter').css('color', ''); 
//     }
//   });
// });

$(document).ready(function () {
  // event handler for the textarea
  $('.new-tweet textarea').on('input', function () {
    // update the character counter
    const remainingChars = 140 - $(this).val().length;

    // find the counter element within the same form
    const counterElement = $(this).closest('form').find('.counter');

    counterElement.text(remainingChars);

    // check if remaining characters are negative
    if (remainingChars < 0) {
      counterElement.css('color', 'red');
    } else {
      // reset the color if not negative
      counterElement.css('color', ''); 
    }
  });
});