var dropdown = document.querySelector(".header-top_region")

function dropdownOpen () {
    var dropdownMenu = document.querySelector(".header-top_region_dropdown_menu")
    dropdownMenu.classList.toggle("header-top_region_dropdown_menu--open");
}
dropdown.onclick = dropdownOpen
