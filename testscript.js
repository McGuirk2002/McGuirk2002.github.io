// define your images here
var images = [
 "https://cinni.neocities.org/images/creatures/cats/cute_cat6.gif",
  "https://cinni.neocities.org/images/creatures/cats/cute_cat4.gif",
  "https://cinni.neocities.org/images/creatures/cats/cute_cat2.gif"
];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("img-load").innerHTML = image;