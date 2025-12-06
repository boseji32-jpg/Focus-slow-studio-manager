'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, Box, ShieldCheck, Star, Camera, Sparkles, Zap, Users, TrendingUp } from 'lucide-react';

export function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-violet-50/50 to-white dark:from-violet-950/20 dark:to-background">
                <div className="w-full px-6 md:px-12 relative z-10 flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 px-4 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300 mb-8 border border-violet-200 dark:border-violet-800"
                    >
                        <Sparkles className="h-3.5 w-3.5 mr-2" />
                        <span>The Future of Studio Management</span>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl text-foreground heading-gradient"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Manage your creative space with <span className="text-violet-600">clarity</span>.
                    </motion.h1>

                    <motion.p
                        className="max-w-3xl text-xl text-muted-foreground mb-10 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Streamline bookings, track heavy equipment, and manage studio time effortlessly. The dedicated OS for modern creators.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link href="/signup">
                            <Button size="lg" className="h-12 px-8 text-base bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg shadow-violet-500/20 transition-all hover:-translate-y-1">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full border-border hover:bg-secondary">
                                View Demo
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Subtle decorative background blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-200/20 dark:bg-violet-900/10 rounded-full blur-3xl -z-10" />
            </section>

            {/* Stats Section - Clean Bar */}
            <section className="border-y border-border bg-card/50 backdrop-blur-sm">
                <div className="w-full px-6 md:px-12 py-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Active Studios', value: '2,000+' },
                            { label: 'Booking Hours', value: '1M+' },
                            { label: 'Equipment Items', value: '50k+' },
                            { label: 'Creator Satisfaction', value: '99%' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-secondary/30">
                <div className="w-full px-6 md:px-12">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 text-foreground">Everything you need</h2>
                        <p className="text-lg text-muted-foreground">Powerful features designed specifically for rental studios and production houses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
                        {[
                            {
                                icon: Clock,
                                title: "Precision Timer",
                                desc: "Track session durations down to the second with automated billing integration.",
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                icon: Box,
                                title: "Inventory Control",
                                desc: "Real-time tracking of cameras, lights, and props with QR code support.",
                                color: "bg-violet-100 text-violet-600"
                            },
                            {
                                icon: Zap,
                                title: "Instant Invoicing",
                                desc: "Generate professional invoices in INR/USD immediately after a session ends.",
                                color: "bg-amber-100 text-amber-600"
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border border-border bg-card hover:border-violet-200 hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-8">
                                        <div className={`h-12 w-12 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-24">
                <div className="w-full px-6 md:px-12">
                    <div className="bg-violet-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Ready to upgrade your studio?
                            </h2>
                            <p className="text-violet-100 text-lg mb-10">
                                Join thousands of creative spaces running on FocusFlow.
                            </p>
                            <Link href="/signup">
                                <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-xl hover:bg-white text-violet-900 font-semibold">
                                    Get Started Now
                                </Button>
                            </Link>
                        </div>

                        {/* Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-border bg-card">
                <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-violet-600 flex items-center justify-center">
                            <span className="text-white font-bold">F</span>
                        </div>
                        <span className="font-bold text-lg">FocusFlow</span>
                    </div>
                    <p className="text-sm text-muted-foreground">© 2024 FocusFlow Inc. All rights reserved.</p>
                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="/privacy" className="hover:text-violet-600 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-violet-600 transition-colors">Terms</Link>
                        <Link href="/contact" className="hover:text-violet-600 transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
