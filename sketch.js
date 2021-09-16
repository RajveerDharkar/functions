function setup() {
  createCanvas(800,400);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(400, 300, 50, 50);
  a.velocityX = 5
  a.velocityY = 5
  f = createSprite(400, 400, 50, 50);
  e = createSprite(400, 100, 50, 50);
  d = createSprite(400, 300, 50, 50);
  c = createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  drawSprites();

  b.x = mouseX
  b.y = mouseY
  if(istouching(b,f))


  {
    a.shapeColor = "red"
    b.shapeColor = "red"
   }
  else{
    a.shapeColor = "green"
    b.shapeColor = "green"
  }
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<b.width/2 + a.width/2){
    a.velocityX = a.velocityX * (-1)
    b.velocityX = b.velocityX * (-1)
  
  }
  if(a.y-b.y<a.height/2+b.height/2 && b.y-a.y<b.height/2 + a.height/2){
    a.velocityY = a.velocityY * (-1)
    b.velocityY = b.velocityY * (-1)
  
  }
  }
   function istouching(object1, object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object2.width/2 + object1.width/2 && object1.y-object2.y<object1.height/2+object2.height/2 && object2.y-object1.y<object2.height/2 + object1                                   .height/2){
      return true
    }
    else{
      return false
    }
  
   }
