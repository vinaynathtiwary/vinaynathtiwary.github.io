// dark and light mood function

function lightMood() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//  _____________________________________________

// lightmood and darkmood changer function

var currentImageIndex = 1;
var totalImages = 2; // Change this to the total number of images you have

function changeImage() {
  currentImageIndex = (currentImageIndex % totalImages) + 1;
  var imagePath =
    "portfolioAssets/" +
    (currentImageIndex === 1 ? "darkMood.png" : "lightMood.png");
  document.getElementById("imageDisplay").src = imagePath;
}

// _______________________________________________
