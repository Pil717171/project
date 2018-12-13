var widthBig = document.querySelector(".calendar-mixin").offsetWidth;
var widthSlide = document.querySelector(".calendar-slider_races").offsetWidth;
var currentPosition = 0;
var buttonLeft = document.querySelector(".calendar-buttons_left")
var buttonRight = document.querySelector(".calendar-buttons_right")


console.log(widthBig)
console.log(widthSlide.offsetLeft)

buttonLeft.onclick = sliderLeft;
buttonRight.onclick = sliderRight;

function sliderLeft () {
    currentPosition -=widthSlide;
    console.log(currentPosition)
}

function sliderRight () {
    currentPosition +=widthSlide;
    console.log(currentPosition)
}

// document.querySelectorAll('.calendar-slider').forEach(function (element) {
//     var slideSize = element.clientWidth,
//         currentPosition = 0,
//         buttonLeft = document.querySelector('.calendar-buttons_left'),
//         buttonRight = document.querySelector('.calendar-buttons_right');

//         buttonLeft.onclick = sliderLeft;
//         buttonRight.onclick = sliderRight;

//         function sliderLeft () {
//             currentPosition -= slideSize;
//             if (currentPosition >= element.scrollWidth) {
//             currentPosition = element.scrollWidth - 2*slideSize;
//             }
//             element.scroll({
//                 left: currentPosition,
//                 behavior: 'smooth'
//               });
//         };

//         function sliderRight () {
//             currentPosition += slideSize;
//             if (currentPosition < 0 ) {
//                 currentPosition = slideSize
//             }
//             element.scroll({
//                 left: currentPosition,
//                 behavior: 'smooth'
//             });
//         }
// });