// Q3: Library Management System (run: node q3_library.js)
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false;
  }
  issueBook() {
    if (this.isIssued) return `"${this.title}" is already issued.`;
    this.isIssued = true;
    return `"${this.title}" issued successfully.`;
  }
  returnBook() {
    if (!this.isIssued) return `"${this.title}" was not issued.`;
    this.isIssued = false;
    return `"${this.title}" returned successfully.`;
  }
}

const books = [
  new Book("Clean Code", "Robert C. Martin", "9780132350884"),
  new Book("You Don't Know JS", "Kyle Simpson", "9781491904244"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "9781593279509"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "9780135957059"),
];

function showAvailableBooks() {
  console.log("\nAvailable books:");
  books.filter((b) => !b.isIssued)
       .forEach((b) => console.log(`- ${b.title} by ${b.author} (ISBN: ${b.isbn})`));
}

// Find a book by ISBN and issue it
function issueByISBN(isbn) {
  const book = books.find((b) => b.isbn === isbn.trim());
  console.log(book ? book.issueBook() : `No book found with ISBN ${isbn}`);
}

showAvailableBooks();
issueByISBN("9781491904244");
issueByISBN("9781491904244"); // already issued
issueByISBN("0000000000");    // not found
showAvailableBooks();
console.log(books[1].returnBook());

// Optional: interactive ISBN prompt when run in a terminal
if (typeof process !== "undefined" && process.stdin.isTTY) {
  const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
  rl.question("\nEnter ISBN to issue: ", (isbn) => {
    issueByISBN(isbn);
    showAvailableBooks();
    rl.close();
  });
}
