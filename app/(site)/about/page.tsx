import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Phone, Mail, Clock, Shield, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            {/* Hero Section */}
            <section className="px-6 md:px-12 lg:px-16 mb-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 heading-gradient">
                    Crafting Visual Stories in Dindigul
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    FocusFlow Studio isn't just a rental space; it's a creative hub designed to elevate your production experience with state-of-the-art facilities.
                </p>
            </section>

            {/* Stats Section - Full Width */}
            <section className="w-full px-6 md:px-12 lg:px-16 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Users, label: "Happy Creators", value: "5,000+" },
                        { icon: Award, label: "Sessions Managed", value: "50,000+" },
                        { icon: Heart, label: "Serving India", value: "4 Years" }
                    ].map((stat, i) => (
                        <Card key={i} className="modern-card border-none bg-secondary/30">
                            <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                                <stat.icon className="h-10 w-10 text-violet-600 mb-4" />
                                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Main Content Grid - Full Width Layout */}
            <div className="w-full px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 mb-24">
                {/* Our Story */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Shield className="h-8 w-8 text-violet-600" />
                        Our Story
                    </h2>
                    <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                        <p className="mb-4">
                            Born in the heart of Dindigul, Tamil Nadu, FocusFlow emerged from a simple frustration: managing studio time and equipment shouldn't be complicated.
                        </p>
                        <p>
                            Since 2020, we've been empowering creators across India with cutting-edge studio management tools, transforming how local production houses operate.
                        </p>
                    </div>
                </div>

                {/* Vision */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Award className="h-8 w-8 text-violet-600" />
                        Our Vision
                    </h2>
                    <div className="prose prose-lg dark:prose-invert text-muted-foreground">
                        <p>
                            To become the operating system for creative spaces worldwide, starting right here in Tamil Nadu. We believe that when logistics are handled, creativity flows.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <section className="w-full px-6 md:px-12 lg:px-16 mb-24 bg-secondary/20 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { name: "Arjun Kumar", role: "Founder & CEO", init: "AK" },
                        { name: "Priya Sharma", role: "Studio Manager", init: "PS" },
                        { name: "Vikram Reddy", role: "Technical Director", init: "VR" },
                        { name: "Ananya Singh", role: "Client Relations", init: "AS" }
                    ].map((member, i) => (
                        <Card key={i} className="modern-card border-none text-center">
                            <CardContent className="pt-10 pb-8">
                                <Avatar className="h-24 w-24 mx-auto mb-6 ring-4 ring-violet-50">
                                    <AvatarFallback className="bg-violet-600 text-white text-xl font-bold">
                                        {member.init}
                                    </AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-violet-600 font-medium text-sm">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Location Section */}
            <section className="w-full px-6 md:px-12 lg:px-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Visit Our HQ</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Card */}
                    <Card className="modern-card border-none bg-violet-600 text-white h-full">
                        <CardContent className="p-8 flex flex-col justify-center h-full space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                                <p className="text-violet-100 mb-8">
                                    We'd love to hear from you. Drop by for a coffee or book a tour of our facilities.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 mt-1 text-violet-200" />
                                    <p>123 Creative Avenue, <br />Dindigul, Tamil Nadu 624001</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-6 w-6 text-violet-200" />
                                    <p>+91 98765 43210</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-6 w-6 text-violet-200" />
                                    <p>hello@focusflow.in</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Clock className="h-6 w-6 text-violet-200" />
                                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Map - Now Wider */}
                    <Card className="modern-card border-none overflow-hidden lg:col-span-2 h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125746.06913165384!2d77.89445943715052!3d10.352495671191838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00ab0b789d3811%3A0x62953e34b4156550!2sDindigul%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709664551234!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </Card>
                </div>
            </section>
        </div>
    );
}
