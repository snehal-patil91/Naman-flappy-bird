function preload()
{

birdImg=loadImage("floppy bird.jpg");
bgImg=loadImage("image.png");
}



function setup() {
  createCanvas(1200,600);
 
  backgroundImg = createSprite(600,300,900,400);
  backgroundImg.addImage(bgImg);
  backgroundImg.scale = 0.5;
  backgroundImg.velocityX = -4;
  bird = createSprite(400,200,20,70);
  bird.addImage(birdImg);
}
function draw() {
  background(0);  

  // jump/ move bird upwards
  if(keyDown("space"))
  {
    bird.velocityY = -10;
  }
  if(backgroundImg.x < 250)
  {
    backgroundImg.x = 700;
  }
  //gravity
  bird.velocityY = bird.velocityY + 0.5;

  
  
  drawSprites();
}