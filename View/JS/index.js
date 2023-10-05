function toggleDropdown(link) {
    var dropdownMenu = link.nextElementSibling;

    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}
