'use client';

import { Card, CardDescription, CardFooter, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Camera, Lightbulb, Package, Star, TrendingUp, Filter } from 'lucide-react';
import { useState } from 'react';

const equipment = [
    // Cameras
    { id: 1, name: 'Canon EOS R5', category: 'Camera', price: 2500, rating: 5, image: '📷', popular: true, specs: '45MP, 8K Video' },
    { id: 2, name: 'Sony A7S III', category: 'Camera', price: 2800, rating: 5, image: '📷', popular: true, specs: '12MP, 4K 120fps' },
    { id: 3, name: 'Red Komodo 6K', category: 'Camera', price: 5000, rating: 5, image: '🎥', popular: false, specs: '6K Cinema' },
    { id: 4, name: 'Blackmagic Pocket 6K', category: 'Camera', price: 1800, rating: 4, image: '🎥', popular: false, specs: '6K RAW' },
    { id: 5, name: 'Nikon Z9', category: 'Camera', price: 3000, rating: 5, image: '📷', popular: false, specs: '45MP, 8K60' },

    // Lighting
    { id: 7, name: 'Aputure 600D Pro', category: 'Lighting', price: 1800, rating: 5, image: '💡', popular: true, specs: '600W LED' },
    { id: 8, name: 'Profoto D2 1000', category: 'Lighting', price: 2200, rating: 5, image: '⚡', popular: false, specs: '1000Ws Strobe' },
    { id: 11, name: 'Aputure MC RGBWW', category: 'Lighting', price: 300, rating: 4, image: '🌈', popular: true, specs: 'RGB Light Panel' },

    // Quick add Grip
    { id: 13, name: 'C-Stand Kit', category: 'Grip', price: 200, rating: 4, image: '🔭', popular: true, specs: '10ft Stand' },
    { id: 14, name: 'DJI Ronin RS3', category: 'Grip', price: 1500, rating: 5, image: '🎬', popular: true, specs: '3-Axis Gimbal' },

    // Audio
    { id: 19, name: 'Shure SM7B', category: 'Audio', price: 600, rating: 5, image: '🎤', popular: true, specs: 'Broadcast Mic' },
    { id: 22, name: 'Sennheiser Wireless', category: 'Audio', price: 800, rating: 5, image: '📡', popular: true, specs: 'Lavalier Set' },
];

export default function EquipmentPage() {
    const [filter, setFilter] = useState('');

    const filteredItems = equipment.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="w-full px-6 md:px-12 py-8 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">Equipment Catalog</h1>
                    <p className="text-muted-foreground text-lg">Browse and book professional gear for your sessions.</p>
                </div>
                <div className="flex gap-3">
                    <Card className="modern-card border-none bg-emerald-50 dark:bg-emerald-950/30 px-4 py-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="font-semibold text-emerald-700 dark:text-emerald-400">98% In Stock</span>
                    </Card>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search cameras, lighting..."
                        className="pl-10 h-11 bg-background"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" /> Filters
                </Button>
            </div>

            {/* Tabs & Grid */}
            <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full justify-start overflow-x-auto bg-transparent border-b h-auto p-0 rounded-none space-x-6">
                    <TabsTrigger value="all" className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent px-2 py-3">All Gear</TabsTrigger>
                    <TabsTrigger value="Camera" className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent px-2 py-3">Cameras</TabsTrigger>
                    <TabsTrigger value="Lighting" className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent px-2 py-3">Lighting</TabsTrigger>
                    <TabsTrigger value="Audio" className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent px-2 py-3">Audio</TabsTrigger>
                </TabsList>

                {['all', 'Camera', 'Lighting', 'Audio'].map((tab) => (
                    <TabsContent key={tab} value={tab} className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {(tab === 'all' ? filteredItems : filteredItems.filter(i => i.category === tab)).map((item) => (
                                <Card key={item.id} className="modern-card border-none group cursor-pointer overflow-hidden">
                                    <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center text-6xl relative">
                                        {item.image}
                                        {item.popular && (
                                            <span className="absolute top-3 right-3 bg-violet-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                                                HOT
                                            </span>
                                        )}
                                    </div>
                                    <CardContent className="p-5">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="font-bold text-foreground truncate">{item.name}</h3>
                                                <p className="text-xs text-muted-foreground">{item.specs}</p>
                                            </div>
                                            <Badge variant="secondary" className="text-[10px]">{item.category}</Badge>
                                        </div>
                                        <div className="flex items-center gap-1 mt-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-3 w-3 ${i < item.rating ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`} />
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-5 pt-0 flex items-center justify-between border-t bg-secondary/10">
                                        <div className="font-bold text-lg">₹{item.price}<span className="text-xs font-normal text-muted-foreground">/hr</span></div>
                                        <Button size="sm" className="bg-violet-600 hover:bg-violet-700 h-8 rounded-full">Add</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}
