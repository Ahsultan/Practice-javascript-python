class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }

    lightStatus(){
        console.log('Lights On?', this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}


class HighSpeedTrain extends Train{
    constructor(color, lightsOn, passenger, speedOn){
        super(color, lightsOn);
        this.passenger = passenger;
        this.speedOn = speedOn;
    }

    toggleHighSpeed(){
        this.speedOn = !this.speedOn;
        console.log('High speed status is: ', this.speedOn);
    }

    toggleLights(){
        super.toggleLights();
        super.lightStatus();
        console.log('Lights are 100% operational.')
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }

}
/*
var train1 = new Train('Red', false);
var train2 = new Train('Blue', true);
console.log(train1);
console.log(train2);
var train3 = new Train('Green', false);
train3.toggleLights();
train3.lightStatus();
train3.getSelf();
train3.getPrototype();
*/
var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);
train5.toggleLights();
train5.lightStatus();
train5.getSelf();
train5.getPrototype();

highSpeed1.toggleLights();
highSpeed1.toggleHighSpeed();
highSpeed1.getSelf();

//highSpeed1.getPrototype();

//console.log(HighSpeedTrain.prototype.__proto__);



