class NoDefaultParameter{
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num2 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }

        calculate(){
            if(this.bool1){
                console.log(this.string1, this.num1+this.num2+this.num3);
                return;
            }
            else{
                return "The Value of bool1 is incorrect";
            }
        }
        
    }

//var fail = new NoDefaultParameter(1,2,3,false);
//console.log(fail.calculate());

var pass = new NoDefaultParameter(1,2,3, 'Total Price', true);
pass.calculate()