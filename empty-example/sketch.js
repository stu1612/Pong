/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let ballRadius = 30;
let ballPositionX = 200;
let ballPositionY = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(2, 0, 36);
  fill(255);
  noStroke();
  ellipse(ballPositionX, ballPositionY, ballRadius, ballRadius);

}