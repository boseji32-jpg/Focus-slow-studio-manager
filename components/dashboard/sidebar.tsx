'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Camera, History, Settings, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname();

    const routes = [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Equipment', path: '/equipment', icon: Camera },
        { name: 'History', path: '/history', icon: History },
        { name: 'Settings', path: '/settings', icon: Settings },
    ];

    return (
        <div className={cn("pb-12", className)}>
            <div className="py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-xs font-semibold tracking-tight text-muted-foreground uppercase">
                        Menu
                    </h2>
                    <div className="space-y-1">
                        {routes.map((route) => (
                            <Link key={route.path} href={route.path}>
                                <Button
                                    variant={pathname === route.path ? "secondary" : "ghost"}
                                    className={cn("w-full justify-start", pathname === route.path && "bg-secondary")}
                                >
                                    <route.icon className="mr-2 h-4 w-4" />
                                    {route.name}
                                </Button>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="px-3 py-2 mt-auto">
                    <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20" onClick={() => signOut()}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                    </Button>
                </div>
            </div>
        </div>
    )
}
