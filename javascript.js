// NEW BRANCH!!!!


// Extend default storage-objects to handle arrays and objects

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "library";

currentLibrary = localStorage.getObj(key);

populateGrid();

function populateGrid() {
const container = document.querySelector(".books");

    if (currentLibrary.length === 0){container.style.display = "none"; return;}
    for(let i = 0; i < currentLibrary.length; i++){
        const cell = document.createElement("div");
        cell.className += "book";

        const row1 = document.createElement("div");
        row1.id = i + 1;
        row1.innerText = "Title: " + currentLibrary[i].title;
        cell.appendChild(row1);

        const row2 = document.createElement("div");
        row2.id = i + 1;
        row2.innerText = "Author: " + currentLibrary[i].author;
        cell.appendChild(row2);

        const row3 = document.createElement("div");
        row3.id = i + 1;
        row3.innerText = "Pages: " + currentLibrary[i].pages;
        cell.appendChild(row3);

        const row4 = document.createElement("div");
        row4.id = i + 1;
        const readStatus = (currentLibrary[i].isRead === true)? "Yes" : "No";
        row4.innerText = "Read it yet? " + readStatus;
        if(readStatus === "Yes") {
            cell.setAttribute("id", "read");
            cell.style.backgroundImage = "none";
            cell.style.backgroundImage = "linear-gradient(to top right, rgba(0, 0, 0, 0.944), rgba(0, 0, 139, 0.579), lightblue)";
            cell.style.color = "#FFF";
        }
        cell.appendChild(row4);

        const row5 = document.createElement("button");
        row5.setAttribute ("id", "remove-button");
        row5.innerText = "Remove";
        row5.onclick = function () { // Maybe this and the below function should be declared outside of this scope.
            const index = row1.id - 1; // I need to figure out how to reference current object when function is called.
            currentLibrary.splice(index, 1);
            localStorage.setObj(key, currentLibrary);
            window.location.reload();
        };
        cell.appendChild(row5);

        const row6 = document.createElement("button");
        row6.className += "read-button";
        row6.setAttribute("id", "read-button")
        row6.innerText = "Toggle Read Status";
        row6.onclick = function () {
            if(currentLibrary[i].isRead){currentLibrary[i].isRead = false;
            } else {currentLibrary[i].isRead = true;}
            localStorage.setObj(key, currentLibrary);
            window.location.reload();
        }

        cell.appendChild(row6);

        container.appendChild(cell);
    }
    
}

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Function used during development to make sure I was accessing local storage correctly
// function displayBooks(){
//     const arrayLength = myLibrary.length;
//     for (let i = 0; i < arrayLength; i++){
//         for (const property in myLibrary[i]){
//             console.log(`Book ${i + 1}: ${myLibrary[i][property]}`);
//         }
//     }
// }

function doForm() {

    if(currentLibrary === null){
        currentLibrary = [];
    }
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const checkBox = document.querySelector("#is-read");
    const isRead = (checkBox.checked)? true : false;

    const newBook = new Book(title, author, pages, isRead);

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
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
}






