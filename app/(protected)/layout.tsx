import { Sidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/navbar';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 pt-16">
                <aside className="hidden md:flex flex-col w-64 border-r bg-background fixed h-[calc(100vh-4rem)]">
                    <Sidebar className="flex-1" />
                </aside>
                <main className="flex-1 md:ml-64 p-8 bg-zinc-50 dark:bg-zinc-900/50 min-h-[calc(100vh-4rem)]">
                    {children}
                </main>
            </div>
        </div>
    )
}
