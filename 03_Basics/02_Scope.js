if(true){  // id we write the true inside it then it is sure and final the condition will run 
    let a = 10;
    const b = 20;
    var c = 30;
}

// the curly braces {} are the known as the scope inside the {} we call block scope and outside we call global scope

// console.log(a); like we define it under the block scope so it would throw error a is not defined
// console.log(b); this also has the same problem 
console.log(c);   // but in this we can acces the block scope outside the block


// if we define the a and b outside the block then we can acces them 
// var not folow block scope so we don't use var
// javascript running on node and the javascript eunning on th ebrowser they both have diffrent global scope

// Scope level and hoisting

// in js the children can access the parent varibles but parent can't access the child varible

function parent(){
    const variable1=100

    function child (){
        const variable2=200
        console.log(variable1+variable2);
    }
    // console.log(variable2);  // give error because its the child varible in the parent
}

parent()

// hoisting+++++++++++++++++++++++++++++++++++++++++++++++++++

const newvar=function(){      // when we try to hoisting in this type of declare function then it 
                              //refuse the way we declare known as the expresion
    console.log("expression");
}
newvar()



newvar2()                     // in hoisting we can call the function before making the function 
function newvar2(){
    console.log(`hoisting`)
}