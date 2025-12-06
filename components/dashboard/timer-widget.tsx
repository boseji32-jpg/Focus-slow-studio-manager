'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Square, Clock } from 'lucide-react';
import { useTimerStore } from '@/store/timer-store';

export function TimerWidget() {
    const {
        isRunning,
        startTime,
        elapsedTime,
        startTimer,
        stopTimer,
        resetTimer,
        tick
    } = useTimerStore();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        let interval: NodeJS.Timeout;

        if (isRunning) {
            interval = setInterval(() => {
                tick();
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning, tick]);

    if (!mounted) return null;

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <Card className="modern-card border-none ring-1 ring-black/5 bg-white">
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4 text-violet-600" />
                    Session Timer
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-mono font-bold text-foreground mb-4 tracking-tight">
                    {formatTime(elapsedTime)}
                </div>
                <div className="flex gap-2">
                    {!isRunning ? (
                        <Button
                            className="flex-1 bg-violet-600 hover:bg-violet-700 text-white shadow-sm"
                            onClick={startTimer}
                        >
                            <Play className="h-4 w-4 mr-2" /> Start
                        </Button>
                    ) : (
                        <Button
                            variant="outline"
                            className="flex-1 border-violet-200 hover:bg-violet-50 text-violet-700"
                            onClick={stopTimer}
                        >
                            <Pause className="h-4 w-4 mr-2" /> Pause
                        </Button>
                    )}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={resetTimer}
                        className="text-muted-foreground hover:text-red-600 hover:bg-red-50"
                        disabled={elapsedTime === 0}
                    >
                        <Square className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
