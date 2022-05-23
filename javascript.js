let myLibrary = [];

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

let book1 = new Book("The Book", "Bill", 12, false);

addBookToLibrary(book1);

let book2 = new Book("Opening a Box", "Blithe", 133, true);

addBookToLibrary(book2);

let book3 = new Book("Haven't a Clue", "Daryl", 44, true);

addBookToLibrary(book3);

