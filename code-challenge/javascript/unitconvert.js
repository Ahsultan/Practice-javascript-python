const oneLiterMl = 1000;
const oneLiterTeaSpoon = 202.884;
const oneLiterGallons = 0.2641720524;

class UnitConverter{
    constructor(convertFrom, convertTo, value){
        this.convertFrom = convertFrom;
        this.convertTo = convertTo;
        this.value = value;
    }

    getLiter(convertFrom, value){
        if(convertFrom === "L"){
            return value;
        }
        if(convertFrom === "ml"){
            return value / oneLiterMl;
        }
        if(convertFrom === "g"){
            return value / oneLiterGallons;
        }
        if(convertFrom === "t"){
            return value / oneLiterTeaSpoon;
        }
    }

    solution(unitFrom, unitTo, unitValue){

        this.convertFrom = unitFrom;
        this.convertTo = unitTo;
        this.value = unitValue;

        if(this.convertTo === "L"){
            return this.getLiter(this.convertFrom, this.value);
        }

        if(this.convertTo === "t"){
            return this.getLiter(this.convertFrom, this.value) * oneLiterTeaSpoon;
        }

        if(this.convertTo === "g"){
            return this.getLiter(this.convertFrom, this.value) * oneLiterGallons;
        }

        if(this.convertTo === "ml"){
            return this.getLiter(this.convertFrom, this.value) * oneLiterMl;
        }
    }

}

// const convertFrom = readline('Which unit you would like to convert from? ');
// const convertTo= readline('Which unit you would like to convert to? ');
// const value = readline('Enter your value : ');

var getUnit = new UnitConverter();
var literToTeaspoon = getUnit.solution("L", 't', 100);
console.log(`Thanks! ${getUnit.value} ${getUnit.convertFrom} is equal to ${literToTeaspoon} ${getUnit.convertTo}`);
// var literToml = getUnit.solution("L", 'ml', 5);
// var literToGallons = getUnit.solution("L", 'g', 4);

// var mlToTeaspoon = getUnit.solution("L", 't', 1000);
// var mlToLiters = getUnit.solution("L", 'ml', 5000);
// var mlToGallons = getUnit.solution("L", 'g', 4);

// const unitVarname = [literToTeaspoon, literToml, literToGallons, mlToTeaspoon, mlToLiters, mlToGallons]

// unitVarname.forEach(result => {
//     console.log(`Thanks! ${getUnit.value} ${getUnit.convertFrom} is equal to ${result} ${getUnit.convertTo}`);
// });
