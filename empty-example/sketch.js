/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

// Random Ball Placement
var xBall = Math.floor(Math.random() * 300) + 50;
var yBall = 50;
var xSpeed = (2, 7);
var ySpeed = (-7, -2);
var score = 0

// Canvas
function setup() {
  createCanvas(windowWidth, 400);
}

//Background

function draw() {

  // Background
  background(0);

  // Paddle
  fill('red');
  rect(mouseX, 385, 90, 15);

  //Functions
  move();
  display();
  bounce();
  //resetBall();
  paddle();

  //Score
  fill('#d9c3f7');
  textSize(24);
  text("Score: " + score, 10, 25);
}
// Ball Functions
function move() {
  xBall += xSpeed;
  yBall += ySpeed;
}


function bounce() {

  if (xBall < 10 ||
    xBall > windowWidth - 10) {
    xSpeed *= -1;
  }
  if (yBall < 10 ||
    yBall > windowHeight - 10) {
    ySpeed *= -1;
  }
}


// Reset Ball
//function resetBall() {
//  if (yBall >= 400 ||
//    yBall > 400 - 10) {
//    ySpeed = 4;
// }

//}

function display() {
  fill('#d9c3f7');
  ellipse(xBall, yBall, 20, 20);
}

// Bounce off Paddle
function paddle() {
  if ((xBall > mouseX &&
    xBall < mouseX + 90) &&
    (yBall + 10 >= 385)) {
    xSpeed *= -1;
    ySpeed *= -1;
    score++;

  }
}
