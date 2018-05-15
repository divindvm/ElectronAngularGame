var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var background1 = new Image();
var background2 = new Image();
var ball1 = new Image();
var ball2 = new Image();
var ball3 = new Image();
var ball4 = new Image();
var ball5 = new Image();
var ball6 = new Image();

var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

// bird.src = 'assets/bird.png';
background1.src = 'assets/bg4.png';
background2.src = 'assets/bg4.png';
ball1.src = 'assets/ball4.png';
ball2.src = 'assets/ball3.png';
ball3.src = 'assets/ball2.png';
ball4.src = 'assets/ball1.png';
ball5.src = 'assets/ball2.png';
ball6.src = 'assets/ball3.png';



// bg3.src = 'assets/bg.png';

// fg.src = 'assets/fg.png';
// pipeNorth.src = 'assets/pipeNorth.png';
// pipeSouth.src = 'assets/pipeSouth.png';


// some variables

// var gap = 85;
// var constant;

// var bX = 10;
// var bY = 150;
// var background1X = -680;
// var background2X = -1960;

var background1X = 0;
var background2X = 1280;
var ballIndex = 1;

// var gravity = 1.5;

// var score = 0;

// audio files

// var fly = new Audio();
// var scor = new Audio();

// fly.src = 'assets/fly.mp3';
// scor.src = 'assets/score.mp3';

// on key down

// document.addEventListener("keydown",moveUp);

// function moveUp(){
//     bY -= 25;
//     fly.play();
// }

// pipe coordinates

// var pipe = [];

// pipe[0] = {
//     x : cvs.width,
//     y : 0
// }; 

var ballX=200;
var bally=523;

// draw images

function drawBG1(){
    ctx.drawImage(background1,background1X,0); 
    background1X--;
}
function drawBG2(){
    ctx.drawImage(background2,background2X,0); 
    background2X--;
}

function drawBall(index){
    // switch(index){
    //     case 1: ctx.drawImage(man1,300,400);break;
    //     case 20: ctx.drawImage(man2,300,400);break;
    //     case 30: ctx.drawImage(man3,300,400);
    //             personIndex=1;break; 
    //     default: personIndex=1;break;
    // }
    // ctx.drawImage(man1,200,350);

    if(index>1 && index<10){
        ctx.drawImage(ball1,ballX,bally);
    }
    else if(index>=10 && index<20){
        ctx.drawImage(ball2,ballX,bally);
    }
    else if(index>=20 && index<30){
        ctx.drawImage(ball3,ballX,bally);
    }
    else if(index>=30 && index<40){
        ctx.drawImage(ball4,ballX,bally);
    }
    else if(index>=40 && index<50){
        ctx.drawImage(ball5,ballX,bally);
    }
    else{
        ctx.drawImage(ball6,ballX,bally);
    }
    
}


function draw(){


    
    drawBG1();
    drawBG2();
    drawBall(ballIndex);
    ballIndex++;
    if(ballIndex > 60){
        ballIndex=1;
    }

    if(background1X < -1280){
        background1X = 1280;
    }
    if(background2X < -1280){
        background2X = 1280;
    }



    // if((bgX/10) == 0)
    // {
    //     bgX++;
    // }
    // else{
        
    // }
    // console.log("bgx is : "+bgX);
    // if(bgX <1){
    //     bgX++;
    //     ctx.drawImage(bg,bgX,0);
    // }
    // if(bgX >= 1){
    //     bgX2++;
    //     ctx.drawImage(bg2,bgX2,0);
    // }
    // if(bgX2 == 1){
    //     var bgX = -680;
    // }


    // console.log("function draw");
    
    // for(var i = 0; i < pipe.length; i++){
    //     // bgx++;
    //     console.log("for loop " +i);
    //     // ctx.drawImage(bg,bgX,0);
    //     constant = pipeNorth.height+gap;
    //     ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
    //     ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
             
    //     pipe[i].x--;
        
    //     if( pipe[i].x == 125 ){
    //         pipe.push({
    //             x : cvs.width,
    //             y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
    //         }); 
    //     }

    //     // detect collision
        
    //     if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
    //         // alert("Game Over");
    //         console.log("Game Over. Scrore is : "+score);

    //         // location.reload(); // reload the page
    //         // window.location.href = window.location.href;
    //         // $('canvas').attr("style", "display:none");
    //         // $('app').attr("style", "display:none");
    //         // var oldcanv = document.getElementById('canvas');
    //         // document.removeChild(oldcanv);

    //         // alert("Game Over");
    //         // var canv = document.createElement('canvas');
    //         // canv.id = 'canvas';
    //         // document.body.appendChild(canv);
    //     }
        
    //     if(pipe[i].x == 5){
    //         score++;
    //         scor.play();
    //     }
        
        
    // }

    // ctx.drawImage(fg,0,cvs.height - fg.height);
    
    // ctx.drawImage(bird,bX,bY);
    
    // bY += gravity;
    
    // ctx.fillStyle = "#000";
    // ctx.font = "20px Verdana";
    // ctx.fillText("Score : "+score,10,cvs.height-20);
    
    requestAnimationFrame(draw);
    
}

draw();
