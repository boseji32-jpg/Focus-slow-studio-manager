import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Zap, Star, Shield } from 'lucide-react';

export default function PricingPage() {
    const tiers = [
        {
            name: "White Cyclorama",
            price: "₹1,500",
            period: "/hour",
            desc: "Perfect for fashion and product photography.",
            icon: Star,
            features: ["Infinity Wall", "Profoloto Lighting Kit", "Changing Room", "Bluetooth Sound System"],
            popular: false
        },
        {
            name: "The Green Screen",
            price: "₹2,500",
            period: "/hour",
            desc: "Ideal for VFX and chroma key work.",
            icon: Zap,
            features: ["Pre-lit Green Screen", "Overhead Grid", "Video Monitoring", "4K Playback"],
            popular: true
        },
        {
            name: "Podcast Suite",
            price: "₹1,200",
            period: "/hour",
            desc: "Acoustically treated room for audio recording.",
            icon: Shield,
            features: ["4x Shure SM7B Mics", "Rodecaster Pro", "Video Sims", "Live Streaming Ready"],
            popular: false
        }
    ];

    return (
        <div className="w-full px-6 md:px-12 py-24 min-h-screen bg-background">
            <div className="text-center mb-20">
                <h1 className="text-5xl font-bold mb-6 heading-gradient">Studio Rates</h1>
                <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                    Transparent pricing tailored for Indian creators. No hidden fees, just pure creativity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
                {tiers.map((tier) => (
                    <Card key={tier.name} className={`modern-card flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl ${tier.popular ? 'border-violet-500 shadow-violet-500/10 scale-105 z-10' : ''}`}>
                        {tier.popular && (
                            <div className="absolute top-0 right-0 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                                MOST POPULAR
                            </div>
                        )}
                        <CardHeader className="pb-8">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${tier.popular ? 'bg-violet-100 text-violet-600' : 'bg-secondary text-foreground'}`}>
                                <tier.icon className="h-6 w-6" />
                            </div>
                            <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                            <CardDescription className="text-base mt-2">{tier.desc}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-extrabold text-foreground">{tier.price}</span>
                                <span className="ml-2 text-muted-foreground font-medium">{tier.period}</span>
                            </div>
                            <ul className="space-y-4">
                                {tier.features.map((f) => (
                                    <li key={f} className="flex items-center text-sm font-medium text-muted-foreground">
                                        <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 flex-shrink-0">
                                            <Check className="h-3 w-3" />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="pt-8">
                            <Button className={`w-full h-12 text-base font-semibold rounded-xl ${tier.popular ? 'bg-violet-600 hover:bg-violet-700' : 'bg-foreground text-background hover:bg-foreground/90'}`}>
                                Book Now
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}
