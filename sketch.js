var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;

function preload(){
  pathImg = loadImage('path.png');
  boyImg = loadImage('jake1.png','jake2.png','jake3.png','jake4.png','jake5.png')
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200);
 path.addImage(pathImg);
path.velocityY = 4;
path.scale=0.9;

boy = createSprite(200,320,20,20);
boy.addAnimation('jake1.png','jake2.png','jake3.png','jake4.png','jake5.png');
boy.scale=0.5;
  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
