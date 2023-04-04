abstract class Vehicle {
    private make: string;
    private model: string;
    private year: string;
    private rented: boolean;
    constructor(make: string, model: string, year: string, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    public get Make(): string {
        return this.make
    }
    public get Model(): string {
        return this.model
    }
    public get Year(): string {
        return this.year
    }
    public get Rented(): boolean {
        return this.rented
    }
    public set Make(make: string) {
        this.make = make;
    }
    public set Model(model: string) {
        this.model = model;
    }
    public set Year(year: string) {
        this.year = year;
    }
    public set Rented(rented: boolean) {
        this.rented = rented;
    }
    abstract rentalRate(): number;
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
            this.Rented=false;
            console.log("Vehical " + this.Make + "-" + this.Model + " return successfully...");
        }
        else {
            console.log("Vehical " + this.Make + "-" + this.Model + " is not not rented...");
        }
    }

}
class Car extends Vehicle {
    public constructor(make: string, model: string, year: string, rented: boolean) {
        super(make, model, year, rented)
    }
    rentalRate(): number {
        return 2000;
    }
}
class Truck extends Vehicle {
    public constructor(make: string, model: string, year: string, rented: boolean) {
        super(make, model, year, rented)
    }
    rentalRate(): number {
        return 10000;
    }
}
class Motercycle extends Vehicle {
    public constructor(make: string, model: string, year: string, rented: boolean) {
        super(make, model, year, rented)
    }
    rentalRate(): number {
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