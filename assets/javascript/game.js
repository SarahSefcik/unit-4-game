// Create Variables
var goal = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["https://via.placeholder.com/50x50", "https://via.placeholder.com/50x50", "https://via.placeholder.com/50x50", "https://via.placeholder.com/50x50"];

// Function to generate random number between 19-120
function randomTargetNumber() {
  goal = Math.floor(Math.random() * 101) + 19;
}

// Reset Function for values of marshmallow images array. Values between 1-12.
function resetMarshmallows() {

  // For loop to generate new values
  for (var i = 0; i < images.length; i++) {
    var marshmallows = $("<img>");
    marshmallows.addClass("m_m");
    marshmallows.attr("src", images[i]);
    marshmallows.attr("value", (Math.floor(Math.random() * 13) + 1));
    marshmallows.attr("height", "100");
    $(".marshmallow_Images").append(marshmallows);
  }
}

// Reset Function to alter the HTML displayed on screen
function alterHTML() {
  $(".goal").html("<h5>Goal Score: " + goal + "</h5>");
  $(".win_Loss").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
  $(".score-number").html(counter);
  $(".marshmallow_Images").empty();
}

// Reset Function to completely reset everything on the page
function Reset() {
  randomTargetNumber();
  counter = 0;
  alterHTML();
  resetMarshmallows();
}

// Call the functions to run on the page for setup
randomTargetNumber();
alterHTML();
resetMarshmallows();

// Function when a marshmallow is clicked, what happens?
function marshmallowClick() {

  // When the first image is clicked, a value is counted
  counter += parseInt($(this).attr("value"));

  // The number displays as text (score-number) where the variable counter is to display
  $(".score-number").html(counter);

  // If statements
  // equal to goal, win and reset
  if (counter == goal) {
    wins++;
    Reset();
  }
  // greater than goal, loss and reset
  else if (counter > goal) {
    losses++;
    Reset();
  };
};

// Call function to run on the page when clicked
$(document).on("click", ".m_m", marshmallowClick);