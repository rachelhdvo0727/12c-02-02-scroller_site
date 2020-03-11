"use strict";

window.addEventListener("DOMContentLoaded", start);
const cnt = document.querySelector(".container");
const status = document.querySelector(".statusbar");
let ratio;

function start() {
  cnt.addEventListener("scroll", scrolling);
  document.querySelector("#end_scrolling").paused;
}
function scrolling() {
  console.log("scrolling");
  let scrTop = cnt.scrollTop;
  let scrHeight = cnt.scrollHeight;
  let cltHeight = cnt.clientHeight;

  //ratio = (scrTop / (scrHeight - cltHeight)) * 100;
  ratio = scrTop / (scrHeight - cltHeight);
  console.log(ratio);

  //status.style.width = ratio + "%";
  status.style.setProperty("--ratio", ratio);
  if (ratio === 1) {
    document.querySelector("#end_scrolling").play();
    document.querySelector("#end_scrolling").volume = 0.3;
  }
}
