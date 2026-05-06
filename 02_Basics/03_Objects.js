const state=Symbol("id")

const myobj={
    name: "Suraj",
    age:18,
    [state]:"Himachal"
}


// console.log(myobj.name)
// console.log(myobj.age);
// console.log(typeof myobj[state]);
// console.log(typeof state);

// Object.freeze(myobj)

myobj.hello=function(){
    console.log("Hello User")
}

myobj.helloUser=function(){
    console.log(`Hello User, ${this.name}`)
    console.log(`Your age is ${this.age}`)
}

console.log(myobj.helloUser())