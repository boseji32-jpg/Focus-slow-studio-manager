import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Currency = 'INR' | 'USD' | 'EUR' | 'GBP';

interface CurrencyState {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    convert: (amount: number) => number;
    getSymbol: () => string;
}

// Conversion rates (base: USD)
const rates: Record<Currency, number> = {
    USD: 1,
    INR: 83.12,
    EUR: 0.92,
    GBP: 0.79,
};

const symbols: Record<Currency, string> = {
    USD: '$',
    INR: '₹',
    EUR: '€',
    GBP: '£',
};

export const useCurrencyStore = create<CurrencyState>()(
    persist(
        (set, get) => ({
            currency: 'INR', // Default to INR

            setCurrency: (currency) => set({ currency }),

            convert: (amount) => {
                const curr = get().currency;
                // If already in INR, return as is; otherwise convert
                return curr === 'INR' ? amount : amount * rates[curr];
            },

            getSymbol: () => {
                return symbols[get().currency];
            },
        }),
        {
            name: 'currency-storage',
        }
    )
);
