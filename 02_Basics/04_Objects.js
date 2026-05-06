const user = {};

user.id = 1;
user.name = "Suraj";

console.log(user);

const regularuser = {
  id: 1,
   username: {
    firstname: "suraj",
    lastname: "kumar",
  },
};
console.log(Object.keys(regularuser.username));
console.log(Object.values(regularuser.username));

console.log(regularuser.username.firstname);

// this told us how can we write the object or initialize the object in different way and access them also thats it and further we use some method here

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { d: 4, e: 5, f: 6 };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4={...obj1,...obj2,}
console.log(obj4);

const obj5=Object.assign({},obj1,obj2)
console.log(obj5);

const objarr=[
    {
        id:1,
        name:"Suraj"
    }
,
     {
        id:2,
        name:"Sudheer"
    }
,
     {
        id:3,
        name:"Vikas"
    }
]


console.log(objarr[0].name);


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

