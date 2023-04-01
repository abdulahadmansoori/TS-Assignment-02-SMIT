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
    public getMake(): string {
        return this.make
    }
    public getModel(): string {
        return this.model
    }
    public getYear(): string {
        return this.year
    }
    public getRented(): boolean {
        return this.rented
    }
    public setMake(make: string) {
        this.make = make;
    }
    public setModel(model: string) {
        this.model = model;
    }
    public setYear(year: string) {
        this.year = year;
    }
    public setRented(rented: boolean) {
        this.rented = rented;
    }
    abstract rentalRate(): number;
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