console.time('myTime');
console.log('ES6 Classes and Inheritance');

class Employee {
    constructor (name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    };

    line() {
        return `I am ${this.name} and I am in a ${this.division} division with experience of ${this.experience} years !`;
    };

    joiningYear() {
        return `I joined in ${2021 - this.experience}`;
    };

    // Static Method
    static add(a, b) {
        return a + b;
    }
};

harry = new Employee('Harry', 12, "Pro");
// console.log(harry);
// console.log(harry.name);
// console.log(harry.line());
// console.log(harry.joiningYear());

// Static Method usage
// console.log(Employee.add(78, 154));

// Inheritance
class Programmer extends Employee {
    constructor (name, experience, division, language, github) {
        // Super function - same as python one
        super(name, experience, division);
        this.language = language;
        this.github = github;
    }

    favLang() {
        if (this.language == 'python'){
            return 'Python';
        } 
        else {
            return 'JavaScript';
        };
    };

    static multiply(a, b) {
        return a * b;
    };
}

rohan = new Programmer('Rohan', 36, 'Rookie', 'Java And JS', 'Rohan123');
console.log(rohan);
console.log(rohan.joiningYear());
console.log(rohan.favLang());
console.log(Programmer.multiply(51, 452));

console.timeEnd('myTime');