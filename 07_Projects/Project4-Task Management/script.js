const task = document.getElementById("Task");
const add = document.getElementById("add");
const alltask = document.getElementById("alltask");

const myarr = [];
add.addEventListener("click", function addedtask() {
  if (task.value == "") {
    error.style.visibility = "visible";
    return;
  }
  else{
    myarr.push({
      id:Date.now,
      taskadded:task.value
    })
  }
  task.value = "";
  alltask.innerHTML += `<ul><li>${myarr.taskadded}</li><button id ="delete">Delete</button></ul>`;
})

console.log(myarr);
// add.addEventListener("click", function addedtask() {
//   if (task.value == "") {
//     error.style.visibility = "visible";
//     return;
//   }
//   error.style.visibility = "hidden";

//   alltask.innerHTML += `<ul><li>${myarr.taskadded}</li><button id ="delete">Delete</button></ul>`;
//   task.value = "";
//   console.log(myarr[1].taskadded);
// });
// add.addEventListener("click",function addedtask(){
//     if(task.value==""){
//         error.style.visibility="visible"
//         return
//     }
//     const addthetask=task.value;
//     error.style.visibility = "hidden";
//     alltask.innerHTML += `<ul><li>${addthetask}</li><button id ="delete">Delete</button></ul>`;
//     task.value="";
// });
