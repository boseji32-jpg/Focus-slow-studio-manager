import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DashboardSkeleton() {
    return (
        <div className="space-y-8 animate-pulse">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center">
                <div className="space-y-3">
                    <Skeleton className="h-12 w-80 bg-zinc-800" />
                    <Skeleton className="h-6 w-64 bg-zinc-800" />
                </div>
                <div className="flex gap-3">
                    <Skeleton className="h-10 w-24 bg-zinc-800" />
                    <Skeleton className="h-10 w-24 bg-zinc-800" />
                    <Skeleton className="h-10 w-24 bg-zinc-800" />
                </div>
            </div>

            {/* KPI Cards Skeleton */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                    <Card key={i} className="glass-strong border-[#ff6b6b]/40">
                        <CardHeader>
                            <Skeleton className="h-4 w-32 bg-zinc-700" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-10 w-40 bg-zinc-700 mb-3" />
                            <Skeleton className="h-4 w-28 bg-zinc-700" />
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Charts Skeleton */}
            <div className="grid gap-6 lg:grid-cols-2">
                {[1, 2].map((i) => (
                    <Card key={i} className="glass-strong border-[#ff6b6b]/40">
                        <CardHeader>
                            <Skeleton className="h-6 w-48 bg-zinc-700 mb-2" />
                            <Skeleton className="h-4 w-64 bg-zinc-700" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-80 w-full bg-zinc-800" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
