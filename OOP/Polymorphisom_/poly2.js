class Knock{
    useBell(){
        console.log('Ring, ring.');
    }
}

class Bicycle extends Knock{
    useBell(){
        super.useBell()
        console.log('Get away, Please!');
    }
}

class Door extends Knock{
    useBell(){
        super.useBell()
        console.log('Open the door, Please!');
    }
}

var bicycle = new Bicycle();
var door = new Door();

bicycle.useBell();
door.useBell();