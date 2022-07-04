const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const number = document.querySelector("span")
let counter = 0

increase.addEventListener("click",function(){
    counter++
    number.innerText=counter
    colordefiner()
})
decrease.addEventListener("click",function(){
    counter--
    number.innerText=counter
    colordefiner()
})
reset.addEventListener("click",function(){
    counter=0
    number.innerText=counter
    colordefiner()
})

function colordefiner(){
    if(counter>0){
        number.style.color="green"
    }else if(counter==0){
        number.style.color="black"
    }else{
        number.style.color="red"
    }
}

