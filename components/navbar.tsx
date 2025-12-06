import Link from 'next/link';
import { Button } from './ui/button';
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { Avatar, AvatarFallback } from './ui/avatar';
import { LayoutDashboard, LogIn, Sparkles } from 'lucide-react';
import { ModeToggle } from './mode-toggle';

export async function Navbar() {
    let session = null;
    try {
        session = await getServerSession(authOptions);
    } catch (error) {
        console.error("Session error:", error);
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-md">
            <div className="w-full px-6 md:px-12 flex h-16 items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-8">
                    <Link href="/" prefetch={true} className="flex items-center space-x-2.5 transition-opacity hover:opacity-80">
                        <div className="h-9 w-9 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                            <Sparkles className="h-5 w-5 text-white fill-white/20" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-foreground">
                            FocusFlow
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {[
                            { name: 'About', href: '/about' },
                            { name: 'Pricing', href: '/pricing' },
                            { name: 'Contact', href: '/contact' }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                prefetch={true}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Actions Area */}
                <div className="flex items-center gap-3">
                    <div className="mr-2">
                        <ModeToggle />
                    </div>
                    {session?.user ? (
                        <>
                            <Link href="/dashboard" prefetch={true}>
                                <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-violet-600 hover:bg-violet-50 rounded-full">
                                    <LayoutDashboard className="h-4 w-4" />
                                    <span>Dashboard</span>
                                </Button>
                            </Link>
                            <div className="h-8 w-px bg-border mx-1 hidden sm:block"></div>
                            <div className="flex items-center gap-3 pl-1">
                                <div className="hidden sm:flex flex-col items-end">
                                    <span className="text-sm font-semibold text-foreground">{session.user.name?.split(' ')[0]}</span>
                                    <span className="text-xs text-muted-foreground">Pro Studio</span>
                                </div>
                                <Avatar className="h-9 w-9 ring-2 ring-violet-100 cursor-pointer transition-transform hover:scale-105">
                                    <AvatarFallback className="bg-violet-100 text-violet-700 font-bold">
                                        {session.user.name?.[0] || session.user.email?.[0] || "U"}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        </>
                    ) : (
                        <>
                            <Link href="/login" prefetch={true}>
                                <Button variant="ghost" className="text-muted-foreground hover:text-foreground font-medium rounded-full px-5">
                                    Log in
                                </Button>
                            </Link>
                            <Link href="/signup" prefetch={true}>
                                <Button className="bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-500/20 rounded-full px-6 font-medium transition-all hover:-translate-y-0.5">
                                    Get Started
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}
