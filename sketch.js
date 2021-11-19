var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpg")

}

function setup() {
  canvas = createCanvas(1450,537);
  //adding the background image
  bg = createSprite(650,200)
  bg.addImage(bgImg)
  bg.scale =2; 
  

//creating the player sprite
 player = createSprite(80 , 300, 50, 50);
 player.addImage(shooterImg)
 player.scale = 0.3
}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("w")||touches.length>0){
  player.y = player.y-10
}
if(keyDown("s")||touches.length>0){
 player.y = player.y+10
} 


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}
