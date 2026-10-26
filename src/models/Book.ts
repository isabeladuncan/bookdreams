export type BookGenre = 'Fantasy' | 'Romance' | 'Mystery' | 'Sci-Fi' | 'Classics';

export class Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public price: number,
    public genre: BookGenre,
    public coverText: string,
    public description: string,
    public featured: boolean = false,
    public format: string = 'Hardcover'
  ) {}

  getPriceLabel(): string {
    return `$${this.price.toFixed(2)}`;
  }
}
