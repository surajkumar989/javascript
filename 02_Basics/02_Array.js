const myArr=["Apple","Orange","Banana","Jamun"]
const myNew=["Earth", "Saturn", "Jupiter", "Mars"]

// myArr.push(myNew)
// console.log(myArr[4][1])

// concat() → combine arrays

// const myAll=myArr.concat(myNew)
// console.log(myAll)

// spread operator (...)

const my_Arr=[...myArr,...myNew]
console.log(my_Arr)

//  flat();

// const arial=[1,2,3,4,[5,6,7],8,[9,10,[11,12,13]]]
// const real_arial=arial.flat(Infinity)
// console.log(real_arial)


//  Useful Array Methods

// console.log(Array.isArray(myArr))

// // Array.from()

console.log(Array.from("myArr"))


// Array.of()

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
