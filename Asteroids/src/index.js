console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

window.mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
);

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  canvas = document.getElementById("game-canvas");
  ctx = canvas.getContext('2d');
  window.mo.draw(ctx);
  setInterval(window.mo.move.bind(window.mo), 1000);
});
