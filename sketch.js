var ball;
var position , database;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database.ref('BALL').on("value",readposition);
}

function draw(){
    background("white");
    if(position){
    if(keyDown(LEFT_ARROW)){
        WritePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        WritePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        WritePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        WritePosition(0,+1);
    }
    drawSprites();
}
}

function WritePosition(x,y){
    database.ref('BALL').set({
        X:position.X + x,
        Y:position.Y + y
    })
}

function readposition(data){
    position = data.val();
    ball.x = position.X;
    ball.y = position.Y;
}