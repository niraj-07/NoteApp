let addNote=document.getElementById("create");
let inputField = document.getElementById("input-field");
let noteContainer =document.getElementById("box-grid");

addNote.addEventListener('click',function(){
    var note = document.createElement('div');
    note.className = 'box';
    note.innerText = inputField.value;
    noteContainer.appendChild(note);
})