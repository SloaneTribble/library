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


function store(){ //stores items in the localStorage
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;
    var key = document.getElementById('key').value;

    const car = {
        brand: brand,
        price: price,
    }

    window.localStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
    var key = document.getElementById('retrieveKey').value; //gets key from user
    console.log("retrive records");
    var records = window.localStorage.getItem(key); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

function removeItem(){ //deletes item from localStorage
    var key = document.getElementById('removeKey').value; //gets key from user
    localStorage.removeItem(key) //passes key to the removeItem method
    console.log("remove items");
}

function clearStorage(){ //clears the entire localStorage
    localStorage.clear()
    console.log("clear records");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
    document.getElementById("carForm").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}