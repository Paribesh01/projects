const overlay = document.querySelector(".overlay")
const button = document.querySelector("h1")
const cross = document.querySelector(".lines")


button.addEventListener("click",function(){
    
    overlay.classList.add("overlayDisplay")
})
cross.addEventListener("click",function(){
    overlay.classList.remove("overlayDisplay")
})