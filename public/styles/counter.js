

$(document).ready(function () {
 

  
  $('new-tweet-button').on('submit', function(event) {
    event.preventDefault();
    console.log("Form is being submitted.");
    
    $('.counter').text(140).css('color', '');

  });

  
  $('.new-tweet textarea').on('input', function () {
    
    const remainingChars = 140 - $(this).val().length;
    $('.counter').text(remainingChars);

    
    if (remainingChars < 0) {
      $('.counter').css('color', 'red');
    } else {
      
      $('.counter').css('color', ''); 
    }
  });
});

