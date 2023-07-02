var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function rollTheDice() {
    setTimeout(function () {
var randnomNumber1=Math.random();
randnomNumber1=Math.floor((randnomNumber1*6)) +1;
var src1="./attached/images/dice" + randnomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src",src1);

var randnomNumber2=Math.random();
randnomNumber2=Math.floor((randnomNumber2*6)) +1;
var src2="./attached/images/dice" + randnomNumber2 + ".png"

document.querySelector(".img2").setAttribute("src",src2);

if(randnomNumber1>randnomNumber2){
    document.querySelector("h1").innerHTML="🚩" + player1 + " Wins!";
}
else if(randnomNumber1==randnomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else{
    document.querySelector("h1").innerHTML="🚩" + player2 + " Wins!"; 
}

    },250);
}

document.querySelector(".butn").addEventListener("click",function(){
    rollTheDice();
});
document.querySelector(".btn").addEventListener("click",function(){
    editNames();
});

