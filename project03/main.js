function imgSlide(imgSrc){
    document.querySelector(".cola").src = imgSrc

}

function changeColors(color){
    const shape = document.querySelector(".shape");
    const button = document.querySelector(".learn-more");
    const cola = document.querySelector("h2.product-header span");
    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    cola.style.color = color;
}