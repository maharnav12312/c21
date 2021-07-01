var canvas;
var music;
var block1,block2,block3,block4;
var box; 
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    block1=createSprite(100,590,180,20)
    block1.shapeColor="red";

   
    block2=createSprite(300,590,180,20)
    block2.shapeColor="green";

    block3=createSprite(500,590,180,20)
    block3.shapeColor="blue";

    block4=createSprite(700,590,180,20)
    block4.shapeColor="yellow";

    //create box sprite and give velocity
    
    box=createSprite(random(10,790),300,40,40)
    box.shapeColor="white";
    box.velocityX=4;
    box.velocityY=9;
}

function draw() {
    background("black");
    edges=createEdgeSprites();
    box.bounceOff(edges);


    if(block1.isTouching(box) && box.bounceOff(block1)){     
    box.shapeColor="red"
    music.play(); 

    }
    if(block2.isTouching(box)){
    box.shapeColour="green";    
    box.velocityX=0;
    box.velocityY=0;
    music.stop();
    }
    if(block3.isTouching(box) && box.bounceOff(block3)){
    box.shapeColor="blue";
    music.play();
    }

    if(block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor="yellow";
    music.play();
    }

     drawSprites();
    
}
