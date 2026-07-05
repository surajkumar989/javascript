//====================for in loop =====================
// mainly used for the object use on more places but good if you use this fo the object

const myobj = {
  name: "Suraj",
  college: "GHEC",
  place: "Solan",
};

for (const item in myobj) {
  console.log(item);
  console.log(myobj[item]);
  console.log(`${item}":"${myobj[item]}`); // here we see how we gonna access the key seperatly, and value separtly . first we call the key then value of the object then both at same time.
}

// now lets do the for-in loop in the array

const myarr = ["DSA", "OS", "TOC", "CAO", "CG"];

for (const vall in myarr) {
  console.log(vall); // in array there are their index no. which act like its key thats why it is printing the indexno. in the console
  console.log(myarr[vall]); // now we able to print the value
  console.log(`${myarr[vall]}`);
}


// we are not able to use for in loop in the map
const map = new Map();
map.set("name", "Suraj");
map.set("college", "GHEC");
map.set("name", "Suraj");

for (const key in map) {
    console.log(key);
}

// we study map further