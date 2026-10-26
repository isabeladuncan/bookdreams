import type { BookGenre } from '../models/Book';

export type DeliveryFormData = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
};

type DeliveryFormProps = {
  formData: DeliveryFormData;
  onChange: (field: keyof DeliveryFormData, value: string) => void;
};

const fields: Array<{ key: keyof DeliveryFormData; label: string; placeholder: string; type?: string }> = [
  { key: 'fullName', label: 'Full name', placeholder: 'Jordan Lee' },
  { key: 'email', label: 'Email', placeholder: 'jordan@email.com', type: 'email' },
  { key: 'phone', label: 'Phone', placeholder: '+1 (555) 000 1245' },
  { key: 'address', label: 'Street address', placeholder: '145 Willow Street' },
  { key: 'city', label: 'City', placeholder: 'New York' },
  { key: 'zipCode', label: 'ZIP code', placeholder: '10001' },
  { key: 'country', label: 'Country', placeholder: 'United States' }
];

export function DeliveryForm({ formData, onChange }: DeliveryFormProps) {
  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <div key={field.key} className="space-y-2">
          <label htmlFor={field.key} className="text-sm font-medium text-slate-700">
            {field.label}
          </label>
          <input
            id={field.key}
            type={field.type ?? 'text'}
            value={formData[field.key]}
            onChange={(event) => onChange(field.key, event.target.value)}
            placeholder={field.placeholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
          />
        </div>
      ))}
    </div>
  );
}

export type { BookGenre };
