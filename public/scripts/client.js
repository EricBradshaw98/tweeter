$(document).ready(function() {

  const maxCharCount = 140;

  $('#new-tweet-button').on('submit', function(event) {
    event.preventDefault();

    // Get the tweet content
    const tweetContent = $('#new-tweet-button textarea').val();

    // Check if tweet content is empty
    if (!tweetContent.trim()) {
      alert('Tweet content cannot be empty!');
      return;
    }

    // Check if tweet content exceeds the character limit
    if (tweetContent.length > maxCharCount) {
      alert('Tweet content should not exceed 140 characters!');
      return;
    }

  const formData = $(this).serialize();
  
    $.ajax({
      url: "http://localhost:8080/tweets", 
      method: "POST",
      data: formData,
      success: function(response) {
        console.log("Server response:", response);
        console.log(formData);
        loadTweets();
        $('#new-tweet-button textarea').val("");
      },
      error: function(error) {
        console.error("Error:", error);
        
      }
      
    });
  });

  function loadTweets() {
    
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: "GET",
      dataType: "json", 
      success: function(tweets) {
        
        console.log("Fetched tweets:", tweets);

        
        renderTweets(tweets);
      },
      error: function(error) {
        console.error("Error fetching tweets:", error);
        
      }
    });
  }

  
  loadTweets();



});   




function createTweetElement(tweet) {
 
  // const $tweet = $("<article>").addClass("tweet");
  const $tweet = $(`
  <article class="tweet"> 
  <header class="user-info">
  <img src="${tweet.user.avatars}" class="avatar" alt="User Avatar">
  <h2>${escapeHtml(tweet.user.name)}</h2>
  <p>${escapeHtml(tweet.user.handle)}</p>
</header>
<div class="line"></div>
      <div class="tweet-content">
  <p>${escapeHtml(tweet.content.text)}</p>
</div>
<div class="line"></div>
<footer>
  <span class="timestamp">${timeago.format(tweet.created_at)}</span>
  <div class="icons">
    <i class="fas fa-flag"></i>
    <i class="fas fa-retweet"></i>
    <i class="fas fa-heart"></i>
  </div>
</footer>
<div class="line" style="background-color: black; height: 3px; margin: 10px 0;"></div></article>`).addClass("tweet");
  
  // Function to escape HTML entities
function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

  
  
  console.log($tweet, "annnnghghdjhgjd")
  return $tweet;
}


function renderTweets(tweets) {
  
  const $tweetsContainer = $("#tweets-container");
  
  
// loops through tweets
  for (const tweet of tweets) {
console.log(tweet)
      // calls createTweetElement for each tweet
    const $tweetElement = createTweetElement(tweet);
console.log($tweetElement)
    // takes return value and appends it to the tweets container
    $tweetsContainer.append($tweetElement);
  }
}





