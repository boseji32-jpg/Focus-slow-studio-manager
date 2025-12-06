'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { DollarSign } from 'lucide-react';
import { useTimerStore } from '@/store/timer-store';
import { useCurrencyStore } from '@/store/currency-store';

export function CostCalculator() {
    const { elapsedTime } = useTimerStore();
    const { currency, convert, getSymbol } = useCurrencyStore();

    // Base hourly rate in USD
    const HOURLY_RATE = 50;

    const currentCost = (elapsedTime / 3600) * HOURLY_RATE;

    const formattedCost = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        maximumFractionDigits: 2
    }).format(convert(currentCost));

    return (
        <Card className="modern-card border-none ring-1 ring-black/5 bg-white">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-emerald-600" />
                    Current Cost
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-mono font-bold text-foreground tracking-tight">
                    {formattedCost}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                    Based on {getSymbol()}{convert(HOURLY_RATE).toFixed(0)}/hr rate
                </p>
            </CardContent>
        </Card>
    );
}
