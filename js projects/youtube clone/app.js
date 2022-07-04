const button = document.querySelector("#handburger")
const newbutton = document.querySelector("#new")

button.addEventListener("click",function(){
    document.querySelector(".toggle").classList.add("back")
    document.querySelector(".over").classList.add("back")
})
newbutton.addEventListener("click",function(){
    document.querySelector(".toggle").classList.remove("back")
    document.querySelector(".over").classList.remove("back")
})