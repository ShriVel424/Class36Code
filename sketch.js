var database;
var game;
var gameState = 0;
var form,player;
var pcount;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
}



