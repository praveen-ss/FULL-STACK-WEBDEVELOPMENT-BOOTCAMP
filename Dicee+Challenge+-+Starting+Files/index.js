let randomnumber1 =Math.floor(Math.random()*6)+1;

let randomDiceImage1 ="dice"+ randomnumber1 +".png"; //dice1.png - dice6.png
let randomImagesource1 ="./images/"+ randomDiceImage1; //./images/dice1.png - ./images/dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource1);


let randomnumber2 =Math.floor(Math.random()*6)+1;
let randomImagesource2 ="./images/dice"+ randomnumber2 +".png"; //./images/dice1.png - ./images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);


if (randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (randomnumber2 > randomnumber1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}   
else {
  document.querySelector("h1").innerHTML="Draw!";
}