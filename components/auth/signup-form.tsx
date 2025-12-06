'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const step1Schema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const step2Schema = z.object({
    name: z.string().min(2),
    studioName: z.string().optional(),
});

export function SignupForm() {
    const router = useRouter();
    const [step, setStep] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState<any>({});

    const { register: register1, handleSubmit: handleSubmit1, formState: { errors: errors1 } } = useForm<z.infer<typeof step1Schema>>({
        resolver: zodResolver(step1Schema)
    });

    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm<z.infer<typeof step2Schema>>({
        resolver: zodResolver(step2Schema)
    });

    const onStep1Submit = (d: z.infer<typeof step1Schema>) => {
        setData((prev: any) => ({ ...prev, ...d }));
        setStep(2);
    };

    const onStep2Submit = async (d: z.infer<typeof step2Schema>) => {
        const finalData = { ...data, ...d };
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(finalData),
                headers: { 'Content-Type': 'application/json' }
            });

            if (res.ok) {
                router.push('/login');
            } else {
                alert("Registration failed");
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="grid gap-6">
            <div className="flex items-center justify-center mb-6">
                <div className={`h-2 w-12 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'} mr-2 transition-colors`} />
                <div className={`h-2 w-12 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'} transition-colors`} />
            </div>

            {step === 1 && (
                <form onSubmit={handleSubmit1(onStep1Submit)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" {...register1("email")} />
                            {errors1.email && <p className="text-red-500 text-xs">{errors1.email.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" {...register1("password")} />
                            {errors1.password && <p className="text-red-500 text-xs">{errors1.password.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" {...register1("confirmPassword")} />
                            {errors1.confirmPassword && <p className="text-red-500 text-xs">{errors1.confirmPassword.message}</p>}
                        </div>
                        <Button type="submit" className="w-full">Next: Personal Details</Button>
                    </div>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit2(onStep2Submit)}>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" {...register2("name")} />
                            {errors2.name && <p className="text-red-500 text-xs">{errors2.name.message}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="studioName">Studio Name (Optional)</Label>
                            <Input id="studioName" {...register2("studioName")} />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" type="button" onClick={() => setStep(1)} className="w-1/3">Back</Button>
                            <Button type="submit" disabled={isLoading} className="w-2/3">
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Create Account
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
