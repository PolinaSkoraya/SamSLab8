if (localStorage.getItem('bgcolor')) {
    let currentColor = localStorage.getItem('bgcolor');
    document.body.style.backgroundColor = currentColor;
}

function getRndColor() {
    let randCol= "";
    let allChar="0123456789ABCDEF";
    for(let i=0; i<6; i++){
        randCol += allChar[Math.floor(Math.random()*16)];


    }
    return '#'+randCol;
}

document.querySelector('#color').addEventListener('click', changeColor);

function changeColor() {
let color = getRndColor();
    if (!localStorage.getItem('bgcolor')) {
        populateStorage();
    } else {
        setStyles();
    }

    function populateStorage() {
        localStorage.setItem('bgcolor', color);
        setStyles();
    }
}
function setStyles() {
    let currentColor = localStorage.getItem('bgcolor');
    localStorage.setItem('bgcolor', color);
    document.body.style.backgroundColor = currentColor;
    // let currentColor = localStorage.getItem('bgcolor');
    // document.getElementById('bgcolor').value = currentColor;
    // document.body.style.backgroundColor = '#' + currentColor;

}
