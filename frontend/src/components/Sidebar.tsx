"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function Sidebar() {
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

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    const isActive = (path: string) => {
        return pathname === path || pathname?.startsWith(path + '/');
    };

    const getLinkClasses = (path: string) => {
        const activeClasses = "bg-primary/20 text-primary font-medium";
        const inactiveClasses = "text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors";
        return `flex items-center gap-3 px-3 py-2.5 rounded-lg ${isActive(path) ? activeClasses : inactiveClasses}`;
    };

    return (
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-[#23482f] bg-white dark:bg-[#112217] flex flex-col h-full">
            <div className="p-6 flex flex-col h-full">
                {/* User Profile Section */}
                <div className="flex items-center gap-3 mb-10">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-primary"
                        data-alt="User profile picture with green border"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBavZ0ImoFujtb4yMeSKsAnleHc4AAR2LUym5T1BVJ95LlTCgtLcMctMCeZzN05fjQRXoxiM1_7HuxlwbvuJ9AUsRWg-9nBWp8JDVochOE1L8L8tjppiZk0iMYYWhanvL0w9s0LMrrh8FpPPBZgfzH_HsB07CD_cgFeVsasPK8DgJxk9IclVmEmQ0lmY2Yyz37BwUbJDkP5vhePJTySgoI-Fy21EDtHwNnevfapCnqxtMHPhN-ItEeFpJtS0yDXLvcuEOFljKiNIIk")' }}
                    ></div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-900 dark:text-white text-base font-semibold leading-tight">{userName}</h1>
                        <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-normal">Premium Member</p>
                    </div>
                </div>
                {/* Nav Links */}
                <nav className="flex flex-col gap-2 flex-1">
                    <Link href="/dashboard" className={getLinkClasses('/dashboard')}>
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm">Dashboard</span>
                    </Link>
                    <Link href="/exercises" className={getLinkClasses('/exercises')}>
                        <span className="material-symbols-outlined">fitness_center</span>
                        <span className="text-sm">Exercises</span>
                    </Link>
                    <Link href="/history" className={getLinkClasses('/history')}>
                        <span className="material-symbols-outlined">history</span>
                        <span className="text-sm">History</span>
                    </Link>
                    <Link href="/analytics" className={getLinkClasses('/analytics')}>
                        <span className="material-symbols-outlined">query_stats</span>
                        <span className="text-sm">Analytics</span>
                    </Link>
                </nav>
                {/* Bottom Links */}
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-[#23482f]">
                    <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm">Settings</span>
                    </Link>
                    <button onClick={handleLogout} className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="text-sm font-medium">Log out</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
