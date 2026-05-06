
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (color) {
    console.log(color);
    console.log(color.target);
    if (color.target.id === "grey") {
      body.style.backgroundColor = color.target.id;
    }
    if (color.target.id === "white") {
      body.style.backgroundColor = color.target.id;
    }
    if (color.target.id === "blue") {
      body.style.backgroundColor = color.target.id;
    }
    if (color.target.id === "yellow") {
      body.style.backgroundColor = color.target.id;
    }
    if (color.target.id === "green") {
      body.style.backgroundColor = color.target.id;
    }
  });
});
