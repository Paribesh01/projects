const information = [
    {
        name :"Paribesh Nepal",
        post:"CEO",
        text:"Write short paragraphs and cover one topic per paragraph. Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand."
        ,photo :"paribesh.jpg"
    },
    {
        name :"Ram thapa",
        post:"manager",
        text:" one topic per paragraph.Write short paragraphs and cover Long paragraphs discourage users from even trying to understand your material. Short paragraphs are easier to read and understand."
        ,photo :"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    

]
const img = document.querySelector("img")
const mainname = document.querySelector(".main-name")
const post  = document.querySelector(".post")
const longText = document.querySelector("p")
const buttons = document.querySelectorAll("button")
let counter = 2

for(let button of buttons){
    button.addEventListener("click",function(){
        console.log(button.innerText)
        if(counter %2!=0){
            img.src = information[0].photo
            mainname.innerText = information[0].name
            longText.innerText = information[0].text
            post.innerText = information[0].post
            counter++

        }else{
            img.src = information[1].photo
            mainname.innerText = information[1].name
            longText.innerText = information[1].text
            post.innerText = information[1].post
            counter++
        }
    })
}

