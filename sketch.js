function setup() {
  createCanvas(800,400);
   Mister = createSprite(400, 200, 50, 50);
   Mister.shapeColor=("brown")
   bannana = createSprite(300,200,50,50)
   bannana.shapeColor=("yellow")
}
function draw() {
  background(255,255,255);  
  drawSprites();
  bannana.x =mouseX
  bannana.y =mouseY
  if(bannana.x-Mister.x<Mister.width/2+bannana.width/2
    &&Mister.x-bannana.x<Mister.width/2+bannana.width/2){
      Mister.shapeColor =("purple");
      bannana.shapeColor =("orange");
    } 
    else{
   Mister.shapeColor =("brown");
   bannana.shapeColor =("yellow");   
    }
}