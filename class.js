var Car = /** @class */ (function () {
    function Car(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    Car.prototype.startEngine = function () {
        console.log("".concat(this.brand).concat(this.model, "engine started "));
    };
    return Car;
}());
var car1 = new Car("TOYOTA", "FORUNER", 4500000);
var car2 = new Car("mahindra", "thar", 1800000);
car1.startEngine();
car2.startEngine();
