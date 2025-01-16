import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy",
};
export default function RefundPolicy() {
    return (
        <div className="container mx-auto max-w-3xl min-h-screen py-10">
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter">
                        Refund Policy
                    </h1>
                    <p className="text-muted-foreground">
                        Last updated: January 1, 2025
                    </p>
                </div>
            </div>
        </div>
    );
}
