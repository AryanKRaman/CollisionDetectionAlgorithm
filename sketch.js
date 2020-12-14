var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,200,50,50)
  movingRect.shapeColor="green";
  movingRect.debug=true;

  fixedRect=createSprite(400,200,80,80)
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
}

function draw() {
  background("pink"); 
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  console.log(fixedRect.x-movingRect.x);
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}