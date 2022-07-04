const colourArray = ["red","#0e9823","blue","rgb(82, 55, 199)","rgb(237, 101, 22)","#1690ed"]
const button  = document.querySelector("button")
let colour = document.querySelector(".colour")


button.addEventListener("click",function(){
    const randomColour = colourArray[Math.floor(Math.random()*colourArray.length)]
    if(document.body.style.backgroundColor == randomColour){
        randomColour = colourArray[Math.floor(Math.random()*colourArray.length)]
        if(document.body.style.backgroundColor == randomColour){
        document.body.style.backgroundColor = randomColour;
        document.body.style.backgroundColor = randomColour;
        }else{
            document.body.style.backgroundColor = randomColour;
        }
    }else{
        document.body.style.backgroundColor = randomColour;
    }
    colour.innerText =`Background Colour :${randomColour}` 
})