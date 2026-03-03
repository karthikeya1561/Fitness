"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

interface SidebarProps {
    mobileOpen?: boolean;
    onClose?: () => void;
}

export function Sidebar({ mobileOpen = false, onClose }: SidebarProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [userName, setUserName] = useState("User");

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                const fullName = user.user_metadata?.full_name;
                const name = user.user_metadata?.name;
                const emailName = user.email ? user.email.split('@')[0] : "User";
                setUserName(fullName || name || emailName);
            }
        };
        fetchUser();
    }, []);

    // Close sidebar when route changes (mobile)
    useEffect(() => {
        if (onClose) onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    const isActive = (path: string) => {
        return pathname === path || pathname?.startsWith(path + '/');
    };

    const getLinkClasses = (path: string) => {
        const active = "bg-primary/15 text-primary font-semibold";
        const inactive = "text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors";
        return `flex items-center gap-3 px-3 py-2.5 rounded-lg ${isActive(path) ? active : inactive}`;
    };

    const sidebarContent = (
        <div className="p-6 flex flex-col h-full">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-8">
                <div className="text-primary size-7 flex items-center justify-center shrink-0">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
                    </svg>
                </div>
                <span className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">FitMaster</span>
                {/* Close button (mobile only) */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="ml-auto -mr-2 p-2 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors lg:hidden"
                        aria-label="Close menu"
                    >
                        <span className="material-symbols-outlined text-[22px] leading-none">close</span>
                    </button>
                )}
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-3 mb-8 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary shrink-0"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBavZ0ImoFujtb4yMeSKsAnleHc4AAR2LUym5T1BVJ95LlTCgtLcMctMCeZzN05fjQRXoxiM1_7HuxlwbvuJ9AUsRWg-9nBWp8JDVochOE1L8L8tjppiZk0iMYYWhanvL0w9s0LMrrh8FpPPBZgfzH_HsB07CD_cgFeVsasPK8DgJxk9IclVmEmQ0lmY2Yyz37BwUbJDkP5vhePJTySgoI-Fy21EDtHwNnevfapCnqxtMHPhN-ItEeFpJtS0yDXLvcuEOFljKiNIIk")' }}
                />
                <div className="flex flex-col min-w-0">
                    <span className="text-slate-900 dark:text-white text-sm font-semibold leading-none truncate">{userName}</span>
                    <span className="text-slate-500 dark:text-[#92c9a4] text-xs font-normal mt-1">Premium Member</span>
                </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 flex-1">
                <Link href="/dashboard" className={getLinkClasses('/dashboard')}>
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">dashboard</span>
                    <span className="text-sm">Dashboard</span>
                </Link>
                <Link href="/workouts" className={getLinkClasses('/workouts')}>
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">play_circle</span>
                    <span className="text-sm">Workouts</span>
                </Link>
                <Link href="/exercises" className={getLinkClasses('/exercises')}>
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">fitness_center</span>
                    <span className="text-sm">Exercises</span>
                </Link>
                <Link href="/history" className={getLinkClasses('/history')}>
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">history</span>
                    <span className="text-sm">History</span>
                </Link>
                <Link href="/analytics" className={getLinkClasses('/analytics')}>
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">query_stats</span>
                    <span className="text-sm">Analytics</span>
                </Link>
            </nav>

            {/* Bottom Links */}
            <div className="mt-auto pt-5 border-t border-slate-200 dark:border-[#23482f] flex flex-col gap-1">
                <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">settings</span>
                    <span className="text-sm">Settings</span>
                </Link>
                <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[20px] leading-none shrink-0">logout</span>
                    <span className="text-sm font-medium">Log out</span>
                </button>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 flex-shrink-0 border-r border-slate-200 dark:border-[#23482f] bg-white dark:bg-[#112217] flex-col h-full">
                {sidebarContent}
            </aside>

            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Mobile Drawer */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-[#112217] flex flex-col h-full transform transition-transform duration-300 ease-in-out lg:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                {sidebarContent}
            </aside>
        </>
    );
}

// Hook to manage sidebar open state — use this in every page
export function useSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return {
        sidebarOpen,
        openSidebar: () => setSidebarOpen(true),
        closeSidebar: () => setSidebarOpen(false),
    };
}
