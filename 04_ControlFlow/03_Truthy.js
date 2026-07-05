const email = "surajkumar@gmail.com";

if (email) {
  console.log("User Varified");
} else {
  console.log("User not Verified");
}

// here i am giving string the input but not comparing them it just a true value so the code is working if o give there any thing that is true the code will work

// so there come the things we have to know what are the truthy value or what are the falsy value

//falsy value

// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//truthy value

//"0", "false", " ", [], {}, function(){}
// if these value will be your value then check pls because they are true if we declare them in the variables so they are true values

// for example if we take two values from truthy

const exp1 = [];
if (exp1) {
  console.log("true");
}

const exp2 = " ";
if (exp2) {
  console.log("true");
}

// now we see how we check the array and object in the control flow

const arr = [];
if (arr.length === 0) {
    console.log("array check");
}

const obj = {};
if (Object.keys(obj).length === 0) {
    console.log("object check");
}


// logical operator
// ||(or), &&(add), ??(nullish coalescing operator)
//nullish coalescing operator -- this will use to handle two responses basically like if in responce there is null or undefined value came then the specific value will come and assign like below
let val1;
val1=5??10
val1=null??10
val1=undefined??30??50  // first value the operator find it print that
console.log(val1);


// ternary operator
const a =10
const b =20
a===b?console.log("true"):console.log("false");
