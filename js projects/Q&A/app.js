const i  =document.querySelectorAll("i")
const ans = document.querySelectorAll(".ans")

for (let is of i){
    is.addEventListener("click",function(){

        let parent = is.parentElement
        parent = parent.parentElement
        parent = parent.parentElement
        parent = parent.parentElement
        parent = parent.children[1]
        parent.classList.toggle("ans-dis")
    })
}