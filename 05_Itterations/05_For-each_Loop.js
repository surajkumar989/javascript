//=======================for-each loop====================

const myarr = ["DSA", "OS", "TOC", "CAO", "CG"];

myarr.forEach(function(item){  // the normal callback function
    console.log(item);  
})

myarr.forEach(element => {     // the arrow callback function
    console.log(element);
});

// third way the reference way

function print(item){
    console.log(item);   
}

myarr.forEach(print)

// until now we use for reach loop in three ways and the output is always the same 

// now we take this foreach loop to the next level
// there are diffrent parameter a foreach can take
// until now we are giving the one parameter to access the value of the array but we can take index and the whole array as the parameter in the for eaach i.e.

myarr.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// this way we acces the index value and the whole arr in the refence and print them



// now let's go for next step

// now we try to acces the element fromm the array of the object

const ourarr=[
    {
        studentName:"Suraj",
        RollNo:1,
    },
    {
        studentName:"Anu",
        RollNo:2,
    },
    {
        studentName:"Gori",
        RollNo:3,
    }
]

ourarr.forEach((value)=>{
    console.log(value.studentName);
    console.log(value.RollNo);
})