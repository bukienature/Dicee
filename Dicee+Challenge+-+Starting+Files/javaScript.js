console.log("Hello World");

var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
var x = Math.floor(randomNumber1 * 6) + 1;
var y = Math.floor(randomNumber2 * 6) + 1; 

console.log(x);
console.log(y);

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const Src1 = `images/dice${x}.png`;
const Src2 = `images/dice${y}.png`; 
image1.src = Src1;
image2.src = Src2;

var H1 = document.querySelector("h1");

if (x > y) { 
    H1.textContent = "🚩Player 1 Wins!";
}
else if (y > x) {
    H1.textContent = "Player 2 Wins!🚩";
}
else if (y === x) {
    H1.textContent = "Draw!";
}
else {
    H1.textContent;
}