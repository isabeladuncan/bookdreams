import type { Book } from '../models/Book';

type BookCardProps = {
  book: Book;
  selected: boolean;
  onSelect: (book: Book) => void;
};

export function BookCard({ book, selected, onSelect }: BookCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(book)}
      className={`group w-full rounded-2xl border p-4 text-left transition duration-200 ${
        selected
          ? 'border-violet-500 bg-violet-50 shadow-soft'
          : 'border-slate-200 bg-white hover:border-violet-300 hover:shadow-soft'
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-lg font-bold text-white shadow-lg">
          {book.coverText}
        </div>
        <span className="rounded-full bg-violet-100 px-2.5 py-1 text-xs font-semibold text-violet-700">
          {book.genre}
        </span>
      </div>

      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-900">{book.title}</h3>
        <span className="text-lg font-bold text-slate-900">{book.getPriceLabel()}</span>
      </div>

      <p className="text-sm text-slate-500">by {book.author}</p>
      <p className="mt-3 line-clamp-3 text-sm text-slate-600">{book.description}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>{book.format}</span>
        <span className="font-medium text-violet-700">{selected ? 'Selected' : 'Choose this book'}</span>
      </div>
    </button>
  );
}
