// Basic syntax of the function
function myName(){
    console.log(`My Name Is Suraj`)
}

myName        // This is the reference of the function, without the refence we just give
             //  the reference   of the function whih is not executable

myName()      // And this is the execution of the function without parentheseis we can't exectute the function 


// Now Parameter and Arguments

function myAge(age){
    console.log(`I Am ${age} Years Old`)
}
myAge(21)

// In given code we do two things in the paranthesis after the function name  we
// write the "age" which we called Parameter,In parameter we write that what we gonna take the input 

// And when i execute the function i give the input in the function so function ececute
// properly "21" that we call the argument
// Parameter and Argument 

// Now we have different types of way to write and execute the functions

// direct console.log in the function

function num0(number){
    console.log(number);
}
     // now we execute the function
num0(22)

// give function as a value in the variable and print the variable

function num1(number){
    const test=number
    console.log(test)
}

      // now we execute the function
num1(33)

//directly we use return to print the value without variable to save the space one thing to remember after return we can't go further like if we write the return the function not execute after that 

function num2(number){
    return(number)
}
const result = num2(22);
console.log(result);

// another way 

function user(username){
    return`here we are ${username}`
}

console.log(user("Suraj"));

// now what we dont give the 

function Last(username) {
  return `here we are ${username}`;
  console.log("The text not print");  // after return the code dont work or unreachable
  
}

console.log(Last());


//now we check the input is right or wrong and few method to check that
// we learn two things here in video like using (!) exclametry sign where we use this to make the things opposite and like if the thing is true it coonverts that into the false and other thiing we know we can compare the value with the undefined that also works in some casses

function loginfunction(firstname="Suraj" , lastname ){ //one more thing we can sset default value in input in the parameter 
    if(firstname===undefined ){
        console.log(`Enter Username`);
        return
    }
    if(!lastname){
        console.log(`Enter lastname`);
    }
    else{
        console.log(`${firstname} ${lastname} just login`)
    }
}

loginfunction()




//+++++++++++++++++++function with ibject and array+++++++++++++++++++++++++++++


function addtocart(value,val0,...number){    // if i add another operator in front of rest operator(...) then some of the value will not come to array like we can decide what has to pass and what not
    return number;
}

console.log(addtocart(1))
console.log(addtocart(1,2,3,4,5));

//object in function

const task ={
    key:1,
    addedtask:"running"
}

function showtask(anytask){
    console.log(anytask.key)
    console.log(anytask.addedtask);
}

showtask(task)
showtask({
    key:2,
    addedtask:"reading"
})

// this are two ways we can use obeject in the function

// array in function

const myarr=[100,200,300,400,500]

function showarr(anyarr){
    console.log(anyarr[1])
    console.log(anyarr);
    
}

showarr(myarr)