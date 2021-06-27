class Player{
    constructor(){

    }

    getpcount(){
        var pref = database.ref("playercount");
        pref.on("value",function(data){
            pcount = data.val();
        })
    }

    updatepcount(count){
        database.ref('/').update({
            playercount: count
        })  
    }

    updatename(name){
        var index = "player"+pcount;
        database.ref(index).set({
            name: name
        })
    }

}