'use client';

import dynamic from 'next/dynamic';
import { TimerWidget } from '@/components/dashboard/timer-widget';
import { CostCalculator } from '@/components/dashboard/cost-calculator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, TrendingUp, Calendar, Activity, BarChart3, PieChart, DollarSign, Users, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load chart components for performance
const AreaChart = dynamic(() => import('recharts').then((mod) => mod.AreaChart), {
    loading: () => <Skeleton className="h-[300px] w-full rounded-xl" />,
    ssr: false
});
const Tooltip = dynamic(() => import('recharts').then((mod) => mod.Tooltip), { ssr: false });
const Legend = dynamic(() => import('recharts').then((mod) => mod.Legend), { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then((mod) => mod.ResponsiveContainer), { ssr: false });
// Add other chart imports as needed, or simplify for this iteration to ensure stability first.

// Sample Data in INR
const topCustomers = [
    { name: 'Rajesh Productions', spent: 10400000, sessions: 18 },
    { name: 'Creative Studios', spent: 8150000, sessions: 14 },
    { name: 'Vision Media', spent: 7230000, sessions: 12 },
    { name: 'Dreamworks IN', spent: 6320000, sessions: 10 },
];

export default function DashboardContent({ session }: { session: any }) {
    const [timeRange, setTimeRange] = useState('7d');

    return (
        <div className="space-y-8 w-full px-6 md:px-12 pt-6">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                        Analytics Dashboard
                    </h1>
                    <p className="text-muted-foreground">
                        Welcome back, {session?.user?.name?.split(' ')[0] || 'Creator'}. Here is your studio's performance.
                    </p>
                </div>
                <div className="flex bg-secondary/50 p-1 rounded-lg">
                    {['7d', '30d', '90d'].map((range) => (
                        <Button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            variant="ghost"
                            size="sm"
                            className={`rounded-md px-4 font-medium transition-all ${timeRange === range
                                ? 'bg-white text-violet-600 shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                                }`}
                        >
                            {range === '7d' ? 'Week' : range === '30d' ? 'Month' : 'Quarter'}
                        </Button>
                    ))}
                </div>
            </div>

            {/* KPI Grid - Clean & Crisp */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    { title: 'Total Revenue', value: '₹3.57Cr', change: '+12.5%', icon: DollarSign, color: 'text-violet-600', bg: 'bg-violet-50' },
                    { title: 'Active Sessions', value: '243', change: '+8.2%', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { title: 'Total Customers', value: '1,248', change: '+23.1%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { title: 'Avg. Session', value: '₹1.47L', change: '+5.4%', icon: TrendingUp, color: 'text-amber-600', bg: 'bg-amber-50' },
                ].map((kpi, i) => (
                    <Card key={i} className="modern-card border-none ring-1 ring-black/5">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-muted-foreground">{kpi.title}</span>
                                <div className={`p-2 rounded-lg ${kpi.bg}`}>
                                    <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                                </div>
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-foreground">{kpi.value}</span>
                                <span className="text-xs font-semibold text-emerald-600 flex items-center">
                                    {kpi.change}
                                    <ArrowUpRight className="h-3 w-3 ml-0.5" />
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column: Charts Area */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="modern-card border-none ring-1 ring-black/5">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-foreground">Revenue Trend</CardTitle>
                            <CardDescription>Monthly income breakdown</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[350px] flex items-center justify-center bg-secondary/20 rounded-xl m-6 border border-dashed border-border text-muted-foreground text-sm">
                            [Chart Visualization Placeholder for Low Latency]
                        </CardContent>
                    </Card>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <TimerWidget />
                        <CostCalculator />
                    </div>
                </div>

                {/* Right Column: Top List & Actions */}
                <div className="space-y-6">
                    <Card className="modern-card border-none ring-1 ring-black/5 h-full">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold text-foreground">Top Customers</CardTitle>
                            <CardDescription>Highest volume clents</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5">
                            {topCustomers.map((customer, i) => (
                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:bg-violet-100 group-hover:text-violet-700 transition-colors">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm text-foreground">{customer.name}</div>
                                            <div className="text-xs text-muted-foreground">{customer.sessions} sessions</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-bold text-foreground">
                                        ₹{(customer.spent / 10000000).toFixed(2)}Cr
                                    </div>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full mt-4 text-xs">
                                View Leaderboard
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
