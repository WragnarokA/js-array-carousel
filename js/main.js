let images = [
    "./img/01.webp",
    "./img/02.webp", 
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];
console.log(images);

let currentImg = 0;

const imagesContainer = document.querySelector(".carousel")

for (let i = 0; i < images.length; i++) {
    const pathImg  = images[i]
    // const img = `<img src="${pathImg}">`;
    // console.log(img);
    // imagesContainer.innerHTML += img;
    const image = document.createElement("img")
    image.src = pathImg
    if (i === 0) {
        image.classList.add("visible");
    }
    imagesContainer.append(image)
}

const slideImg = document.querySelectorAll(".carousel > img")
const btnNex = document.getElementById("nex")
const btnBefore = document.getElementById("before")

btnNex.addEventListener("click", function () {
    slideImg[currentImg].classList.remove("visible");
    currentImg++;

    if (currentImg == slideImg.length) {
        currentImg = 0
    }

    slideImg[currentImg].classList.add("visible");
})
     


btnBefore.addEventListener("click", function () {
    slideImg[currentImg].classList.remove("visible");
    currentImg--;

    if (currentImg < 0) {
        currentImg = 4;
    }

    slideImg[currentImg].classList.add("visible");
    

})



    



    

  
   
    











