class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  details() {
    return `"${this.title}" was written by ${this.author} in ${this.year}`;
  }
}

class Ebook extends Book {
  constructor(title, year, author, fileSize) {
    super(title, year, author);
    this.fileSize = fileSize;
  }

  details() {
    return `"${this.title}" was written by ${this.author} in ${this.year} with the space of ${this.fileSize}Mb`;
  }
}

class AudioBook extends Book {
  constructor(title, year, author, duration) {
    super(title, year, author);
    this.duration = duration;
  }

  details() {
    return `"${this.title}" by ${this.author} which was published in ${this.year} is Duration: ${this.duration} minutes`;
  }
}

const book = new AudioBook("wimpy kid", "jeff heffley", 1990, 6);
const book2 = new Ebook(
  "something I never told you",
  "shravya Binder",
  1980,
  12
);
