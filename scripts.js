let titles = document.querySelector('#titles')
let authors = document.querySelector('#authors')
let pages = document.querySelector('#pages')
let reads = document.querySelector('#reads')
const libraryStorage = document.querySelector('.article')
const form = document.querySelector('#submit_button')

form.addEventListener('click', inputData)

let myLibrary = [];


function Book(title, author, page, read) {
    this.title = title
    this.author = author
    this.page = page
    this.read = read

}

function addBookToLibrary(title, author, page, read) {
    let bok = new Book(title, author, page, read)
    myLibrary.push(bok)
    cunny()
}

function inputData() {
    if (titles.value === '' || authors.value === '' || pages.value === '') {
        ma = false;
    } else {
        ma = true;
    }
    if (reads.checked && ma === true) {
        coolAid = 'Has read'

    } else if (ma === true) {
        coolAid = 'Has not read'

    } else {
        alert('fill form')
        return
    }
    addBookToLibrary(titles.value, authors.value, pages.value, coolAid)
    document.querySelector('#jesus').reset()
}

function cunny() {


    let uooh = document.querySelectorAll('.book')
    for (let i = 0; i < uooh.length; i++) {
        uooh[i].remove()
    }


    let index = 0;
    let rezero = 0;
    myLibrary.forEach(a => {
        const row = document.createElement('div')
        row.classList.add('book')
        libraryStorage.appendChild(row)
        let destroy = document.createElement('button')
        destroy.innerText = 'Remove book'
        destroy.classList.add('cunny')
        let changeRead = document.createElement('button')
        changeRead.innerText = 'Change read status'
        changeRead.classList.add('change')

        changeRead.dataset.linkedArray = rezero;
        rezero++;
        destroy.dataset.linkedArray = index;
        index++;


        destroy.addEventListener('click', function() {
            let retro = destroy.dataset.linkedArray;
            myLibrary.splice(parseInt(retro), 1)
            row.remove()
            cunny()
        });
        changeRead.addEventListener('click', function() {
            let omph = changeRead.dataset.linkedArray;
            Book.prototype = Object.create(Book.prototype)
            const chang = new Book()
            if (myLibrary[parseInt(omph)].read == 'Has read') {
                chang.read = 'Has not read'
                myLibrary[parseInt(omph)].read = chang.read
            } else {
                chang.read = 'Has read'
                myLibrary[parseInt(omph)].read = chang.read
            }
            cunny()
        });
        for (let key in a) {
            const fill = document.createElement('p')
            fill.textContent = (`${key}: ${a[key]}`);
            row.appendChild(fill)
        }
        row.appendChild(changeRead)
        row.appendChild(destroy)
    })
};