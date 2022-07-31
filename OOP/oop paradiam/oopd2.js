//oop 2
var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase2.totalPrice();