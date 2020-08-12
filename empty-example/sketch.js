/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict";

let width = window.innerWidth;
let height = window.innerHeight;
let bg;

function setup() {
  bg = loadImage('../empty-example/img/sea-bg.jpg')
  createCanvas(width, height);
}

function draw() {
  background(bg);

}