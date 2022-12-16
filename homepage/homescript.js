var description = [
	"advert/doll.png",
	"advert/brawl.png",
	"advert/pizza.png"
	];
	
var size = description.length
var x = Math.floor(size*Math.random())

document.getElementById('image').src=description[x];