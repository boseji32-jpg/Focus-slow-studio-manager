'use client';

import { useCurrencyStore, Currency } from '@/store/currency-store';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe } from 'lucide-react';

const currencies: { value: Currency; label: string; flag: string }[] = [
    { value: 'INR', label: 'Indian Rupee (₹)', flag: '🇮🇳' },
    { value: 'USD', label: 'US Dollar ($)', flag: '🇺🇸' },
    { value: 'EUR', label: 'Euro (€)', flag: '🇪🇺' },
    { value: 'GBP', label: 'British Pound (£)', flag: '🇬🇧' },
];

export function CurrencySelector() {
    const { currency, setCurrency } = useCurrencyStore();

    return (
        <Select value={currency} onValueChange={(value) => setCurrency(value as Currency)}>
            <SelectTrigger className="w-full bg-zinc-900/50 border-violet-500/20">
                <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-violet-400" />
                    <SelectValue placeholder="Select currency" />
                </div>
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-violet-500/20">
                {currencies.map((curr) => (
                    <SelectItem
                        key={curr.value}
                        value={curr.value}
                        className="text-white hover:bg-violet-500/10 focus:bg-violet-500/10"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-lg">{curr.flag}</span>
                            <span>{curr.label}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
