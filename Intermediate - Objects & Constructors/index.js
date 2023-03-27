// write an object constructor and instantiate the object

function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

const karl = new Person("Karl", "Male")

// console.log(karl.name, karl.gender);

// prototype

Person.prototype.sayName = function() {
    console.log("sayname", this.name);
}

karl.sayName()