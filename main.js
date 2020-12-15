window.onload = function () {
  var canvas = document.querySelector("#canvas");
  var ctx = canvas.getContext("2d");

  var color = document.querySelector("#color");
  var stroke = document.querySelector("#strokeWidth");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 120;

  color.addEventListener("input", function () {
    ctx.strokeStyle = color.value;
  });

  color.addEventListener("change", function () {
    ctx.strokeStyle = color.value;
  });

  stroke.addEventListener("input", function () {
    ctx.lineWidth = stroke.value;
  });
  stroke.addEventListener("change", function () {
    ctx.lineWidth = stroke.value;
  });
  //ading event listeners
  canvas.addEventListener("mousedown", start);
  canvas.addEventListener("mouseup", end);
  canvas.addEventListener("mousemove", draw);

  let drawing = false;

  function start() {
    drawing = true;
  }

  function end() {
    drawing = false;
    ctx.beginPath();
  }
  function draw(event) {
    if (!drawing) return;
    ctx.lineTo(event.clientX, event.clientY);
    ctx.stroke();
  }
};
