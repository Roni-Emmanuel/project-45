var PLAY = 1;
var END = 0;
var gameState = PLAY;
var knife;
var onion;


function preload(){
	knifeIMG = loadImage("knife.png");
	onionIMG = loadImage("onion.png")
	rockIMG = loadImage("rock.png");
	onioncutIMG = loadImage("onioncut.jpeg");
}

function setup() {
	createCanvas(800, 700);
	knife = createSprite(700,300,20,20);
    knife.addImage(knifeIMG);
	knife.scale = 0.5;
  
	//score = 0;
	
}


function draw() {
  
  background("orange");
  
  if (keyDown(LEFT_ARROW)){
    knife.x = knife.x-2;
  }
  if (keyDown(RIGHT_ARROW)){
    knife.x = knife.x+2;
  }
  if (keyDown(DOWN_ARROW)){
    knife.y = knife.y+2;
  }
  if (keyDown(UP_ARROW)){
    knife.y = knife.y-2;
  }
  
  //if (knife.isTouching(onion)){
    //score = score + 1
  //}
//text("Score: "+ score, 500,50);
  
spawnOnions();



  drawSprites();
 
}
function spawnOnions() {
	//write code here to spawn the clouds
	if (frameCount % 100 === 0) {
	  var onion = createSprite(100,120,40,10);
	  onion.y = Math.round(random(80,400));
	  onion.addImage(onionIMG);
	  onion.scale = 0.3;
	  onion.velocityX = 3;
	  
	   //assign lifetime to the variable
	  onion.lifetime = 500;
	  
	}
  }



