let shoes = 100;
let stateTax = 1.2;

function totalPrice(shoes, stateTax){
    return shoes * stateTax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay);