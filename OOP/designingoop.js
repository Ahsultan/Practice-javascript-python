//   Animal
//  /        \
// Cat          Bird
// /  \             \
// HouseCat Tiger      Parrot

class Animal{
    constructor(color = 'Yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        if (energy > 0){
            energy -= 20;
            console.log(this.energy)
        } else if(this.energy <= 0){
            this.sleep()
        }
    }

    sleep(){
        this.energy += 20;
        console.log(this.energy);
    }

    getColor(){
        console.log(this.color);
    }
}

class Cat extends Animal{
    constructor(sound, canJumpHigh, canClimbTrees, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){
        console.log(this.sound);
    }
}

class Bird extends Animal{
    constructor(sound, canFly, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound(){ 
        console.log(this.sound);
    }
}

class HouseCat extends cat{
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }

    makeSound(){
        if(Option){
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}



