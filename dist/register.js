const register1 = document.getElementById("register1");
const register2 = document.getElementById("register2");
const btn2register2 = document.getElementById("btn2register2");


btn2register2.addEventListener("click", () => {
    console.log("test");
    register1.classList.toggle("hidden");
    register2.classList.toggle("hidden");
});