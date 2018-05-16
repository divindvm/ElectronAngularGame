
require

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bird = new Image();
var background1 = new Image();
var background2 = new Image();
var background3 = new Image();
// var background4 = new Image();
var foreground1 = new Image();
var foreground2 = new Image();
var ball1 = new Image();
var ball2 = new Image();
var ball3 = new Image();
var ball4 = new Image();
var ball5 = new Image();
var ball6 = new Image();
var ball7 = new Image();
var ball8 = new Image();
var ball9 = new Image();
var pipe1 = new Image();
var pipe2 = new Image();



background1.src = 'assets/bg4.png';
background2.src = 'assets/bg4.png';
// background4.src = 'assets/bg3.png';
foreground1.src = 'assets/fg1.png';
foreground2.src = 'assets/fg2.png';


ball1.src = 'assets/ball1.png';
ball2.src = 'assets/ball2.png';
ball3.src = 'assets/ball3.png';
ball4.src = 'assets/ball4.png';
ball5.src = 'assets/ball5.png';
ball6.src = 'assets/ball6.png';
ball7.src = 'assets/ball5.png';
ball8.src = 'assets/ball4.png';
ball8.src = 'assets/ball3.png';
ball9.src = 'assets/ball2.png';

pipe1.src = 'assets/pipe1.png';
pipe2.src = 'assets/pipe2.png';

var background1X = 0;
var background2X = 1280;
var ballIndex = 1;

var ballX=200;
var bally=523;
var constant=5;

pipeX = 1500;
pipeY = 523;

var obst = [];

obst[0] = {
    x : cvs.width+100,
    y : 523
};

document.addEventListener("keyup",down);
document.addEventListener("keydown",jump);
document.addEventListener("keypress",fly);
function jump(event){
    let key = event.keyCode;

    if(key == 32){
        bally=bally-100;
        ballX=ballX+20;
        jumpBall();
      
    }
}

function down(event){
    let key = event.keyCode;
    
    if(key == 32){
        bally=523;
        landBall();
        runAgain();
    }
}

function fly(event){
    let key = event.keyCode;
    if(key == 32){
        bally=bally-1;

    }
}



function drawBG1(){
    ctx.drawImage(background1,background1X,0);
    background1X--;
}
function drawBG2(){
    ctx.drawImage(background2,background2X,0); 
    background2X--;
}
function drawFG(){
    ctx.drawImage(foreground1,background1X,0);
    ctx.drawImage(foreground2,background1X,0);
}

function jumpBall(){
    ball1.src = 'assets/ballfly.png';
    ball2.src = 'assets/ballfly.png';
    ball3.src = 'assets/ballfly.png';
    ball4.src = 'assets/ballfly.png';
    ball5.src = 'assets/ballfly.png';
    ball6.src = 'assets/ballfly.png';
    ball7.src = 'assets/ballfly.png';
    ball8.src = 'assets/ballfly.png';
    ball8.src = 'assets/ballfly.png';
    ball9.src = 'assets/ballfly.png';
}

function landBall(){
    ball1.src = 'assets/ballfly2.png';
    ball2.src = 'assets/ballfly2.png';
    ball3.src = 'assets/ballfly2.png';
    ball4.src = 'assets/ballfly2.png';
    ball5.src = 'assets/ballfly2.png';
    ball6.src = 'assets/ballfly2.png';
    ball7.src = 'assets/ballfly2.png';
    ball8.src = 'assets/ballfly2.png';
    ball8.src = 'assets/ballfly2.png';
    ball9.src = 'assets/ballfly2.png';
    

   
}


function runAgain(){
    console.log("After 3sec");
    ball1.src = 'assets/ball1.png';
    ball2.src = 'assets/ball2.png';
    ball3.src = 'assets/ball3.png';
    ball4.src = 'assets/ball4.png';
    ball5.src = 'assets/ball5.png';
    ball6.src = 'assets/ball6.png';
    ball7.src = 'assets/ball5.png';
    ball8.src = 'assets/ball4.png';
    ball8.src = 'assets/ball3.png';
    ball9.src = 'assets/ball2.png';
}

function drawBall(index){
    if(index>1 && index<15){
        ctx.drawImage(ball1,ballX,bally);
    }
    else if(index>=15 && index<30){
        ctx.drawImage(ball2,ballX,bally);
    }
    else if(index>=30 && index<45){
        ctx.drawImage(ball3,ballX,bally);
    }
    else if(index>=45 && index<60){
        ctx.drawImage(ball4,ballX,bally);
    }
    else if(index>=60 && index<75){
        ctx.drawImage(ball5,ballX,bally);
    }
    else if(index>=75 && index<90){
        ctx.drawImage(ball6,ballX,bally);
    }
    else if(index>=90 && index<105){
        ctx.drawImage(ball5,ballX,bally);
    }
    else if(index>=105 && index<120){
        ctx.drawImage(ball4,ballX,bally);
    }
    else if(index>=120 && index<135){
        ctx.drawImage(ball3,ballX,bally);
    }
    else{
        ctx.drawImage(ball2,ballX,bally);
    }
    
}
function drawObstacles(){
    ctx.drawImage(pipe1,pipeX,pipeY);
}


function draw(){

    if(ballX>200){
        ballX-=1;
        background1X-=5;
        background2X-=5;
    }

    drawBG1();
    drawBG2();
    // ctx.drawImage(background4,0,0); 
    drawObstacles();
    drawBall(ballIndex);
    drawFG();
    ballIndex++;
    if(ballIndex > 150){
        ballIndex=1;
    }

    if(background1X < -1280){
        background1X = 1280;
    }
    if(background2X < -1280){
        background2X = 1280;
    }

    requestAnimationFrame(draw);
}

draw();
