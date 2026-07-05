//====================while-loop==========================
let element=0//intialize must be before the loop
while (element<=10) { // condition must be here
  console.log(element);
  element= element+1//this is the place where we write the termination in while
}

//while loop in the array

const myarr = ["Suraj", "Anu", "Gouri", "Kartik"];
let k=0

while (k<myarr.length) {
  console.log(myarr[k]);
  k= k+1
}


//======================do-while=============================
// in this the output has to come, the loop give one output at any cost
// decrease the given value of name less than 17 loop will work if greater than that the loop gives you output one time 
let name=99
do {
  console.log(name)
  name++
} while (name<17);