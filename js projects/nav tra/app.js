const button = document.querySelector("button")
const div = document.querySelector("div")

button.addEventListener("click",()=>{
    document.querySelector('nav').classList.toggle("changeNav")
    div.classList.toggle("changeDiv")
})