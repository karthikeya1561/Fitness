import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-solid border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-primary size-8">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold tracking-tight">FitMaster</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Workouts</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Library</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</Link>
                    <Link className="text-sm font-medium hover:text-primary transition-colors" href="#">About</Link>
                </nav>
                <div className="flex gap-3">
                    <Link href="/register" className="hidden sm:flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold tracking-tight hover:brightness-110 transition-all cursor-pointer">
                        Sign Up
                    </Link>
                    <Link href="/login" className="flex min-w-[84px] items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-[#23482f] text-slate-900 dark:text-white text-sm font-bold tracking-tight hover:bg-slate-200 dark:hover:bg-[#2d5c3c] transition-all cursor-pointer">
                        Sign In
                    </Link>
                </div>
            </div>
        </header>
    );
}
