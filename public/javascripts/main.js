"use strict";

// connect to socket
const ws = io.connect();

// -----------private vars
// postion vars
let posX = 20;
let posY = 20;

//initial player position
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(posX,posY,30,30);
ctx.fill();



//----------------  functions
const movePlayer = (direction) => {
  ctx.clearRect(0,0, c.width, c.height);
  ctx.beginPath();
  ctx.rect(posX,posY,30,30);
  ctx.fill();
  ctx.closePath();
};

// listen for arrow keypress
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    // move player up
    if (e.keyCode == '38') {
        // up arrow
        posY -=10;
        movePlayer("up");
    }
    // move player down
    else if (e.keyCode == '40') {
        // down arrow
        posY += 10;
        console.log("down");
        movePlayer("down");
    }
    // move player left
    else if (e.keyCode == '37') {
       // left arrow
       posX -=10;
       console.log("left");
       movePlayer("left");
    }
    // move player right
    else if (e.keyCode == '39') {
       // right arrow
       posX +=10;
       movePlayer("right");

    }

}
