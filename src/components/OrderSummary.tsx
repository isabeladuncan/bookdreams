import type { Book } from '../models/Book';

type OrderSummaryProps = {
  selectedBook: Book;
  genre?: string;
  purchaseMode: 'book' | 'mystery';
  deliveryName: string;
};

export function OrderSummary({ selectedBook, genre, purchaseMode, deliveryName }: OrderSummaryProps) {
  const shipping = 6.5;
  const tax = Number((selectedBook.price * 0.08).toFixed(2));
  const total = Number((selectedBook.price + shipping + tax).toFixed(2));

  return (
    <div className="rounded-3xl border border-slate-200 bg-[#fffaf7] p-5 shadow-soft">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900">Order summary</h3>
        <span className="rounded-full bg-amber-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-700">
          {purchaseMode === 'book' ? 'One book' : 'Mystery box'}
        </span>
      </div>

      <div className="mb-4 flex gap-4 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 font-bold text-white">
          {selectedBook.coverText}
        </div>
        <div className="flex-1">
          <div className="text-base font-semibold text-slate-900">{selectedBook.title}</div>
          <div className="text-sm text-slate-500">by {selectedBook.author}</div>
          <div className="mt-1 text-xs font-medium text-violet-700">{genre ?? selectedBook.genre}</div>
        </div>
      </div>

      <div className="space-y-3 text-sm text-slate-700">
        <div className="flex items-center justify-between">
          <span>Book</span>
          <span>{selectedBook.getPriceLabel()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="my-4 h-px bg-slate-200" />

      <div className="flex items-center justify-between text-base font-semibold text-slate-900">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="mt-5 rounded-2xl bg-slate-900 p-3 text-sm text-slate-200">
        Delivery to: <span className="font-medium text-white">{deliveryName || 'Your address'}</span>
      </div>
    </div>
  );
}
