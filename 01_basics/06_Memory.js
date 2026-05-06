// stack memory(primitive) 
let score=33
let run=score
run=44
console.log(run);
console.log(score);  //Every primitive datatype stores in stacks and in stacks when we use previous value comes from copying the value

//Heap memory(non-primitive)
let actor={
    name:"Aamir",
    age:50
}
let superstar= actor
superstar.name="Salman"
console.log(actor.name);
console.log(superstar.name);  //Every non Primitive dataype stores in heap and in heap when we use values it comes with the reference
