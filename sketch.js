var cat,catImg;
var mouse,mouseImg;
var garden,gardenImg;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png","images/cat2.png");
    catImg2=loadAnimation("images/cat3.png","images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png","images/mouse2.png");
    mouseImg2=loadAnimation("images/mouse3.png","iages/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(800,600);
    garden.addImage(gardenImg);

    cat=createSprite(100,80,200,200);
    cat.addAnimation(catImg1);

    mouse=createSprite(80,100,200,200);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
