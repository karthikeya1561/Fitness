"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function DashboardPage() {
    const [userName, setUserName] = useState("User");
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();

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

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <Sidebar mobileOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
                {/* Top Navbar */}
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-4 md:px-8 py-4">
                    <div className="flex items-center gap-3">
                        {/* Hamburger (mobile) */}
                        <button
                            onClick={openSidebar}
                            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                            aria-label="Open menu"
                        >
                            <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
                        </button>
                        <h2 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold tracking-tight">Workout Dashboard</h2>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative hidden md:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#92c9a4] text-[20px] leading-none">search</span>
                            <input
                                className="bg-slate-100 dark:bg-[#23482f] border-none rounded-lg pl-10 pr-4 py-2 text-sm w-52 focus:ring-2 focus:ring-primary outline-none transition-all dark:placeholder-[#92c9a4]"
                                placeholder="Search exercises..."
                                type="text"
                            />
                        </div>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-600 dark:text-[#92c9a4] hover:text-primary transition-colors cursor-pointer flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px] leading-none">notifications</span>
                        </button>
                        <Link
                            href="/calendar"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors text-slate-900 dark:text-white"
                        >
                            <span className="material-symbols-outlined text-[20px] leading-none">calendar_today</span>
                        </Link>
                    </div>
                </header>

                <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
                    {/* Headline */}
                    <div className="mb-6 md:mb-8">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-2">Welcome back, {userName}!</h1>
                        <p className="text-slate-500 dark:text-[#92c9a4] text-sm md:text-base">You&apos;ve completed 4 workouts this week. Keep up the momentum!</p>
                    </div>

                    {/* Hero: Start Workout */}
                    <section className="mb-8 md:mb-12">
                        <div className="relative overflow-hidden rounded-xl bg-slate-900 dark:bg-[#193322] border border-slate-800 dark:border-[#23482f] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 shadow-xl">
                            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-20 pointer-events-none">
                                <div className="w-full h-full bg-gradient-to-l from-primary to-transparent" />
                            </div>
                            <div className="relative z-10 w-full md:w-2/3">
                                <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 md:mb-3">Start Empty Workout</h2>
                                <p className="text-slate-400 dark:text-[#92c9a4] text-sm md:text-base mb-5 md:mb-6 max-w-md">
                                    Begin a session without a predefined routine. Log exercises, sets, and reps as you go.
                                </p>
                                <Link
                                    href="/workouts/live"
                                    className="inline-flex items-center gap-2.5 bg-primary text-[#102216] px-6 md:px-7 py-3 md:py-3.5 rounded-lg font-bold text-base hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-[22px] leading-none">play_circle</span>
                                    Start Workout
                                </Link>
                            </div>
                            <div className="hidden md:block relative z-10 w-1/3">
                                <div
                                    className="w-full aspect-square bg-center bg-cover rounded-xl shadow-2xl rotate-3"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFKb48dyS0Gg_gmoZ5Im6KgtYNYu4sTaBSi0SFr9lE2xnGUaUbU7MYiV6dBid43eVoPxZCAN-kYDzmK8XgCxhCBLZv1y62g58riyuIvmyhVfXEvFEspdTktCCw1hbofHLnR975Gozw2QNsq9l8P_L-BtjTpqZNqZ770XP7EojQEUAgMYCirxkboiAm0V2sVstLhcz3EruS4yWFfdc1jL5reRXTQr2-Hs2vk4SWTKuYyw50r_5cDpBQAM2PcYQygqtf6whM1TEPWCo")' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Routines Section */}
                    <section>
                        <div className="flex items-center justify-between mb-5 md:mb-6">
                            <h2 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold tracking-tight">My Routines</h2>
                            <Link href="/workouts" className="text-primary hover:underline font-medium flex items-center gap-1 text-sm cursor-pointer">
                                View all
                                <span className="material-symbols-outlined text-[16px] leading-none">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Routine Card 1 */}
                            <div className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md">
                                <div className="h-28 md:h-32 bg-slate-100 dark:bg-[#112217] relative bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5FbgfBIGDCBO1hAK1DOM8K3qfGc8uqyeKoegkFYYdI4DLDs0OgG1sS0ALDO8gobNIu8T-zliWUlMPDDu4N-77CqSDU6ybtR5bVjm8Ouk6hO7Jd0GGy9q64FhJT961yJW0cWbnQjRVaBx_J8ijRw4Ng8Ua4U8Kr488hzEqabQI1_B9Nfqf-eeTICtj4gTvJz-3UbotO16yIFm6jATifU0oi5BEGCfXHAK4cYsULQith_n-jG7z5895zdCv_Nk0fvjgHe5T4B1sbfw")' }}>
                                    <div className="absolute inset-0 bg-black/40" />
                                    <div className="absolute bottom-3 left-4">
                                        <span className="bg-primary text-[#102216] text-[10px] font-bold uppercase px-2 py-0.5 rounded">Hypertrophy</span>
                                    </div>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">Day-1: Upper Body</h3>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-3 md:mb-4">Focus on Chest, Shoulders, and Triceps.</p>
                                    <div className="flex items-center gap-3 md:gap-4 text-xs text-slate-400 dark:text-[#92c9a4]/70">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] leading-none">schedule</span>65 min
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] leading-none">format_list_bulleted</span>8 Exercises
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Routine Card 2 */}
                            <div className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer shadow-sm hover:shadow-md">
                                <div className="h-28 md:h-32 bg-slate-100 dark:bg-[#112217] relative bg-cover bg-center"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkP_q73w8hBJxcKKwXz1_4KU_Ni-QthfmI5IflucA_HhXBVIxEIjPOGgEFJ1UMbJGJZDJnRtKo2Hgk8krBrrdxm1zi1XLedBIdgdzyGFtRcltCskNDQp289RNqVUzarfHfLRzilXkKiIq3SC9BZuaw9p-Y-uykh7YQm2JA_3aLrwpxPi1he_9cPYxBtiqYsWYM0hvEZ4Brbn0GAhDpcwfjWzgG8NTsm1vtSjSnTPVdTJYHFzkkyX5irZI_gSE6UxrAfS8lAwnoUFI")' }}>
                                    <div className="absolute inset-0 bg-black/40" />
                                    <div className="absolute bottom-3 left-4">
                                        <span className="bg-primary text-[#102216] text-[10px] font-bold uppercase px-2 py-0.5 rounded">Strength</span>
                                    </div>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">Day-2: Lower Body</h3>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-3 md:mb-4">Compound movements for legs and core.</p>
                                    <div className="flex items-center gap-3 md:gap-4 text-xs text-slate-400 dark:text-[#92c9a4]/70">
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] leading-none">schedule</span>50 min
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="material-symbols-outlined text-[14px] leading-none">format_list_bulleted</span>6 Exercises
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Create New Routine */}
                            <Link href="/routines/create" className="group flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-[#23482f] rounded-xl p-6 md:p-8 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer min-h-[140px]">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-100 dark:bg-[#193322] flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-[#102216] transition-colors text-slate-500 dark:text-[#92c9a4]">
                                    <span className="material-symbols-outlined text-[26px] md:text-[28px] leading-none">add</span>
                                </div>
                                <h3 className="text-slate-900 dark:text-white font-bold text-sm md:text-base mb-1">Create New Routine</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs md:text-sm text-center">Design your custom workout plan</p>
                            </Link>
                        </div>
                    </section>

                    {/* Activity Streak */}
                    <section className="mt-8 md:mt-12">
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl p-4 md:p-6">
                            <div className="flex items-center justify-between mb-5 md:mb-6">
                                <h3 className="text-slate-900 dark:text-white font-bold text-base md:text-lg">Activity Streak</h3>
                                <div className="flex items-center gap-1.5 text-primary">
                                    <span className="material-symbols-outlined text-[20px] leading-none">local_fire_department</span>
                                    <span className="font-bold text-sm">12 Days</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-1 md:gap-2 overflow-x-auto pb-1 no-scrollbar">
                                {[
                                    { day: 'M', date: '12th', active: true },
                                    { day: 'T', date: '13th', active: true },
                                    { day: 'W', date: '14th', active: true },
                                    { day: 'T', date: '15th', active: true },
                                    { day: 'F', date: '16th', active: false },
                                    { day: 'S', date: '17th', active: false },
                                    { day: 'S', date: '18th', active: false },
                                ].map((d, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1.5 min-w-[36px]">
                                        <div className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs font-bold ${d.active ? 'bg-primary text-[#102216]' : 'bg-slate-100 dark:bg-[#112217] text-slate-400'}`}>
                                            {d.day}
                                        </div>
                                        <span className="text-[9px] md:text-[10px] text-slate-400">{d.date}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <footer className="py-6 md:py-8 text-center text-slate-500 dark:text-[#92c9a4]/40 text-xs md:text-sm border-t border-slate-200 dark:border-[#23482f] mt-8">
                    © 2024 Fitness Pro Track. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
