(function () {
    var dropdown = document.querySelector(".header-top_region")

    function dropdownOpen () {
        var dropdownMenu = document.querySelector(".header-top_region_dropdown_menu")
        dropdownMenu.classList.toggle("header-top_region_dropdown_menu--open");
    }
    dropdown.onclick = dropdownOpen

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

    // var header = document.querySelector(".header");
    // var headerTop = document.querySelector(".header-top");
    // var headerBottom = document.querySelector(".header-bottom")
    
    // // function coord () {
    // //     var coord = headerTop.getBoundingClientRect()
    // //     var height = coord.height
    // //     var scrolling = window.pageYOffset

    // //     if (scrolling > height) {
    // //         header.classList.add("header--none")
    // //     }
    // //     else {
    // //         header.classList.remove("header--none")
    // //     }
    // // }
    // // window.onscroll = coord;
    var dropdownSpan = document.querySelector(".header-top_dropdown_span")
    var dropdownSpanBird = document.querySelector(".header-top_dropdown_span_bird")
    dropdownSpan.onclick = dropdownTopOpen

    function dropdownTopOpen () {
        document.querySelector(".header-top_dropdown_items__closed").classList.toggle("header-top_dropdown_items__open")
        dropdownSpanBird.classList.toggle("header-top_dropdown_span_bird__rotate")
    }

    var dropdownSpanRegion = document.querySelector(".header-top_dropdown_region_span")
    var dropdownSpanRegionBird = document.querySelector(".header-top_dropdown_region_span_bird")
    dropdownSpanRegion.onclick = dropdownTopRegionOpen

    function dropdownTopRegionOpen () {
        document.querySelector(".header-top_dropdown_region__closed").classList.toggle("header-top_dropdown_region__open")
        dropdownSpanRegionBird.classList.toggle("header-top_dropdown_region_span_bird__rotate")
    }

    var dropdownBottom = document.querySelector(".header-bottom_dropdown_span")
    var dropdownBottomBird = document.querySelector(".header-bottom_dropdown_span_bird")
    dropdownBottom.onclick = dropdownBottomOpen

    function dropdownBottomOpen () {
        document.querySelector(".header-bottom_dropdown_items__closed").classList.toggle("header-bottom_dropdown_items__open")
        dropdownBottomBird.classList.toggle("header-bottom_dropdown_span_bird__open")
    }
})();
    
