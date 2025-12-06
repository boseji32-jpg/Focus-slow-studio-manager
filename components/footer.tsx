import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    © 2024 FocusFlow Studio. Built by <a href="#" className="font-medium underline underline-offset-4">Antigravity</a>.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <Link href="/terms" className="hover:underline">Terms</Link>
                    <Link href="/privacy" className="hover:underline">Privacy</Link>
                </div>
            </div>
        </footer>
    )
}
