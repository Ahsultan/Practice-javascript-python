//Using class instance as another class' constructor's property

class StationaryBike{
    constructor(position, gears){
        this.position = position;
        this.gears = gears;
    }
}

class TradeMill{
    constructor(position, gears){
        this.position = position;
        this.gears = gears;
    }
}

class Gym{
    constructor(openHours, stationaryBikePos, tradeMilPos){
        this.openHours = openHours;
        this.stationaryBikePos = new StationaryBike(stationaryBikePos, 8);
        this.tradeMilPos = new TradeMill(tradeMilPos, 4);
    }
}


var boxingGym = new Gym('7-22', 'Left Corner', 'Right Corner');
console.log(boxingGym.openHours);
console.log(boxingGym.stationaryBikePos);
console.log(boxingGym.tradeMilPos);
