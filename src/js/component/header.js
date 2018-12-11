(function () {
    var dropdown = document.querySelector(".header-top_region")

    function dropdownOpen () {
        var dropdownMenu = document.querySelector(".header-top_region_dropdown_menu")
        dropdownMenu.classList.toggle("header-top_region_dropdown_menu--open");
    }
    dropdown.onclick = dropdownOpen
})();

(function (){
    var dropdownTire = document.querySelector(".header-bottom_menu_tires_dropdown");
    var icon = document.querySelector(".header-bottom_menu_tires_icon");
    var dropdownMenuBottom = document.querySelector(".header-bottom_menu_tires");
    
    function dropdownTires () {
        dropdownTire.classList.add("header-bottom_menu_tires_dropdown--open");
        icon.classList.add("header-bottom_menu_tires_icon--rotate"); 
        dropdownMenuBottom.classList.add("header-bottom_menu_tires--shadow");               
    }

    function dropdownTiresClosed () {
        dropdownTire.classList.remove("header-bottom_menu_tires_dropdown--open");
        icon.classList.remove("header-bottom_menu_tires_icon--rotate");
        dropdownMenuBottom.classList.remove("header-bottom_menu_tires--shadow");
    }
    dropdownMenuBottom.onmouseover = dropdownTires;
    dropdownTire.onmouseover = dropdownTires;
    dropdownMenuBottom.onmouseout = dropdownTiresClosed;
    dropdownTire.onmouseout = dropdownTiresClosed;
})()
    
