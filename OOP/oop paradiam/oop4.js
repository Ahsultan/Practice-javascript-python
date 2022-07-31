class purchase{
    constructor(shoes, stateTax){
        this.shoes = shoes;
        this.stateTax = stateTax;
    }

    totalPrice(){

            var calculation = this.shoes * this.stateTax;
            console.log('Total Price:', calculation);
    }
}

purchase1 = new purchase(100, 1.2);
purchase1.totalPrice();
purchase2 = new purchase(50, 1.2);
purchase2.totalPrice();
purchase3 = new purchase(200, 1.2);
purchase3.totalPrice();

console.log(purchase1 instanceof purchase);