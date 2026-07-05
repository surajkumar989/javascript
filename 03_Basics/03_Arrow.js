const obj = {
  username: "Suraj",
  age: 22,
  welcomemessage: function getobj() {
    console.log(`${this.username} is ${this.age} old`);
    console.log(this);
  },
};

obj.welcomemessage();
obj.username = "Rajeev";
obj.welcomemessage();
console.log(this);
console.log(obj);

// `this` in browser is diffrent and different in the node environment

function anyfun() {
  console.log(this);
}

anyfun();
//+++++++++++++++Arrow function+++++++++++

// explicit
const var1 = (num1, num2) => { //in this arrow function we don't need to write name but if       we                                  //using curlybracs then need to use return
  return num1 + num2;                   
};

console.log(var1(2, 4));
  

//implicit 
const var2 = (num1, num2) => num1 + num2; // if no curly braces then dont use curly bracec

console.log(var2(2, 4));