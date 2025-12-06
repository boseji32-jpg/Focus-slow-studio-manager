import { Suspense } from 'react';
import { DashboardSkeleton } from '@/components/dashboard-skeleton';
import DashboardContent from './dashboard-content';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);

    return (
        <Suspense fallback={<DashboardSkeleton />}>
            <DashboardContent session={session} />
        </Suspense>
    );
}
