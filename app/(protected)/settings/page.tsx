'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CurrencySelector } from '@/components/currency-selector';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Bell, Globe, Shield, Clock, Palette, Download, Trash2, Save } from 'lucide-react';
import { Switch } from "@/components/ui/switch"

export default function SettingsPage() {
    return (
        <div className="w-full px-6 md:px-12 py-12 max-w-[1920px] mx-auto space-y-12 bg-background/50">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2 heading-gradient">Settings</h1>
                    <p className="text-muted-foreground text-lg">Manage your profile, studio preferences, and notifications.</p>
                </div>
                <Button className="h-12 px-8 bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20 rounded-full">
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* Left Column: Profile & Account */}
                <div className="space-y-8">
                    <Card className="modern-card border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5 text-violet-600" />
                                Profile
                            </CardTitle>
                            <CardDescription>Your personal information</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Display Name</Label>
                                <Input defaultValue="Alex Chen" className="bg-secondary/20" />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input defaultValue="alex@focusflow.in" disabled className="bg-secondary/50 opacity-70" />
                            </div>
                            <div className="space-y-2">
                                <Label>Phone</Label>
                                <Input defaultValue="+91 98765 43210" className="bg-secondary/20" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="modern-card border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-blue-600" />
                                Regional
                            </CardTitle>
                            <CardDescription>Currency and localization</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Currency Preference</Label>
                                <CurrencySelector />
                            </div>
                            <div className="space-y-2">
                                <Label>Timezone</Label>
                                <Select defaultValue="ist">
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="ist">🇮🇳 India (IST)</SelectItem>
                                        <SelectItem value="pst">🇺🇸 Pacific (PST)</SelectItem>
                                        <SelectItem value="gmt">🇬🇧 GMT</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Middle Column: Studio Defaults */}
                <div className="space-y-8">
                    <Card className="modern-card border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-amber-600" />
                                Session Defaults
                            </CardTitle>
                            <CardDescription>Configuration for new bookings</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Default Studio</Label>
                                <Select defaultValue="white">
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="white">White Cyclorama</SelectItem>
                                        <SelectItem value="green">Green Screen</SelectItem>
                                        <SelectItem value="podcast">Podcast Suite</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Hourly Rate (Base)</Label>
                                <div className="relative">
                                    <span className="absolute left-3 top-2.5 text-muted-foreground">₹</span>
                                    <Input type="number" defaultValue="1500" className="pl-8" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Minimum Booking Duration</Label>
                                <Select defaultValue="2">
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1 Hour</SelectItem>
                                        <SelectItem value="2">2 Hours</SelectItem>
                                        <SelectItem value="4">4 Hours (Half Day)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="modern-card border-none">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5 text-pink-600" />
                                Notifications
                            </CardTitle>
                            <CardDescription>Manage your alerts</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                "Email Confirmations",
                                "SMS Reminders",
                                "Equipment Alerts",
                                "Waitlist Updates"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <Label className="font-normal cursor-pointer">{item}</Label>
                                    <Switch defaultChecked />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Security & Data */}
                <div className="space-y-8">
                    <Card className="modern-card border-none bg-emerald-50/50 dark:bg-emerald-950/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-emerald-600" />
                                Security
                            </CardTitle>
                            <CardDescription>Protect your account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button variant="outline" className="w-full justify-start">Change Password</Button>
                            <Button variant="outline" className="w-full justify-start">Two-Factor Auth</Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Download className="mr-2 h-4 w-4" /> Download Data
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="modern-card border-red-100 dark:border-red-900/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-600">
                                <Trash2 className="h-5 w-5" />
                                Danger Zone
                            </CardTitle>
                            <CardDescription>Irreversible actions</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="destructive" className="w-full">Delete Account</Button>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}
