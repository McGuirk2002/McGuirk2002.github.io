var images = [
	 "https://cinni.neocities.org/images/creatures/cats/cute_cat6.gif",
  "https://cinni.neocities.org/images/creatures/cats/cute_cat4.gif",
  "https://cinni.neocities.org/images/creatures/cats/cute_cat2.gif"
	];
	
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);

var image = "<img src='" + randomImage + "'>";

document.getElementById("img-load").innerHTML = image;