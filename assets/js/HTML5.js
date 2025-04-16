// Az elemek, amiket húzni és ejteni akarunk
const draggableElement = document.querySelector('.draggable');
const dropzone = document.querySelector('.dropzone');

// Húzás események
draggableElement.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', event.target.textContent);
});

draggableElement.addEventListener('dragend', () => {
    draggableElement.style.opacity = '1';
});

// Ejtés események a dropzone-ra
dropzone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Alapértelmezett viselkedés letiltása, hogy lehessen ejteni
    dropzone.classList.add('over');
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('over');
});

dropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropzone.classList.remove('over');
    const droppedText = event.dataTransfer.getData('text/plain');
    dropzone.textContent = droppedText;
});
