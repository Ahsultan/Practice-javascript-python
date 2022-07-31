class Bird{
    useWings(){
        console.log("Flying!");
    }
}

class Egale extends Bird{
    useWings(){
        super.useWings();
        console.log('Barely Flapping');
    }
}

class Penguin extends Bird{
    useWings(){
        console.log('Diving');
    }
}

var baldEagle = new Egale();
var kingPenguin = new Penguin();

baldEagle.useWings();
kingPenguin.useWings();