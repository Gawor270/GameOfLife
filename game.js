const w = 20;
const h = 10;

let myvar;

function coloryellow(i,j){
    var element = document.getElementById("gamebox");
    var ctx = element.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(w*i,h*j,w,h);
}

function colorwhite(i,j){
    var element = document.getElementById("gamebox");
    var ctx = element.getContext("2d");
    ctx.fillStyle = "rgb(212, 204, 204)";
    ctx.fillRect(w*i,h*j,w,h);
}

function paint(){
    for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            if(grid[i][j] == 1){
                coloryellow(i,j);
            } else {
                colorwhite(i,j);
            } 
        }
    }
}

function randomset(){
     for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            if(Math.random() < 0.4){
                grid[i][j] = 1;
            } else {
                grid[i][j] = 0;
            }
        }
    }
}

function countneigh(i,j){
    var count = 0;
    let moves = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    for(let k=0; k<8; k++){
        let ni = i + moves[k][0];
        let nj = j + moves[k][1];
        if(0 <= ni && ni < 15 && 0 <= nj && nj < 15){
            if(grid[ni][nj] == 1 || grid[ni][nj] == 3 || grid[ni][nj] == -1){
                count++;
            }
        }
    }
    return count;
}

function step(){
    for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            var no_n = countneigh(i,j);
            if(grid[i][j] == 1){
                if(no_n == 2 || no_n == 3){
                    grid[i][j] += 2;
                } else { 
                    grid[i][j] -= 2;
                }
            } else {
                if(no_n == 3){
                    grid[i][j] += 2;
                } else {
                    grid[i][j] -= 2;
                }
            }
        }
    }

    for(let i=0; i<15; i++){
        for(let j=0; j<15; j++){
            if(grid[i][j] > 0){
                grid[i][j] = 1;
            } else {
                grid[i][j] = 0;
            }
        }
    }   
}

function nxtstep(){
    step();
    paint();
}

let grid = [];
for(let i = 0; i<15; i++){
    grid.push([]);
    for(let j=0; j<15; j++){
        grid[i].push(0);
    }
}

