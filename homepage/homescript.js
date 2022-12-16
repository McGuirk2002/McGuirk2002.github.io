window.onload = choosePic;

var myPix = new Array("advert/brawl.png", "advert/doll.png", "advert/pizza.png");

function choosePic() {
		var randomNum = Math.floor(Math.random() * myPix.length);
document.get.ElementById("myPicture").src= myPix[randomNum];