let selectedImg = document.querySelector(".selected-img")
let divImages = document.querySelectorAll(".images img")

if(localStorage.getItem("style")){
    let styleData = JSON.parse(localStorage.getItem("style"))
    document.body.style.background = styleData.color
    selectedImg.src = styleData.imgSrc
    divImages.forEach(img =>{
        img.src == styleData.imgSrc ?img.classList.add("active"):img.classList.remove("active")
    })
}

divImages.forEach(img =>{
   
    img.addEventListener("click",changeTheme)
    img.addEventListener("click",addToStorage)
   
})
function changeTheme (){
    
    divImages.forEach(img =>{
        img.classList.remove("active")
    })
    selectedImg.src = this.src
    document.body.style.background = this.dataset.color
    this.classList.add("active")
}

function addToStorage (){
   let style = {
    color : this.dataset.color,
    imgSrc :this.src
   }
   localStorage.setItem("style",JSON.stringify(style))
}