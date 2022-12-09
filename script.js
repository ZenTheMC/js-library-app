// Empty array for library
let myLibrary = [];

// Object Constructor
function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
    // this.info = function() {
    //     return (title + author + ", " + pages + ", " + read);
    //}
}

// Function for adding new book to array
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);    
}

// const theHobbit = new Book("The Hobbit", " by J.R.R Tolkien", "295 pages", "not read yet")
// console.log(theHobbit.info());

// Function for displaying array to cards
function displayBooksOnPage() {
    const books = document.querySelector(".books");

    // Loop over array and display to cards
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para);
        }
    })

    // for (let i = 0; i < myLibrary.length; i++) {
    //     console.log("looping through", myLibrary[i]);
    //     const card = document.createElement("div");
    //     card.classList.add("card");
    //     let arrayToString = JSON.stringify(myLibrary[i], null, 4);
    //     console.log("trying to convert array to string...", arrayToString);
    //     const para = document.createElement("p");
    //     para.innerText = arrayToString;  // Safer to use than innerHTML and it's not injecting HTML
    //                                     // It's just displaying string contents of a variable
    //     // card.textContent = arrayToString;
    //     books.appendChild(card);
    //     card.appendChild(para);
    // }
}

// Calling function and adding data manually till form is built
addBookToLibrary("Hawy Potta", "J.K.(JUST KIDDING)", "42069 Pages", "Injected as a Baby");
addBookToLibrary("My Birthday Week Starts Tomorrow", "iPhone Notes", "Ironically Not 7 Pages, but 11", "Gimme Gimme Soon, I Can't Fall Asleep");
addBookToLibrary("My Anime Story", "Me", "9999 Episodes", "Not Yet Aired");
addBookToLibrary("Sword and Shield", "King", "20 Pages", "Read");
addBookToLibrary("Bow and Arrow", "Hunter", "20 Pages", "Not Read yet");
addBookToLibrary("Skyrim", "Bethesda", "Infinite", "Played");

console.log("End of code array contents", myLibrary);

displayBooksOnPage();