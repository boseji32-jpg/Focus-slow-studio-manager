import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TimerState {
    startTime: number | null;
    accumulatedTime: number; // in milliseconds
    isRunning: boolean;
    hourlyRate: number;

    start: () => void;
    pause: () => void;
    reset: () => void;
    setHourlyRate: (rate: number) => void;
    getElapsed: () => number;
}

export const useTimerStore = create<TimerState>()(
    persist(
        (set, get) => ({
            startTime: null,
            accumulatedTime: 0,
            isRunning: false,
            hourlyRate: 100, // Default rate

            start: () => {
                if (get().isRunning) return;
                set({ startTime: Date.now(), isRunning: true });
            },

            pause: () => {
                if (!get().isRunning) return;
                const now = Date.now();
                const start = get().startTime;
                if (start) {
                    set((state) => ({
                        accumulatedTime: state.accumulatedTime + (now - start),
                        startTime: null,
                        isRunning: false,
                    }));
                }
            },

            reset: () => {
                set({ startTime: null, accumulatedTime: 0, isRunning: false });
            },

            setHourlyRate: (rate) => set({ hourlyRate: rate }),

            getElapsed: () => {
                const { startTime, accumulatedTime, isRunning } = get();
                if (!isRunning || !startTime) return accumulatedTime;
                return accumulatedTime + (Date.now() - startTime);
            },
        }),
        {
            name: 'focus-flow-timer',
        }
    )
);
