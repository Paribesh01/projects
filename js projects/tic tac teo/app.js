const buttons = document.querySelectorAll("button")
const reset = document.querySelector(".reset")




let but1 = document.getElementById("1")
let but2 = document.getElementById("2")
let but3 = document.getElementById("3")
let but4 = document.getElementById("4")
let but5 = document.getElementById("5")
let but6 = document.getElementById("6")
let but7 = document.getElementById("7")
let but8 = document.getElementById("8")
let but9 = document.getElementById("9")


reset.addEventListener("click", function(){
    but1.innerText = "1"
    but2.innerText = "2"
    but3.innerText = "3"
    but5.innerText = "5"
    but6.innerText = "6"
    but7.innerText = "7"
    but8.innerText = "8"
    but9.innerText = "9"
    but4.innerText = "4"
    buttons.forEach((but)=>{
        but.disabled = false
    })
    document.querySelector("h1").innerText = "Player 1 = X, Player 2 = O "

});

let player1 = "X"
let player2 = "O"
let counter = 1
winner = false

for(let button of buttons){
    button.addEventListener("click",function(){
        
        if(counter%2!=0 && button.innerText!="Reset" && button.innerText != "X" && button.innerText != "O"){
            button.innerText = player1
        }else if (counter%2==0 && button.innerText!="Reset" && button.innerText != "X" && button.innerText != "O" ){
            button.innerText = player2
        }
        counter++
        
        winner = checkwinner();
        if(winner == true){
            buttons.forEach((but)=>{
                but.disabled = true
                reset.disabled = false
            })
            if(counter%2==0){
                document.querySelector("h1").innerText = "Winner is Player1"
            }else{
                document.querySelector("h1").innerText = "Winner is Player2"
            }
            
        }
    })
}



function checkwinner(){
    if(but1.innerText==but2.innerText && but2.innerText==but3.innerText){
        return true
    }else if (but4.innerText==but5.innerText && but5.innerText==but6.innerText){
        return true
    }
    else if (but7.innerText==but8.innerText && but8.innerText==but9.innerText){
        return true
    }
    else if (but1.innerText==but4.innerText && but4.innerText==but7.innerText){
        return true
    }else if (but2.innerText==but5.innerText && but5.innerText==but8.innerText){
        return true
    }else if (but3.innerText==but6.innerText && but6.innerText==but9.innerText){
        return true
    }else if (but3.innerText==but5.innerText && but5.innerText==but7.innerText){
        return true
    }else if (but1.innerText==but5.innerText && but5.innerText==but9.innerText){
        return true
    }
}