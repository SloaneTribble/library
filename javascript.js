
// Extend default storage-objects to handle arrays and objects

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

let key = "library";

currentLibrary = localStorage.getObj(key);

populateGrid();
openForm();

function populateGrid() {
let container = document.querySelector(".books");

    if (currentLibrary.length === 0){container.style.display = "none"; return;}
    for(let i = 0; i < currentLibrary.length; i++){
        let cell = document.createElement("div");
        cell.className += "book";

        let row1 = document.createElement("div");
        row1.id = i + 1;
        row1.innerText = "Title: " + currentLibrary[i].title;
        cell.appendChild(row1);

        let row2 = document.createElement("div");
        row2.id = i + 1;
        row2.innerText = "Author: " + currentLibrary[i].author;
        cell.appendChild(row2);

        let row3 = document.createElement("div");
        row3.id = i + 1;
        row3.innerText = "Pages: " + currentLibrary[i].pages;
        cell.appendChild(row3);

        let row4 = document.createElement("button");
        row4.className += "remove-button";
        row4.innerText = "Remove";
        row4.onclick = function () {
            let index = row1.id - 1;
            currentLibrary.splice(index, 1);
            localStorage.setObj(key, currentLibrary);
            window.location.reload();
        };
        cell.appendChild(row4);

        container.appendChild(cell);
    }
    
}

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


function removeBook(){
    currentLibrary.pop();
    localStorage.setObj(key, currentLibrary);
    window.location.reload();
}

function openForm() {
    document.getElementById("form-container").style.display = "block";
}

function closeForm() {
    document.getElementById("form-container").style.display = "none";
}






