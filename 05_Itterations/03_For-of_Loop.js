//================for-of Loop==========================

//mainly used for the array and the map

// first we see how itrate the array with the help of for-of loop

const myarr=["Suraj","Anu","Gori","Kartik"]

for (const item of myarr) {
    console.log(item);
}

// for of loop in strings

const name="Suraj Kumar"

for (const names of name) {
    console.log(names);
}

// for of loop in map 
// map - map is like a object but has unique values
// first we see what map is then we use for-of loop in the map

const map=new Map
map.set("name","Suraj")
map.set("college", "GHEC")
map.set("name", "Suraj");
// as we know it only take unique values it will not print name again 2nd time
console.log(map);


for (const item of map) {
    console.log(item);
}

//by diffrent way where we give varibale for key and value both and print value. this is how we access the map key and value

for (const [item,key] of map) {
    console.log(item,"-", key);
}

// we cant use for-of-loop in the object


