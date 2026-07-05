// Array is a data structure that can hold multiple values at once. It is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

const myArr = [0, 1, 2, 3, 4, 5];
const myArrString = ["Apple", "Orange", 23]; //Simple way to remember

// C++ array → strict type
// JavaScript array → flexible type, loose type or dynamically typed
// That’s why you can keep int and string together in one JS array.

// console.log(myArrString);

// Accessing elements in an array
// console.log(myArr[2])
// console.log(myArr[5])

// Array Methods.........

myArr.push(9); // Add value in the last
// console.log(myArr);
myArr.pop(); // Delete value in the last 
// console.log(myArr);

myArr.unshift(7) // add value in the starting
// console.log(myArr)
myArr.shift()
// console.log(myArr)

// const myNew=myArr.join()
// // console.log(myNew)

// console.log(myArr.indexOf(3))
// console.log(myArr.length)
// console.log(myArrString[2]);
// console.log(myArrString.length);
// console.log(typeof myNew)

//Array slice() and splice().............

console.log("A: " + myArr)
myArr1=myArr.slice(2, 4)
console.log("B: " + myArr1);

MyArr2=myArr.splice(2, 4)
console.log("C: "+MyArr2)
console.log(myArr)

// Done 