var bird,birdImage;
var pole,poleImage;
var bg, bgImg;
var invisibleGround;

function preload(){
  birdImage = loadImage("bird.png");
  poleImage = loadImage("pole.png");
  bgImg = loadImage("backround.png");
}

function setup() {
  createCanvas(1000,800); 
  pole = createSprite(850,400,20,20);
  pole.addImage(poleImage);
pole.scale=1.5;
  bird = createSprite(100,400,20,20);
  bird.addImage(birdImage);
  bird.scale=0.3;

  invisibleGround = createSprite(100,700,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(bgImg);
  textSize(50);
  fill("black");
  text("FLAPPY BIRD", 250, 100);
  textSize(25);
  fill("blue");
  text("1.press space to jump.", 50, 200);

  if(keyDown("space")){
   bird.velocityY=-2
  }

 
  
  drawSprites();
}

