// Task 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
};


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "magazine";
    }
};

const magazine = new Magazine("Forbs", 2022, 120);

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(name, releaseDate, pagesCount, state = 100, type = null);
        this.author = author;
        this.type = "book";
    }
};



class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "novel";
    }
};

const book1 = new NovelBook("Mark B.", "Spark of life", 1980, 384);


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "fantastic";
    }
};

const book2 = new FantasticBook("Riter S.", "Darks forest", 2020, 452);

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
        super(author, name, releaseDate, pagesCount, state = 100, type = null);
        this.type = "detective";
    }
};

const book3 = new DetectiveBook("Green T.", "New detective", 1990, 280);

//Task 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(element => element[type] === value);

        if (!book) {
            book = null;
        }

        return book;
    };

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(element => element.name === bookName);

        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }

        return null;
    }
};
