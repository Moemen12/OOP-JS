/*                                      Constructor Function Training's 


function User(name,email,age,showEmail){
  
  this.name=name;
  this.age=age;
  this.email=email;
  this.updateName= function(newName){
     this.name=newName;
  }
  this.showEmail=function(){
         if(showEmail===true){
              return `Email is ${this.email}`;
         }else{
            return `Data is private`;
         }  
  }
}

let user1=new User("Moemen","moemensaade5@gmail.com",21,false);
console.log(user1.name);
user1.updateName("Ahmet");
console.log(user1.name);
console.log(user1.showEmail())


                                                   Constructor Function Built In Constructors


/*
  Constructor Function 80%
  Built In Constructors

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");

// let obj1 = new Object({ a: 1 });
// let obj2 = new Object({ b: 2 });
let obj3 = { c: 3 };

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;

let str1 = new String("Osama");
let str2 = new String("Ahmed");
let str3 = "Mahmoud";


                                                    Prototype Part 1 Intro




function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");

console.log(User.prototype);

// function sayHello() {
//   return 1;
// }
// console.log(sayHello.prototype);

const arr = [1, 2, 3, 4, 5];
console.log(Array.prototype);
console.log(arr.reverse());



                                          Prototype Part 2 Add To Prototype Chain



function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");

console.log(User.prototype);
console.log(user1);

User.prototype.addTitle = function () {
  return `Mr. ${this.name}`;
};

console.log(Object.prototype);

Object.prototype.elzero = "Elzero Web School";

const myObject = { a: 1, b: 2 };
console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.elzero);



                                             Prototype Part 3 Extend Constructors Features




let myString = "Osama";

console.log(String.prototype);

String.prototype.zFill = function (width) {
  let theResult = this;

  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }

  return theResult.toString();
};

console.log("12".zFill(6));
console.log("516".zFill(6));
console.log("3625".zFill(6));
console.log("25145".zFill(6));
console.log("987654".zFill(6));

String.prototype.sayYouLoveMe = function () {
  return `I Love You ${this}`;
};

console.log("Osama".sayYouLoveMe());

                                                 Prototype Part 4 Prototype Chain


/*
  Prototype
  [1] Every Object Has A Prototype
  [2] Prototype Chain Ends With Object.prototype
  [2] In Javascript Function Is Object

function User(name) {
  
    [1] Create Empty Object
    [2] Assign The New Object To this Context
    [3] New Object Created Prototype = Function Prototype
    this = {};
    this.__proto__ = User.__proto__
  
  this.name = name;
  /*
    [4] Return The New Object
    return this
  

  // if (!(this instanceof User)) {
  //   // throw new Error("Must Be Called With New Keyword");
  //   console.log("Error");
  // }

  // ES6
  if (!new.target) {
    // throw new Error("Must Be Called With New Keyword");
    console.log("Error");
  }
}

let user1 = new User("Osama");
let user2 = new User("Ahmed");
console.log(User.prototype);
console.log(user1);

let myArray = [1, 2, 3, 4];


                                                      Class Syntax And Introduction




class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
}

let user1 = new User("Osama", "o@nn.sa");
let user2 = new User("Ahmed");

console.log(user1);
console.log(user2);                                                 


                                                   Class Static Properties And Methods




class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
}

let user1 = new User("Osama", "o@nn.sa");
let user2 = new User("Ahmed");

console.log(user1);
console.log(user2);

                                                      Class Inheritance


class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
  writeMsg() {
    return `Message From Parent Class`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMsg() {
    return `You Are Admin`;
  }
  writeMsg() {
    return `Message From Child Class`;
  }
}

let admin1 = new Admin("Osama", "o@nn.sa");
 

                                                JavaScript Accessors Getters & Setters
    

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  get showInfo() {
    return `Name: ${this.name}, Email" ${this.email}`;
  }
  changeName(newName) {
    this.name = newName;
  }
  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}

let user1 = new User("Osama", "o@nn.sa");

console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

user1.changeName("Mahmoud");
console.log(user1.name);
console.log(user1.showInfo);

user1.changeEmail = "oooo@gmail.com";
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

                                                      Object Meta Data And Descriptor


const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: false,
  enumerable: false,
  configurable: true,
  value: 3,
});

Object.defineProperty(myObject, "c", {
  writable: true,
});

// console.log(delete myObject.c); // Will Not Delete Because configurable is False
myObject.c = 500; // Will Not Change Because writable is False

console.log(myObject);

console.log("#".repeat(10));

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log("#".repeat(10));

console.log(Object.getOwnPropertyNames(myObject));



                                                 Object Define Properties And Training's



const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "a", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 500,
});

Object.defineProperty(myObject, "c", {
  value: 3,
});

myObject.d = 4;

Object.defineProperties(myObject, {
  e: {
    value: 5,
  },
  f: {
    value: 6,
  },
  g: {
    value: 7,
  },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));



*/

