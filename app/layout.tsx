import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ChatWidget } from '@/components/chat-widget';
import { Providers } from '@/components/providers';
import { ErrorBoundary } from '@/components/error-boundary';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'FocusFlow Studio Manager',
  description: 'Premium studio management for creatives.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <ErrorBoundary>
          <Providers>
            {children}
            <ChatWidget />
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  );
}
