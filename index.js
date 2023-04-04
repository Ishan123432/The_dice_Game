var n1=Math.floor(Math.random()*6)+1;
var randomdiceimage="dice" + n1 + ".png";
var randomimagesource=randomdiceimage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);
var n2=Math.floor(Math.random()*6)+1;
var randomdiceimage2="dice" +n2 + ".png";
var randomimagesource2=randomdiceimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);
if(n1>n2)
document.querySelector("h1").innerHTML="player1 wins";
if(n2>n1)
document.querySelector("h1").innerHTML="player2 wins";
if(n2==n1)
document.querySelector("h1").innerHTML="draw";
