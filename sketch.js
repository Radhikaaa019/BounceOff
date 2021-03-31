var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(495,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
         music.stop();

        ball.velocityX=0;
        ball.velocityY=0;
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "green";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "yellow";
        music.play();
    }
    

    drawSprites();
}

function isTouching(object1,object2){
if(object1.x-object2.x < object2.width/2+object1.width/2
&& object2.x-object1.x< object2.width/2+object1.width/2 
&& object1.y-object2.y < object2.height/2+object1.height/2
&& object2.y-object1.y< object2.height/2+object1.height/2 ) {
    return true;
}

}

function bounceOff(object1,object2){
    if(object1.x-object2.x < object2.width/2+object1.width/2
 && object2.x-object1.x< object2.width/2+object1.width/2 ){
     object1.velocityX= object1.velocityX*(-1);
     object2.velocityX= object2.velocityX*(-1);
 }
if(object1.y-object2.y < object2.height/2+object1.height/2
    && object2.y-object1.y< object2.height/2+object1.height/2 ){
        object1.velocityY= object1.velocityY*(-1);
     object2.velocityY= object2.velocityY*(-1);
    }

}