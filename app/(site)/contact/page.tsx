import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="w-full px-6 md:px-12 py-24 min-h-screen bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-[1800px] mx-auto">
                {/* Left Column: Form */}
                <div className="flex flex-col justify-center">
                    <div className="mb-10">
                        <h1 className="text-5xl font-bold mb-6 heading-gradient">Get in Touch</h1>
                        <p className="text-muted-foreground text-xl leading-relaxed">
                            Have questions about our studio or need a custom quote? <br />
                            We're here to help you create your masterpiece.
                        </p>
                    </div>

                    <Card className="modern-card border-none bg-secondary/20">
                        <CardContent className="p-8">
                            <form className="space-y-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Label htmlFor="firstName" className="text-base font-semibold">First Name</Label>
                                        <Input id="firstName" placeholder="Arjun" className="h-12 bg-background" />
                                    </div>
                                    <div className="space-y-3">
                                        <Label htmlFor="lastName" className="text-base font-semibold">Last Name</Label>
                                        <Input id="lastName" placeholder="Reddy" className="h-12 bg-background" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                                    <Input id="email" type="email" placeholder="arjun@studio.com" className="h-12 bg-background" />
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="type" className="text-base font-semibold">Inquiry Type</Label>
                                    <select className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                        <option>Studio Booking</option>
                                        <option>Equipment Rental</option>
                                        <option>Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-3">
                                    <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px] bg-background resize-none" />
                                </div>
                                <Button size="lg" className="h-14 w-full bg-violet-600 hover:bg-violet-700 text-lg rounded-xl">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: FAQ & Info */}
                <div className="space-y-12">
                    {/* Quick Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="modern-card border-none bg-blue-50 dark:bg-blue-950/20">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Phone Support</div>
                                    <div className="text-sm text-muted-foreground">+91 98765 43210</div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="modern-card border-none bg-emerald-50 dark:bg-emerald-950/20">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">Email Us</div>
                                    <div className="text-sm text-muted-foreground">hello@focusflow.in</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <MessageSquare className="h-8 w-8 text-violet-600" />
                            Frequent Questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                { q: "Do you provide equipment insurance?", a: "Yes, we offer optional insurance packages for all rentals starting at ₹500/day." },
                                { q: "Is there parking available?", a: "We have a dedicated lot for 10 cars and free street parking available 24/7." },
                                { q: "Can I bring my own assistants?", a: "Absolutely. We also have a roster of verified assistants if you need extra hands." },
                                { q: "What is your cancellation policy?", a: "Full refund if cancelled 48 hours before the booking. 50% refund if within 24 hours." }
                            ].map((faq, i) => (
                                <Card key={i} className="modern-card border-none hover:border-violet-200 transition-colors">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-2 text-foreground">{faq.q}</h3>
                                        <p className="text-muted-foreground">{faq.a}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
