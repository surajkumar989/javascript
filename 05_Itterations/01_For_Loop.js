//====================For Loop========================



for (let i = 1; i <= 5; i++) {  // initialize - conditiion - increment or any other termination
    const j=i
    console.log(j)
}

// now we can add more condition in the loop so like if else in the loop is we want

const myArr=[0,1,2,3,4,5]

for (let i = 0; i < myArr.length; i++) {
    const element = i;
    console.log(element)// if i write this output after the cpndition then firstly if execute and its console.log will print 
    if (element==3) {
        console.log("condition applied succecfully"); 
    }
}

// nested for loop

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} *  ${j}  =  ${i*j}`)
    }
}

// For loop in array

const arr=["Suraj","Anu","Gouri","Kartik"]
// remember array length is 4 and the largest index value is 3
for (let i = 0; i <arr.length; i++) {
    const element = arr[i];
    console.log(element)
}
console.log(arr.length);

// break and continue

// break - this will break the loop immediatly 

for (let index = 0; index < 6; index++) {
    const element = index;
    if (element==4) {
        console.log(`break executed`);
        break;
    }
    console.log(element);
    
}

// continue - it skips the one condition in the loop for eg.

for (let index = 0; index < 8; index++) {
    const element = index;
    if (element==6) {
        console.log(`skip the 5`);
    }

    console.log(element)
    
}