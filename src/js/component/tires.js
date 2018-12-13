
(function () {
    document.querySelectorAll(".last_word").forEach(function (word) {
        var color = word.getAttribute("value")
        word.style.color = color
        if (color == "white") {
            word.style.color = "grey"
        }
        if (color == "blue") {
            word.style.color = "#6a9ee8"
        }
    })
})();

(function(){
window.onmouseover = function coordinate () {
        document.querySelectorAll(".tires-images").forEach(function (images) {
            var coordImg = images.getBoundingClientRect()
            if (coordImg.y < document.documentElement.clientHeight) {
                drive2(images);
                document.querySelectorAll(".tires-images_tire_wheel").forEach(function (wheel) {
                    var coord2 = wheel.getBoundingClientRect()
                    if (coord2.y < document.documentElement.clientHeight) {
                        drive(wheel);
                    }
                })    
            }
        })
    };
  
    function drive (element) {
        element.classList.add("tires-images_tire_wheel--rotate")   
        console.log("drive") 
    };
    
    function drive2 (element) {
        element.classList.add("tires-images--drive")
        console.log("drive2") 
    };
})();

(function(){
    document.querySelectorAll(".tires").forEach(function (tires) {
        tires.onmouseover = function coordinate () {
             document.querySelectorAll(".tires_revers-images").forEach(function (images) {
                var coordImg = images.getBoundingClientRect()
                if (coordImg.y < document.documentElement.clientHeight) {
                    drive2(images);
                    document.querySelectorAll(".tires_revers-images_tire_wheel").forEach(function (wheel) {
                        var coord2 = wheel.getBoundingClientRect()
                        if (coord2.y < document.documentElement.clientHeight) {
                            drive(wheel);
                        }
                    })    
                }
            })
        };
      
        function drive (element) {
            element.classList.add("tires_revers-images_tire_wheel--rotate")   
            console.log("drive") 
        };
        
        function drive2 (element) {
            element.classList.add("tires_revers-images--drive")
            console.log("drive2") 
        };
    })    
})();