// Create Variables
var goal = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["assets/images/clover.png", "assets/images/heart.png", "assets/images/moon.png", "assets/images/star.png"];
var funFacts = ["Lucky Charms were made originally by mixing Cherios with circus peanuts marshmallow candy.", "There were only four original marshmallow shapes: pink heart, orange star, yellow moon, and green clover.", "Limited edition marshmallows became additions in 1975.", "The first limited edition marshmallow was a blue diamond.", 'The horseshoe marshmallow represents the "power of speed."', 'The red balloon marshmallow represents the "power to float."', "When the green tree marshmallow was introduced in 1991, kids could receive their own tree to plant by showing two proofs of purchase.", 'The rainbow marshmallow represents the "power to travel from place to place."', "The blue diamond and yellow moon marshmallows morphed into one blue moon.", "The pot of gold marshmallow was replaced by the hour glass marshmallow.", "A factory mishap caused swirls in the coloring of the marshmallows. The outcome was so memorable, it resurfaced and the second time on purpose.", "Lucky charms has decided to introduce a 2018 unicorn marshmallow into the mix."]
var arrayLength = funFacts.length

// Function to generate random number between 19-120
function randomTargetNumber() {
  goal = Math.floor(Math.random() * 101) + 19;
}

// Function to generate a random value of funFacts for an alert
function alertGenerator() {

  // For loop to generate new array values
  for (var a = 0; a < arrayLength; i++) {
    alert("Did you know: " + a);
  }
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
    alertGenerator();
  }
  // greater than goal, loss and reset
  else if (counter > goal) {
    losses++;
    Reset();
    alertGenerator();
  };
};

// Call function to run on the page when clicked
$(document).on("click", ".m_m", marshmallowClick);