var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * purchase1.stateTax;
        console.log('Total Price:', calculation);
    }
}

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * purchase1.stateTax;
        console.log('Total Price:', calculation);
    }
}

purchase1.totalPrice();
purchase2.totalPrice();