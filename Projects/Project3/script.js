let count = 0;
const error = document.getElementById("error");

document.getElementById("login").addEventListener("click", function () {
  if (count >= 3) {
    return;
  }
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "Suraj" && pass == 12345) {
    console.log("Login Successful");
    error.style.visibility = "visible";
    error.style.color = "Green";
    error.textContent = "Login Successful";
    document.getElementById("login").disabled = true;
    return;
  } else {
    count++;
    error.style.visibility = "visible";
    if (count == 3) {
      document.getElementById("login").disabled = true;
      error.textContent = "Blocked after Three attempts";
    }
  }
});
