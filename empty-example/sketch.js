/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let width = window.innerWidth;
let height = window.innerHeight;

function setup() {
  createCanvas(width, height, WEBGL);

}

function draw() {
  background(0);
  stroke('rgb(0,255,0)');
  strokeWeight(5);
  rotateX(40);
  rotateY(40);
  noFill(0);
  box(100);

}