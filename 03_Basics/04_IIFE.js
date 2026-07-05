// Immediately Invoked Function Expression (IIFE)

// this use to execute the function as soon the applicaton start
// other reason is that we dont want to polute the function from the global scope so we make the seprate scope for the function by iife

// the syntax is ()() thats it

(function execution(){
    console.log(`DB Connected`)   
})();

// in this we need to end the invoked function also by usong the (;) if we write the two iffe then we need to use semicolumn so another iffe will start 

//we can use arrow function in this also

(() => {
  console.log("lets start");
})();

((name) => {
  console.log(`${name}`);
})("Suraj");



// two types of iife 
// one is named and other is simple that's it