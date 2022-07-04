const burger = document.querySelector(".burger")
const ul = document.querySelector("ul")

burger.addEventListener("click",function(){
    ul.classList.toggle("nav-active")
})