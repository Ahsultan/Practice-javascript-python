class Person{
    constructor(firstName){
        //this.firstName = 'Sultan ';
        this.firstName = firstName;
    }

    greet(){
        console.log(`${this.firstName} says Hello!`);
    }
}

const Sufian = new Person('sufian');
Sufian.greet();
const sultan = new Person('Sultan');
sultan.greet();
//Person.greet();