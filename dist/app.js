"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getRented() {
        return this.rented;
    }
    setMake(make) {
        this.make = make;
    }
    setModel(model) {
        this.model = model;
    }
    setYear(year) {
        this.year = year;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.getRented()) {
            console.log("Vehical " + this.getMake() + "-" + this.getModel() + " not avaliable...");
        }
        else {
            this.setRented(true);
            console.log("Vehical " + this.getMake() + "-" + this.getModel() + " avaliable... Rented Successfully!!");
        }
    }
    return() {
        if (this.getRented()) {
            this.setRented(false);
            console.log("Vehical " + this.getMake() + "-" + this.getModel() + " return successfully...");
        }
        else {
            console.log("Vehical " + this.getMake() + "-" + this.getModel() + " is not not rented...");
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented) {
        super(make, model, year, rented);
    }
    rentalRate() {
        return 2000;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented) {
        super(make, model, year, rented);
    }
    rentalRate() {
        return 10000;
    }
}
class Motercycle extends Vehicle {
    constructor(make, model, year, rented) {
        super(make, model, year, rented);
    }
    rentalRate() {
        return 1000;
    }
}
// test data unit tests
const motercycle = new Motercycle("unique", "2022", "2022", false);
motercycle.rent();
motercycle.return();
console.log("Rental Rate : " + motercycle.rentalRate());
const car = new Car("Aulto", "VXR", "2015", false);
car.rent();
car.return();
console.log("Rental Rate : " + car.rentalRate());
const truck = new Truck("Mazda", "hybird", "2005", false);
truck.rent();
truck.return();
console.log("Rental Rate : " + truck.rentalRate());
//# sourceMappingURL=app.js.map