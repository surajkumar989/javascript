//if

if(true){
  console.log(`suraj`)
}
if(false){
  console.log(`kumar`)
}

// the basic principle here is that if the if else condition is true then it gonna perform the task other wise it dont execute the if condition

const myage=true

if(myage){
    console.log(`eligible`)
}

//now some common operators we used in the condition to check 

// <, >, <=, >=, ==, !=, ===, !==

const Height=183

if(Height===200){
    console.log("Equal to200")
}else{
    console.log("Less Than 200")
}

//scope of the if matters

const jalebi ="HOT"
if(jalebi==="HOT"){
    const mix="Dahi"
    console.log(`jalebi with ${mix}`)
}
// console.log(mix) mix is scope blocked



// the way we dont have to write the code i.e implicit type

if(jalebi==="HOT")console.log("successfull"),
console.log("big");

// this way we dont write the code







// nested if else
const weight=101
if(weight<50){
    console.log("less than 50"); 
}else if(weight==100){
    console.log("Equal to 100");
}else{
    console.log("Greatetr than 100")
    if(weight<125){
        console.log("less than 125");
        
    }
}

// now how we use if else in company or we can say that how we use 'or' and 'and' in this 

const Googlelogin=true
const emaillogin=false
const name =true
const phone=true

if(name && phone){
    console.log("yes")
}
if(Googlelogin || emaillogin){
    console.log("ok");
}

// thats it itna hi hai if else