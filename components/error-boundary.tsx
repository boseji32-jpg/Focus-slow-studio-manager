'use client';

import React from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    reset = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center space-y-4 rounded-lg border bg-white dark:bg-zinc-950 text-black dark:text-white shadow-sm">
                    <h2 className="text-2xl font-bold">Something went wrong.</h2>
                    <p className="text-gray-500 dark:text-gray-400">Don't worry, even the best studios have technical difficulties.</p>
                    <button
                        onClick={this.reset}
                        className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-90 transition font-medium"
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
