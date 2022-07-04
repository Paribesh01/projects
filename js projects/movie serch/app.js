const form = document.getElementById("searchForm")

form.addEventListener("submit",async function(e){
    e.preventDefault(); 
    const searchTerm = form.elements.query.value
    const config = {params:{q:searchTerm}}
    const res = await axios.get( `https://api.tvmaze.com/search/shows?q=`,config)
    makeImages(res.data)
    form.elements.query.value= ""
})

const makeImages = (shows)=>{
    const imgs = document.querySelectorAll("img")
    for(let img of imgs){
        img.remove()
    }
    for(let result of shows){
       if(result.show.image){
        const img = document.createElement("img")
        img.src = result.show.image.medium
        document.body.append(img)
        
       }
    }

}