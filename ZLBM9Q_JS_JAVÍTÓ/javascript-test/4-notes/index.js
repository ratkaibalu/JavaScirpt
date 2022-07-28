const notesDiv = document.querySelector('#notes');
const noteEditorDiv = document.querySelector('#note-editor');
const titleInput = document.querySelector('#title');
const noteTextarea = document.querySelector('#note');
const colorInput = document.querySelector('#color');

let notes = {
  '1': {
    id: '1',
    title: 'JS retake test ideas',
    note: 'Note editor\nChristmas lights',
    color: '#238643',
  },
  '2': {
    id: '2',
    title: 'Books to read',
    note: 'Book1\nBook2\nBook3',
    color: '#647372',
  },
  '3': {
    id: '3',
    title: 'Movies to watch',
    note: 'The new spiderman movie',
    color: '#9373aa',
  },
};

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    const targetElement = event.target.closest(selector)
    if (this.contains(targetElement)) handler.call(targetElement, event)
  })
}

console.log(notes)
let notes2 = Object.entries(notes);
for (let i = 0; i < notes2.length; i++) {
  console.log(notes2[i][1])
  let li = document.createElement("li");
  li.setAttribute('data-id',notes2[i][1].id)
  li.style.backgroundColor = notes2[i][1].color
  li.innerText = notes2[i][1].title
  notesDiv.appendChild(li)
}


function handleClick() {
  for (const li of document.querySelectorAll("li.selected")) {
    li.classList.remove("selected");
  }
  this.focus()
  this.classList.add("selected")
  noteEditorDiv.hidden = false
  titleInput.value = notes2[parseInt(this.getAttribute('data-id')-1)][1].title
  noteTextarea.value = notes2[parseInt(this.getAttribute('data-id')-1)][1].note
  colorInput.value = notes2[parseInt(this.getAttribute('data-id')-1)][1].color
}
delegate(notesDiv,"click","li", handleClick)