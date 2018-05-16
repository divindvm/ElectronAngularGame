

if( pipe[i].x == 125 ){
    pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
    }); 
}