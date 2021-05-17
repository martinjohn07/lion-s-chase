var score=0
var deer,deerImage, lion,lionImage,background,backgroundImage,pond,pondImage,heart,heartImage,rectangle
var gameState =3
var life =2
var button 
var heart,heartGroup
var dieSound
function preload(){
  deerImage=loadImage("deer3.png")
  backgroundImage=loadImage("background 3.jpg")
  lionImage=loadImage("lion1.png")
  pondImage=loadImage("pond1.png")
  heartImage=loadImage("heart1.png")
  //load the sound
  //dieSound = loadSound("")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  lion=createSprite(400, 200, 50, 50);
  lion.addImage(lionImage)
  lion.visible=false;
  //lion.debug=true
  lion.scale=0.5
  lion.setCollider("circle",0,0,100)

  deer=createSprite(1700,650,20,20)
  deer.addImage(deerImage)
  deer.visible=false;
  //deer.debug=true 
  deer.scale=0.5
  deer.setCollider("circle",0,0,100)

  pond=createSprite(1500,700,20,20)
  pond.addImage(pondImage)
  pond.scale=0.5
  pond.visible=false;
 
  button = createButton("next");
  button.position(windowWidth/2,windowHeight-230);
  button.size(100,70)
  /*
  heartGroup = createGroup()
  for (var i=150;i<700;i=i+70){
    heart=createSprite(i,deer.y,50,50)\
    heartGroup.add(heart)
    //heart.addImage(heartImage)
  }
 */
}

function draw() {
   
  //story  
  if(gameState===1){
    background(backgroundImage); 
    strokeWeight(10)
    fill("black") 
    textSize(100)
    text("Lion's Chase",650,150)
    textSize(70)
    text("Welcome to the Lion's Chase \nA story where the lion has to hunt \nthe deer in order to feel its hungry cubs",windowWidth/5,windowHeight/2)
    
    button.mousePressed(()=>{
      gameState=2;
    })
  }

  
  //instruction
  if(gameState===2){
    background(backgroundImage);
    fill("black") 
    textSize(100)
    text("Lion's Chase",650,150)
    
    textSize(50)
    text("UP_ARROW TO MOVE UP \nDOWN_ARROW TO MOVE DOWN \nLEFT_ARROW TO MOVE Left \nRIGHT_ARROW TO MOVE RIGHT \n ",windowWidth/4,windowHeight/2)
    
    button.mousePressed(()=>{
      gameState=3;
    })
   
  }

  
  //chase  
  if(gameState===3){
    background(backgroundImage);  
    lion.visible=true;
    deer.visible=true;
    //pond.visible=true;
    button.hide()

    textSize(50)
    fill("white")
    rect(300,1000,350,100)
    noFill()
    fill ("black")
    text("DEER LIFE "+life,300,1050)

    //spawning of deer
    if(frameCount%70===0){
      deer.x=random(100,windowWidth-200)
      deer.y=random(100,windowHeight-200)
    }
    


    //moving lion
    if( keyDown("up")) {
      lion.y=lion.y-20
    }

    if (keyDown("right")) {
      lion.x=lion.x+20
    }
          
    if (keyDown("left")) {
      lion.x=lion.x-20
    }
          
    if (keyDown("down")) {
      lion.y=lion.y+20
    }   

    //life of deer =10
    if(lion.isTouching (deer)){
      life=life-1
      //dieSound.play()
      spawnDeer()
    }

    if(life ===0){
      gameState =4
    }
  }
  
  //feed cubs  
  if(gameState===4){
    background(backgroundImage);
    textSize(100)
  
    fill("white")
    rect(650,150,350,100)
    noFill()
    fill ("black")
    text("Lion's Chase",650,150)
    
    textSize(50)
     fill("white")
    rect(300,1000,350,100)
    noFill()
    fill ("black")
    text("You win, the lion can feed its hungry cubs ",windowWidth/4,windowHeight/2)
  }  
 
  drawSprites();
}

function spawnDeer(){
    deer.x=random(100,windowWidth-200)
    deer.y=random(100,windowHeight-200)
}