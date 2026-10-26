import { Book } from '../models/Book';

export type PurchaseMode = 'book' | 'mystery';

export class CheckoutService {
  constructor(
    private selectedBook?: Book,
    private selectedGenre?: string,
    private mode: PurchaseMode = 'book'
  ) {}

  setSelectedBook(book?: Book): void {
    this.selectedBook = book;
  }

  setSelectedGenre(genre?: string): void {
    this.selectedGenre = genre;
  }

  setMode(mode: PurchaseMode): void {
    this.mode = mode;
  }

  getMode(): PurchaseMode {
    return this.mode;
  }

  getSelectedBook(): Book | undefined {
    return this.selectedBook;
  }

  getSelectedGenre(): string | undefined {
    return this.selectedGenre;
  }

  getMysteryRecommendation(books: Book[]): Book | undefined {
    if (!this.selectedGenre) {
      return books[0];
    }

    return books.find((book) => book.genre === this.selectedGenre) ?? books[0];
  }

  getTotalPrice(book: Book): number {
    const shipping = 6.5;
    const tax = Number((book.price * 0.08).toFixed(2));
    return Number((book.price + shipping + tax).toFixed(2));
  }
}

export const checkoutService = new CheckoutService();
