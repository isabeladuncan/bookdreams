type ModeTabsProps = {
  value: 'book' | 'mystery';
  onChange: (value: 'book' | 'mystery') => void;
};

export function ModeTabs({ value, onChange }: ModeTabsProps) {
  const tabs: Array<{ key: 'book' | 'mystery'; label: string; description: string }> = [
    { key: 'book', label: 'Specific book', description: 'Choose a title you love' },
    { key: 'mystery', label: 'Mystery book', description: 'Pick a genre and surprise me' }
  ];

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {tabs.map((tab) => {
        const active = value === tab.key;

        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`rounded-2xl border p-4 text-left transition ${
              active
                ? 'border-violet-600 bg-violet-600 text-white shadow-lg'
                : 'border-slate-200 bg-white text-slate-700 hover:border-violet-300'
            }`}
          >
            <div className="text-sm font-semibold">{tab.label}</div>
            <div className={`mt-1 text-xs ${active ? 'text-violet-100' : 'text-slate-500'}`}>
              {tab.description}
            </div>
          </button>
        );
      })}
    </div>
  );
}
