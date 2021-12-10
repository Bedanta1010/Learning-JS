console.log('Welcome to Object Prototype Tutorial');

let obj = {
    name: "Harry",
    channel: "CodeWithHarry",
    language: "JavaScript"
};

function smth(gName) {
    this.name = gName;
};

obj2 = new smth('Harry');

console.log(obj);
console.log(obj2);

smth.prototype.getName = function () {
    return this.name;
};
console.log(obj2);
console.log(obj2.getName());

smth.prototype.setName = function (newName){
    this.name = newName;
}
obj2.setName('Shubh');
console.log(obj2);