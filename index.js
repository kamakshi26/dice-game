var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var imagesrc="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesrc);
var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var imagesrc1="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imagesrc1);
if(randomNumber1>randomNumber2)
{
  document.getElementById("id1").innerHTML="player 1 wins 🔥";
}
else if(randomNumber1<randomNumber2)
{
  document.getElementById("id1").innerHTML=" player 2 wins 🔥";
}
else
{
  document.getElementById("id1").innerHTML="it's a draw 🤝";
}
