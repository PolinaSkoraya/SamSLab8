window.onload = function () {
    if (localStorage.getItem('bgcolor')) {
        let currentColor = localStorage.getItem('bgcolor');
        document.body.style.backgroundColor = currentColor;
    }
}

// window.addEventListener("storage", function chLocal(e){
//     let currentColor = localStorage.getItem('bgcolor');
//     localStorage.setItem('bgcolor', currentColor);
// });

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
    document.body.style.backgroundColor = color;
    localStorage.setItem('bgcolor', color);
    // if (!localStorage.getItem('bgcolor')) {
    //     populateStorage();
    // } else {
    //     setStyles();
    // }
    //
    // function populateStorage() {
    //     localStorage.setItem('bgcolor', color);
    //     setStyles();
    // }
    // function setStyles() {
    //     let currentColor = localStorage.getItem('bgcolor');
    //     localStorage.setItem('bgcolor', color);
    //     document.body.style.backgroundColor = currentColor;
    // }
}

let elements = document.querySelectorAll('input[type="text"]');

function checkValidity() {};

for (i=0; i<elements.length; i++) {
    (function(element) {
        let id = element.getAttribute('id');
        element.value = sessionStorage.getItem(id);
        element.oninput = function() {
            sessionStorage.setItem(id, element.value);
            checkValidity();
        };
    })(elements[i]);
}

///////////////////
let notesField = document.getElementById('notes');
let addNoteField = document.getElementById('add-note');
let addButton = document.getElementById('add-button');
let textarea = addNoteField.querySelector('textarea');
let notesArr = [];

if (localStorage.getItem('notes')){
    notesArr = JSON.parse(localStorage.getItem('notes'));
}

addButton.addEventListener('click', function(){
    addNewNote(textarea.value);
    textarea.value = '';
});
window.addEventListener('load', loadNotes);

function addNewNote(text){
    save(text);
    createNote(text);
}

function deleteNote(){
    let arr = Array.from(notesField.children);
    let i = arr.indexOf(this.parentElement);
    notesArr.splice(i,1);
    notesField.removeChild(this.parentElement);

    localStorage.setItem('notes', JSON.stringify(notesArr));
}

function save(text) {
    notesArr.push(text);
    localStorage.setItem('notes', JSON.stringify(notesArr));
}

function loadNotes() {
    if (notesArr.length){
        for (let i = 0; i < notesArr.length; i++){
            createNote(notesArr[i]);
        }
    }
}

function createNote(text){
    let div = document.createElement('div');
    let p = document.createElement('p');
    let a = document.createElement('a');

    div.classList.add('note');
    p.innerHTML = text;
    a.href = '#';
    a.innerHTML = 'Удалить';
    a.classList.add('close');

    a.addEventListener('click', deleteNote);

    notesField.appendChild(div);
    div.appendChild(a);
    div.appendChild(p);
}
