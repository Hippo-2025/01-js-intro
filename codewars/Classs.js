class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
            }

    startt () {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
} 
const myCar = new Car("Mazda", "CX-5", 2024);
myCar.startt();
