var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png")
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(200,100)
apple.scale = 0.1
apple.addImage(appleImg)

apple.velocityY = 5

}


function draw() {
  background(0);
 
  rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  if(frameCount%30===0){
    var apple=createSprite(random(60,70),30,90,-10)
    apple.addImage(appleImg)
    apple.scale = 0.1
    apple.velocityY = 5
  }
  
  drawSprites();
}