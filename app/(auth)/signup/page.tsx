import Link from 'next/link';
import { SignupForm } from '@/components/auth/signup-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up - FocusFlow Studio',
    description: 'Create your account',
};

export default function SignupPage() {
    return (
        <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 min-h-screen">
            <div className="lg:p-8 flex items-center justify-center h-full order-2 lg:order-1">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                        <p className="text-sm text-muted-foreground">Enter your details below to create your studio account</p>
                    </div>
                    <SignupForm />
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        Already have an account? <Link href="/login" className="underline underline-offset-4 hover:text-primary">Login</Link>
                    </p>
                </div>
            </div>
            <div className="relative hidden h-full flex-col bg-indigo-600 p-10 text-white lg:flex dark:border-l order-1 lg:order-2">
                <div className="absolute inset-0 bg-indigo-600" />
                <div className="relative z-20 flex items-center text-lg font-medium">
                    FocusFlow Studio
                </div>
                <div className="relative z-20 mt-auto">
                    <blockquote className="space-y-2">
                        <p className="text-lg">
                            "FocusFlow is the backbone of our creative operations. It's simply the best."
                        </p>
                        <footer className="text-sm">Alex Chen</footer>
                    </blockquote>
                </div>
            </div>
        </div>
    );
}
