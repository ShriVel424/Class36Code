class Game {

    constructor(){

    }

    getState(){
        var stateref = database.ref("gamestate");
        stateref.on("value",function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref('/').update({
            gamestate: state
        })
    }

    start(){
        if(gameState===0){
            form = new Form();
            form.display();
            player = new Player();
            player.getpcount();
        }
    }
}