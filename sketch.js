var mrect, frect;

function setup() {
  createCanvas(1200,800);
  frect = createSprite(600, 400, 50, 80);
  frect.shapeColor = "purple";
  frect.debug = true;

  mrect = createSprite(400, 200, 50, 80);
  mrect.shapeColor = "purple";
  mrect.debug = true;
}

function draw() {
  background(0,0,0); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 
  if(mrect.x - frect.x < mrect.width / 2 + frect.width / 2 && 
    frect.x - mrect.x < mrect.width / 2 + frect.width / 2 &&
    mrect.y - frect.y < mrect.height / 2 + frect.height / 2 &&
    frect.y - mrect.y < mrect.height / 2 + frect. height / 2){
    mrect.shapeColor = "white";
    frect.shapeColor = "white";
  }
  else{
    mrect.shapeColor = "purple";
    frect.shapeColor = "purple";
  }
  drawSprites();
}