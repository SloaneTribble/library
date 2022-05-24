
// Extend default storage-objects to handle arrays and objects

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let key = "library";

currentLibrary = localStorage.getObj(key);

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayBooks(){
    let arrayLength = myLibrary.length;
    for (let i = 0; i < arrayLength; i++){
        for (const property in myLibrary[i]){
            console.log(`Book ${i + 1}: ${myLibrary[i][property]}`);
        }
    }
}

function doForm() {

    if(currentLibrary === null){
        currentLibrary = [];
    }
    
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = false;

    let newBook = new Book(title, author, pages, isRead);

    currentLibrary.push(newBook);
    
    localStorage.setObj(key, currentLibrary);
}

