
function preload(){
  //pre-load images
  Path=loadImage("path.png");
  boy1=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  
 path = createSprite(200,200)
 path.addImage(Path)
 boy=createSprite(180,340);
 boy.addAnimation("boy",boy1);
 boy.scale=0.08;
 lb=createSprite(0,0,100,800);
 lb.visible=false;
 rb=createSprite(410,0,100,800);
 rb.visible=false
}

function draw() {
  background(0);
  path.velocityY=4;
  boy.x=mouseX
  if(path.y>400){
    path.y=height/2;

  }
  edges=createEdgeSprites();
  boy.collide(edges[3])
  boy.collide(rb)
  boy.collide(lb)
drawSprites();
}
