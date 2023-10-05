var ad = document.getElementById("ad");
var ads = 40;
var randomthing = Math.floor(Math.random() * ads) + 1;
var chosenad = "ad" + randomthing + ".gif";
ad.style.backgroundImage = "url('" + chosenad + "')";
