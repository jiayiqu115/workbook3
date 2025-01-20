let img;

function preload() {
  img = loadImage('VRChat_2024-12-04_00-23-09.946_2560x1440.png');
}

function setup() {
  createCanvas(800, 500); 
  background(0); 
}

function draw() {
  let x = random(img.width);
  let y = random(img.height);
  let c = img.get(int(x), int(y));
  fill(c);
  noStroke();
  let size = random(10, 30); 
  rect(x, y, size, size);
}