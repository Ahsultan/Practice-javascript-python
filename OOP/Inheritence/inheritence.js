var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true,
}

var eagle1 = Object.create(bird);
console.log('Egale1: ', eagle1);
console.log('Eagle1 has Wings: ', eagle1.hasWings);
console.log('Eagle1 Can Fly: ', eagle1.canFly);
console.log('Eagle1 has Feathers: ', eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log('Egale2: ', eagle2);
console.log('Eagle2 has Wings: ', eagle2.hasWings);
console.log('Eagle2 Can Fly: ', eagle2.canFly);
console.log('Eagle2 has Feathers: ', eagle2.hasFeathers);


var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('Penhuin: ', penguin1);
console.log('Penguin has Wings: ', penguin1.hasWings);
console.log('Penguin Can Fly: ', penguin1.canFly);
console.log('Penguin has Feathers: ', penguin1.hasFeathers);