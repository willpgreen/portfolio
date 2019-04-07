function showIcons() {
    icons = this.children;
    for (let i = 0; i < icons.length; i++) {
        // icons[i].style.visibility = 'visible';
        icons[i].setAttribute('class', 'visible');
    }
}   

function hideIcons() {
    icons = this.children;
    for (let i = 0; i < icons.length; i++) {
        icons[i].setAttribute('class', 'pic-icon');
        // icons[i].style.visibility = 'hidden';
    }
}

const pics = document.querySelectorAll('.project-picture');
pics.forEach(pic => pic.addEventListener('mouseover', showIcons));
pics.forEach(pic => pic.addEventListener('mouseleave', hideIcons));