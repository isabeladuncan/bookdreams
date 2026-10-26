import { Book, BookGenre } from '../models/Book';

export class BookCatalog {
  private readonly books: Book[];

  constructor() {
    this.books = [
      new Book(
        'midnight-harbor',
        'Midnight Harbor',
        'J. L. Sloane',
        24.99,
        'Fantasy',
        'MH',
        'A bold fantasy filled with sea magic, lost kingdoms, and a reluctant hero.',
        true,
        'Hardcover'
      ),
      new Book(
        'the-quiet-vow',
        'The Quiet Vow',
        'Elena Hart',
        19.5,
        'Romance',
        'QV',
        'A tender romance about second chances, family secrets, and finding home.',
        true,
        'Paperback'
      ),
      new Book(
        'the-ink-room',
        'The Ink Room',
        'Nora Wren',
        28.0,
        'Mystery',
        'IR',
        'A labyrinth of clues, old letters, and a city that refuses to forget.',
        true,
        'Hardcover'
      ),
      new Book(
        'galaxy-crossing',
        'Galaxy Crossing',
        'A. Reed Pike',
        26.75,
        'Sci-Fi',
        'GC',
        'A thrilling expedition across a fractured galaxy where every star hides a story.',
        false,
        'Hardcover'
      ),
      new Book(
        'eternity-library',
        'Eternity Library',
        'M. L. Givens',
        22.0,
        'Classics',
        'EL',
        'A reflective classic about memory, legacy, and the stories that shape us.',
        false,
        'Hardcover'
      ),
      new Book(
        'ember-rose',
        'Ember Rose',
        'Rina Voss',
        21.25,
        'Fantasy',
        'ER',
        'A magical journey through a kingdom divided by prophecy and fire.',
        false,
        'Paperback'
      ),
      new Book(
        'starlit-letters',
        'Starlit Letters',
        'H. D. Morley',
        18.99,
        'Romance',
        'SL',
        'A warm and whimsical story of love written across long-distance nights.',
        false,
        'Paperback'
      ),
      new Book(
        'glass-beneath-snow',
        'Glass Beneath Snow',
        'D. M. Frost',
        27.0,
        'Mystery',
        'GS',
        'An atmospheric mystery where an abandoned manor holds the final answer.',
        false,
        'Hardcover'
      )
    ];
  }

  getAllBooks(): Book[] {
    return [...this.books];
  }

  getFeaturedBooks(): Book[] {
    return this.books.filter((book) => book.featured);
  }

  getById(id: string): Book | undefined {
    return this.books.find((book) => book.id === id);
  }

  getByGenre(genre: BookGenre): Book[] {
    return this.books.filter((book) => book.genre === genre);
  }
}

export const bookCatalog = new BookCatalog();
