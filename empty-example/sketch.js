/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let xBall;
let yBall;
let xSpeed;
let ySpeed;
let score;

function randomBallPlacment() {
  xBall = Math.floor(Math.random() * 300) + 50;
  yBall = 50;
  xSpeed = (2, 7);
  ySpeed = (-7, -2);
  score = 0
}




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
  bounce();
  display()
  resetBall();
  paddle();

  //Score
  fill('#d9c3f7');
  textSize(24);
  text("Score: " + score, 10, 25);
}


// Random Ball Placement



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
function resetBall() {
  if (yBall >= 385 ||
    yBall > 400 - 15) {
    ySpeed = 4;
    randomBallPlacment();
  }
}

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

randomBallPlacment();
