console.log('Welcome to Object Literals and Constructor Tutorial');

let obj1 = {
    name: "Maruti WagonR",
    topSpeed: 121,
    run: function() {
        console.log('Car is Running');
    }
};

// console.log(obj1);
// obj1.run();

// Initialize Constructor
function generalCar(name, speed) {
    this.name = name;
    this.topSpeed = speed;
    this.run = function(){
        console.log(`${this.name} is running !`);
    };
    this.analyze = function(){
        console.log(`${this.name} is slower by ${300 - this.topSpeed} km/h than Mercedes !`)
    };
}

let car1 = new generalCar('Ferarri', 220);
console.log(car1);
console.log(car1.topSpeed);
car1.run();
car1.analyze();
let car2 = new generalCar('Nissan', 180);
console.log(car1, car2);