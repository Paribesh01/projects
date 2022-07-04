const li = document.querySelectorAll("li")
const foods = document.querySelectorAll(".first")

for (let items of li) {
    items.addEventListener("click",function(){

            switch(items.innerText){

                case "Breakfast":
                    check("breakfast");
                    break;
                case "Lunch":
                    check("lunch");
                    break;
                case "Shakes":
                    check("shakes");
                    break;
                case "Dinner":
                    check("dinner");
                    break;
                case "All":
                    for(let food of foods){
                        food.classList.remove("hid")
                    }
                




            }


        })

}

function check(when){
    for (let food of foods){
        if(food.id!=when){
            food.classList.add("hid")
        }else{
            food.classList.remove("hid")
        }
    }
}