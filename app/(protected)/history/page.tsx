import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, ArrowUpRight } from "lucide-react"

export default function HistoryPage() {
    return (
        <div className="w-full px-6 md:px-12 py-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Session History</h1>
                    <p className="text-muted-foreground text-lg">Track your past bookings and invoices.</p>
                </div>
                <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" /> Export CSV
                </Button>
            </div>

            <div className="modern-card border-none bg-background rounded-xl overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-secondary/50">
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="w-[200px] font-semibold">Date</TableHead>
                            <TableHead className="font-semibold">Duration</TableHead>
                            <TableHead className="font-semibold">Studio Space</TableHead>
                            <TableHead className="font-semibold text-right">Total Cost</TableHead>
                            <TableHead className="text-right font-semibold">Invoice</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            { date: 'Oct 24, 2024', duration: '4h 12m', studio: 'White Cyclorama', cost: '₹12,450', status: 'Paid' },
                            { date: 'Nov 02, 2024', duration: '2h 30m', studio: 'Podcast Suite', cost: '₹3,500', status: 'Paid' },
                            { date: 'Nov 15, 2024', duration: '8h 00m', studio: 'Green Screen', cost: '₹24,000', status: 'Pending' },
                            { date: 'Dec 01, 2024', duration: '3h 15m', studio: 'White Cyclorama', cost: '₹9,800', status: 'Paid' },
                        ].map((session, i) => (
                            <TableRow key={i} className="hover:bg-secondary/20 transition-colors">
                                <TableCell className="font-medium text-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-violet-500" />
                                        {session.date}
                                    </div>
                                </TableCell>
                                <TableCell>{session.duration}</TableCell>
                                <TableCell>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                        {session.studio}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right font-bold tabular-nums">{session.cost}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-violet-600">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
