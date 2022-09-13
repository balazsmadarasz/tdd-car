const Car = require("./car");

class Store {
    #cars = [];

    register(serialNumber) {
        const car = new Car(serialNumber);
        this.#cars.push(car);
        return car;
    }
}