class Book{
    constructor(title, series, author){
        this.title = title;
        this.series = series;
        this.author = author;
    }

    // Example of an instance method
    getInformation(){
        return `${this.title} by ${this.author}`;
    }
}


const bookDetails1 = new Book( 
    'Programing in Javascript',
    'Javascript web Devolopment',
    'Sultan Ahmed');

console.log(bookDetails1.getInformation());

console.log(bookDetails1 instanceof Book);