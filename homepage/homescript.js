var imlocation = "advert/";
var currentdate = 0;
var image_mumber = 0;
function ImageArray (n) {
	this.length = n;
	for (var i =1; i <= n; i++) {
	this[i] = ' '
	}
	
}
image = new ImageArray(13)
image[0] = 'brawl.png'
image[1] = 'doll.png'
image[2] = 'pizza.png'
var rand = 60/image.length
function randomimage() {
	currentdate = new Date()
	image_number = current.date.getSeconds()
	image_number = Math.floor(image_number/rand)
	return(image[image_number])
}
document.write("img src'" + imlocation + randomimage()+ "'>");