"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    get Make() {
        return this.make;
    }
    get Model() {
        return this.model;
    }
    get Year() {
        return this.year;
    }
    get Rented() {
        return this.rented;
    }
    set Make(make) {
        this.make = make;
    }
    set Model(model) {
        this.model = model;
    }
    set Year(year) {
        this.year = year;
    }
    set Rented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.Rented) {
            console.log("Vehical " + this.Make + "-" + this.Model + " not avaliable...");
        }
        else {
            this.Rented = true;
            console.log("Vehical " + this.Make + "-" + this.Model + " avaliable... Rented Successfully!!");
        }
    }
    return() {
        if (this.Rented) {
            this.Rented = false;
            console.log("Vehical " + this.Make + "-" + this.Model + " return successfully...");
        }
        else {
            console.log("Vehical " + this.Make + "-" + this.Model + " is not not rented...");
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