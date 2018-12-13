var slider = document.querySelector(".calendar-mixin");
var widthSlide = document.querySelector(".calendar-slider_races").offsetWidth;
var buttonLeft = document.querySelector(".calendar-buttons_left")
var buttonRight = document.querySelector(".calendar-buttons_right")


buttonLeft.onclick = sliderLeft;
buttonRight.onclick = sliderRight;

function sliderLeft () {
    slider.style.transform += "translateX(" + widthSlide  + "px)"
   
}

function sliderRight () {
    slider.style.transform += "translateX(" + -widthSlide  + "px)"
    
}
