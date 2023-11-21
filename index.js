const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder');

items.forEach(item => {
    item.addEventListener('dragstart', dragstart);
    item.addEventListener('dragend', dragend);
});

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
});

function dragover(e) {
    e.preventDefault();
}

function dragleave(e) {
    e.target.classList.remove('enter');
}

function dragenter(e) {
    e.target.classList.add('enter');
}

function drop(e) {
    e.currentTarget.classList.remove('enter');
    e.currentTarget.append(document.querySelector('.item.hide'));
}

function dragstart(e) {
    setTimeout( () =>  e.target.classList.add('hide'), 0 );

}

function dragend(e) {
    e.target.classList.remove('hide');
}



