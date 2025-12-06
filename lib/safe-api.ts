export async function safeApiHandler<T>(
    fn: () => Promise<T>,
    retries = 1
): Promise<T> {
    try {
        return await fn();
    } catch (error) {
        if (retries > 0) {
            console.warn(`Database query failed. Retrying... (${retries} attempts left)`);
            return safeApiHandler(fn, retries - 1);
        }
        // In a real app, you might want to log this to a service like Sentry
        console.error("Database query failed after retries:", error);
        throw error;
    }
}
