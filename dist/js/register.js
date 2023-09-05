const register1 = document.getElementById("register1");
const register2 = document.getElementById("register2");
const btn2register2 = document.getElementById("btn2register2");
const btnback = document.getElementById("btnback");


btn2register2.addEventListener("click", () => {
    register1.classList.toggle("hidden");
    register2.classList.toggle("hidden");
    btnback.classList.toggle("hidden");
});

btnback.addEventListener("click", () =>{
    register1.classList.toggle("hidden");
    register2.classList.toggle("hidden");
    btnback.classList.toggle("hidden");
})