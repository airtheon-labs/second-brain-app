"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const Navbar = () => {
    return (
        <header className="sticky top-0 w-full z-[100] border-b border-border">
            <div className="relative w-full bg-background/80 supports-[backdrop-filter]:bg-background/70 backdrop-blur-lg">
                {/* Navbar Content */}
                <div className="flex h-16 items-center justify-between px-5 lg:px-8">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-3xl">Airtheon</span>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <ThemeToggle />
                        <div className="flex items-center space-x-6">
                            <Link href={baseUrl}>
                                <Button>Join Waitlist</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};