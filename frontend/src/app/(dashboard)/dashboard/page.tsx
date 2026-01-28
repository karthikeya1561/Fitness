"use client";

import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display">
            <Sidebar />
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Top Navbar */}
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-8 py-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Workout Dashboard</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#92c9a4] text-xl">search</span>
                            <input
                                className="bg-slate-100 dark:bg-[#23482f] border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary outline-none transition-all dark:placeholder-[#92c9a4]"
                                placeholder="Search exercises..."
                                type="text"
                            />
                        </div>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-600 dark:text-white hover:text-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-gray-400 text-xl font-normal">notifications</span>
                        </button>
                        <Link href="/calendar" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer text-slate-900 dark:text-white">
                            <span className="material-symbols-outlined text-xl font-normal">calendar_today</span>
                        </Link>
                        <div className="w-px h-8 bg-slate-200 dark:bg-white/10 mx-2"></div>
                    </div>
                </header>

                <div className="p-8 max-w-6xl mx-auto w-full">
                    {/* Headline */}
                    <div className="mb-8">
                        <h1 className="text-slate-900 dark:text-white text-4xl font-bold tracking-tight mb-2">Welcome back, Alex!</h1>
                        <p className="text-slate-500 dark:text-[#92c9a4]">You&apos;ve completed 4 workouts this week. Keep up the momentum!</p>
                    </div>

                    {/* Hero Section: Start Empty Workout */}
                    <section className="mb-12">
                        <div className="relative overflow-hidden rounded-xl bg-slate-900 dark:bg-[#193322] border border-slate-800 dark:border-[#23482f] p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
                            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                                <div className="w-full h-full bg-gradient-to-l from-primary to-transparent"></div>
                            </div>
                            <div className="relative z-10 w-full md:w-2/3">
                                <h2 className="text-white text-3xl font-bold mb-3">Start Empty Workout</h2>
                                <p className="text-slate-400 dark:text-[#92c9a4] text-lg mb-6 max-w-md">Begin a session without a predefined routine. Log exercises, sets, and reps as you go.</p>
                                <Link href="/workouts/live" className="flex items-center gap-2 bg-primary text-[#102216] px-8 py-3.5 rounded-lg font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer w-fit">
                                    <span className="material-symbols-outlined">play_circle</span>
                                    Start Workout
                                </Link>
                            </div>
                            <div className="hidden md:block relative z-10 w-1/3">
                                <div
                                    className="w-full aspect-square bg-center bg-cover rounded-xl shadow-2xl rotate-3"
                                    data-alt="Dumbbells and workout equipment in a gym"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFKb48dyS0Gg_gmoZ5Im6KgtYNYu4sTaBSi0SFr9lE2xnGUaUbU7MYiV6dBid43eVoPxZCAN-kYDzmK8XgCxhCBLZv1y62g58riyuIvmyhVfXEvFEspdTktCCw1hbofHLnR975Gozw2QNsq9l8P_L-BtjTpqZNqZ770XP7EojQEUAgMYCirxkboiAm0V2sVstLhcz3EruS4yWFfdc1jL5reRXTQr2-Hs2vk4SWTKuYyw50r_5cDpBQAM2PcYQygqtf6whM1TEPWCo")' }}
                                ></div>
                            </div>
                        </div>
                    </section>

                    {/* Routines Section */}
                    <section>
                        <div className="flex items-center justify-between mb-6 px-1">
                            <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">My Routines</h2>
                            <button className="text-primary hover:underline font-medium flex items-center gap-1 cursor-pointer">
                                View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Routine Card 1 */}
                            <div className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
                                <div
                                    className="h-32 bg-slate-100 dark:bg-[#112217] relative bg-cover bg-center"
                                    data-alt="Close up of a muscular arm lifting weights"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5FbgfBIGDCBO1hAK1DOM8K3qfGc8uqyeKoegkFYYdI4DLDs0OgG1sS0ALDO8gobNIu8T-zliWUlMPDDu4N-77CqSDU6ybtR5bVjm8Ouk6hO7Jd0GGy9q64FhJT961yJW0cWbnQjRVaBx_J8ijRw4Ng8Ua4U8Kr488hzEqabQI1_B9Nfqf-eeTICtj4gTvJz-3UbotO16yIFm6jATifU0oi5BEGCfXHAK4cYsULQith_n-jG7z5895zdCv_Nk0fvjgHe5T4B1sbfw")' }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute bottom-3 left-4">
                                        <span className="bg-primary text-[#102216] text-[10px] font-bold uppercase px-2 py-0.5 rounded">Hypertrophy</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-1">Day-1: Upper Body</h3>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-4">Focus on Chest, Shoulders, and Triceps.</p>
                                    <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-[#92c9a4]/60">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            65 min
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                                            8 Exercises
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Routine Card 2 */}
                            <div className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
                                <div
                                    className="h-32 bg-slate-100 dark:bg-[#112217] relative bg-cover bg-center"
                                    data-alt="Squat rack and barbell in a powerlifting gym"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkP_q73w8hBJxcKKwXz1_4KU_Ni-QthfmI5IflucA_HhXBVIxEIjPOGgEFJ1UMbJGJZDJnRtKo2Hgk8krBrrdxm1zi1XLedBIdgdzyGFtRcltCskNDQp289RNqVUzarfHfLRzilXkKiIq3SC9BZuaw9p-Y-uykh7YQm2JA_3aLrwpxPi1he_9cPYxBtiqYsWYM0hvEZ4Brbn0GAhDpcwfjWzgG8NTsm1vtSjSnTPVdTJYHFzkkyX5irZI_gSE6UxrAfS8lAwnoUFI")' }}
                                >
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute bottom-3 left-4">
                                        <span className="bg-primary text-[#102216] text-[10px] font-bold uppercase px-2 py-0.5 rounded">Strength</span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-1">Day-2: Lower Body</h3>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-4">Compound movements for legs and core.</p>
                                    <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-[#92c9a4]/60">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">schedule</span>
                                            50 min
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">format_list_bulleted</span>
                                            6 Exercises
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Create New Routine Card */}
                            <Link href="/routines/create" className="group flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-[#23482f] rounded-xl p-8 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-[#193322] flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-[#102216] transition-colors">
                                    <span className="material-symbols-outlined text-3xl font-bold">add</span>
                                </div>
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Create New Routine</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm text-center">Design your custom workout plan</p>
                            </Link>
                        </div>
                    </section>

                    {/* Activity Summary - Extra consistency feature */}
                    <section className="mt-12">
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg">Activity Streak</h3>
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                    <span className="font-bold">12 Days</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 overflow-x-auto pb-2">
                                {/* Simple streak visualization */}
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[#102216] text-xs font-bold">M</div>
                                    <span className="text-[10px] text-slate-400">12th</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[#102216] text-xs font-bold">T</div>
                                    <span className="text-[10px] text-slate-400">13th</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[#102216] text-xs font-bold">W</div>
                                    <span className="text-[10px] text-slate-400">14th</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[#102216] text-xs font-bold">T</div>
                                    <span className="text-[10px] text-slate-400">15th</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-slate-400 text-xs font-bold">F</div>
                                    <span className="text-[10px] text-slate-400">16th</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-slate-400 text-xs font-bold">S</div>
                                    <span className="text-[10px] text-slate-400">17th</span>
                                </div>
                                <div className="flex flex-col items-center gap-2 min-w-[40px]">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-slate-400 text-xs font-bold">S</div>
                                    <span className="text-[10px] text-slate-400">18th</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="mt-auto py-8 text-center text-slate-500 dark:text-[#92c9a4]/40 text-sm border-t border-slate-200 dark:border-[#23482f] mt-12">
                        © 2024 Fitness Pro Track. All rights reserved.
                    </footer>
                </div>
            </main>
        </div>
    );
}
