function setup() {
  createCanvas(600, 400);
  background(250, 250, 100);

}

function draw() {
  fill(250, 250, 200);
  rect(mouseX, mouseY, 100, 100);
}

function mousePressed() {
  background(250, 150, 100);
}