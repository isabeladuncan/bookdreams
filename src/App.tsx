import { useMemo, useState } from 'react';
import { BookCard } from './BookCard';
import { DeliveryForm, type DeliveryFormData } from './DeliveryForm';
import { ModeTabs } from './ModeTabs';
import { OrderSummary } from './OrderSummary';
import { bookCatalog } from '../data/bookCatalog';
import type { BookGenre } from '../models/Book';

const defaultDelivery: DeliveryFormData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
  country: 'United States'
};

export default function App() {
  const [purchaseMode, setPurchaseMode] = useState<'book' | 'mystery'>('book');
  const [selectedBookId, setSelectedBookId] = useState('midnight-harbor');
  const [selectedGenre, setSelectedGenre] = useState<BookGenre>('Fantasy');
  const [delivery, setDelivery] = useState<DeliveryFormData>(defaultDelivery);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const books = useMemo(() => bookCatalog.getAllBooks(), []);
  const featuredBooks = useMemo(() => bookCatalog.getFeaturedBooks(), []);

  const selectedBook = purchaseMode === 'book'
    ? bookCatalog.getById(selectedBookId) ?? featuredBooks[0]
    : bookCatalog.getByGenre(selectedGenre)[0] ?? featuredBooks[0];

  const availableGenres: BookGenre[] = ['Fantasy', 'Romance', 'Mystery', 'Sci-Fi', 'Classics'];

  const updateDeliveryField = (field: keyof DeliveryFormData, value: string) => {
    setDelivery((current) => ({ ...current, [field]: value }));
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f4ecff_0%,#f8fafc_32%,#f8fafc_100%)] text-slate-900">
      <header className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-violet-200 bg-white/80 px-5 py-3 shadow-soft backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-700 via-indigo-600 to-fuchsia-500 font-bold text-white">
              B
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">BookDreams</div>
              <div className="text-xs text-slate-500">Curated reads</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#featured" className="transition hover:text-violet-700">Featured</a>
            <a href="#checkout" className="transition hover:text-violet-700">Checkout</a>
            <a href="#delivery" className="transition hover:text-violet-700">Delivery</a>
          </nav>

          <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
            Shop now
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-6 pb-12 lg:px-8">
        <section className="rounded-[2rem] border border-violet-100 bg-white/70 p-6 shadow-soft backdrop-blur md:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                New collection
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
                Gift a story. Deliver a moment.
              </h1>
              <p className="mt-4 max-w-xl text-base text-slate-600 md:text-lg">
                Find the perfect read for yourself or let us surprise you with a mystery book chosen by genre and delivered to your door.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setPurchaseMode('book')}
                  className="rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-500"
                >
                  Buy a specific book
                </button>
                <button
                  type="button"
                  onClick={() => setPurchaseMode('mystery')}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"
                >
                  Try a mystery box
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-violet-900 to-indigo-900 p-6 text-white shadow-soft">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-100">
                  This week
                </span>
                <span className="text-lg font-semibold">Free shipping</span>
              </div>

              <div className="flex h-52 items-center justify-center rounded-[1.5rem] bg-white/10 text-5xl font-black tracking-wider shadow-inner">
                {selectedBook.coverText}
              </div>

              <div className="mt-6">
                <div className="text-sm uppercase tracking-[0.2em] text-violet-200">Featured pick</div>
                <div className="mt-2 text-2xl font-bold">{selectedBook.title}</div>
                <div className="mt-2 text-sm text-violet-100">{selectedBook.author}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Browse</p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">Featured books</h2>
              </div>
            </div>

            <ModeTabs value={purchaseMode} onChange={setPurchaseMode} />

            {purchaseMode === 'book' ? (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {books.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    selected={selectedBook.id === book.id}
                    onSelect={(book) => {
                      setSelectedBookId(book.id);
                      setPurchaseMode('book');
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <div>
                  <div className="text-sm font-semibold text-slate-700">Choose a genre</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {availableGenres.map((genre) => (
                      <button
                        key={genre}
                        type="button"
                        onClick={() => setSelectedGenre(genre)}
                        className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                          selectedGenre === genre
                            ? 'bg-violet-600 text-white shadow-md'
                            : 'bg-slate-100 text-slate-700 hover:bg-violet-100 hover:text-violet-700'
                        }`}
                      >
                        {genre}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-indigo-50 p-4">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Mystery recommendation</div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xl font-bold text-slate-900">{selectedBook.title}</div>
                      <div className="text-sm text-slate-600">{selectedBook.author}</div>
                    </div>
                    <div className="rounded-xl bg-white px-3 py-2 text-sm font-semibold text-violet-700 shadow-sm">
                      {selectedBook.getPriceLabel()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <aside id="checkout" className="space-y-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Selected item</div>
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
                <div>
                  <div className="text-lg font-bold text-slate-900">{selectedBook.title}</div>
                  <div className="text-sm text-slate-500">{selectedBook.author}</div>
                </div>
                <div className="text-xl font-black text-slate-900">{selectedBook.getPriceLabel()}</div>
              </div>
            </div>

            <OrderSummary
              selectedBook={selectedBook}
              genre={purchaseMode === 'mystery' ? selectedGenre : selectedBook.genre}
              purchaseMode={purchaseMode}
              deliveryName={delivery.fullName || 'Your address'}
            />
          </aside>
        </section>

        <section id="delivery" className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Delivery details</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Where should we send it?</h2>
            <div className="mt-5">
              <DeliveryForm formData={delivery} onChange={updateDeliveryField} />
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-slate-900 p-6 text-white shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">Order details</div>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-sm text-slate-300">Selected title</div>
                <div className="mt-2 text-xl font-bold">{selectedBook.title}</div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <div className="text-sm text-slate-300">Delivery address</div>
                <div className="mt-2 text-sm text-slate-100">
                  {delivery.address || 'No address added yet'}
                  {delivery.city ? `, ${delivery.city}` : ''}
                  {delivery.country ? `, ${delivery.country}` : ''}
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                type="button"
                className="w-full rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Confirm purchase
              </button>

              {orderPlaced && (
                <div className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  Your order is ready for review. A confirmation will be sent to {delivery.email || 'your email'}.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
