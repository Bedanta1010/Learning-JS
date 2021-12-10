console.log('Welcome to Prototype Inheritance Tutorial');

const proto = {
    slogan: function(){
        return 'This Company is the Best';
    },
    changeName: function (newName) {
        this.name = newName;
    }
};

const tut = Object.create(proto);
tut.name = "Tester";
tut.role = "Programmer";
tut.changeName("Tester2");
// console.log(tut);

// Other way to do it
const tut2 = Object.create(proto, {
    name: {value: "TesterSecond", writable: true},   // Here writable: true means you can override it using the changeName func created above.
    role: {value: "Programmer"}
});
tut2.changeName("Tester3");
// console.log(tut2);

function Employee (name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
};
// Slogan
Employee.prototype.slogan = function(){
    return `This Company is the best. By ${this.name}.`;
};

let harry = new Employee('Harry', 17800, 81);
console.log(harry);
console.log(harry.slogan());

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);  // This will not call the prototype tho
    this.language = language;
};

// Inheriting the prototype
Programmer.prototype = Object.create(Employee.prototype);
// Manually setting the contructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer('Rohan', 65000, 85, 'JavaScript');
console.log(rohan);
console.log(rohan.slogan());