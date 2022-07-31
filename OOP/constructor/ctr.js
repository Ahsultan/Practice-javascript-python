function IceCream(flavour){
    this.flavour = flavour;
    this.meltIt = function() {
        console.log(`The ${this.flavour} Icecream has melted`);
    }
}

var kiwiIceCream = new IceCream('Kiwi');
var appleIceCream = new IceCream('Apple');

kiwiIceCream.meltIt();
appleIceCream.meltIt();

console.log(kiwiIceCream);
console.log(appleIceCream);