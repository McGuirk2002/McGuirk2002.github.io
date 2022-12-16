var images = [
	"advert/doll.png",
	"advert/brawl.png",
	"advert/pizza.png"
	];
	
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);

var image = "<img src= '" + randomImage + "'>";

document.getElementById("img-load").innerHTML = image;