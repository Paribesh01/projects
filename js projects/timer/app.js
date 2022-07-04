
var button = document.querySelector("button")


button.addEventListener("click",function(){
var time = document.querySelector(".time").value

document.querySelector(".first").remove();
var countDownDate = new Date(time).getTime();

var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if(days<10){
        document.querySelector(".day").innerHTML = "0"+days 
    }else{
        document.querySelector(".day").innerHTML = days 
    }if(hours<10){
        document.querySelector(".hour").innerHTML = "0"+hours 
    }else{
        document.querySelector(".hour").innerHTML = hours 
    }if(minutes<10){
        document.querySelector(".min").innerHTML ="0"+ minutes 
    }else{
        document.querySelector(".min").innerHTML = minutes 
    }if(seconds<10){
        document.querySelector(".sec").innerHTML ="0"+ seconds  
    }else{
        document.querySelector(".sec").innerHTML = seconds  
    }
   
    
     
    

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);

})


