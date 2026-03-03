"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";
import Link from 'next/link';

export default function WorkoutsPage() {
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <Sidebar mobileOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
                {/* Top Header */}
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-4 md:px-8 py-4">
                    <div className="flex items-center gap-3">
                        <button onClick={openSidebar} className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors" aria-label="Open menu">
                            <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
                        </button>
                        <h2 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold tracking-tight">Workouts</h2>
                    </div>
                    <Link href="/routines/create" className="flex items-center justify-center gap-1.5 rounded-lg h-9 md:h-10 px-3 md:px-5 bg-primary text-background-dark text-sm font-bold hover:scale-105 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined text-[18px] leading-none">add</span>
                        <span className="hidden sm:inline">New Routine</span>
                    </Link>
                </header>

                <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
                    {/* Quick Start */}
                    <section className="mb-8 md:mb-12">
                        <h3 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-4 md:mb-6">Quick Start</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {/* Card 1 */}
                            <div className="bg-white dark:bg-[#193322] rounded-xl p-4 md:p-6 border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm group cursor-pointer">
                                <div className="flex justify-between items-start mb-4 md:mb-5">
                                    <div className="p-2.5 md:p-3 bg-primary/10 rounded-lg text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xl md:text-2xl leading-none">fitness_center</span>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-[#112217] text-slate-500 dark:text-[#92c9a4] text-[10px] md:text-xs font-bold px-2 py-1 rounded">Last done: 2 days ago</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1 md:mb-2">Push Day A</h4>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-4 md:mb-6">Chest, Shoulders, Triceps focus with heavy compounds.</p>
                                <Link href="/workouts/live" className="flex items-center justify-center w-full h-10 rounded-lg bg-primary text-background-dark font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all">
                                    Start Workout
                                </Link>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white dark:bg-[#193322] rounded-xl p-4 md:p-6 border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm group cursor-pointer">
                                <div className="flex justify-between items-start mb-4 md:mb-5">
                                    <div className="p-2.5 md:p-3 bg-primary/10 rounded-lg text-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-xl md:text-2xl leading-none">directions_run</span>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-[#112217] text-slate-500 dark:text-[#92c9a4] text-[10px] md:text-xs font-bold px-2 py-1 rounded">Last done: 5 days ago</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1 md:mb-2">Pull Day B</h4>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-4 md:mb-6">Back and Biceps focus with deadlifts.</p>
                                <Link href="/workouts/live" className="flex items-center justify-center w-full h-10 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#2d5c3c] font-bold text-sm transition-all">
                                    Start Workout
                                </Link>
                            </div>
                            {/* Empty Workout Card */}
                            <div className="bg-white dark:bg-[#193322] rounded-xl p-4 md:p-6 border-2 border-dashed border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm group cursor-pointer flex flex-col items-center justify-center text-center min-h-[160px]">
                                <div className="p-3 md:p-4 bg-slate-100 dark:bg-[#112217] rounded-full text-slate-400 mb-3 md:mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xl md:text-2xl leading-none">add</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-base md:text-lg mb-1">Empty Workout</h4>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-3 md:mb-4">Start from scratch without a template</p>
                                <Link href="/workouts/live" className="text-primary font-bold text-sm hover:underline">Launch Logger</Link>
                            </div>
                        </div>
                    </section>

                    {/* Recent History */}
                    <section>
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                            <h3 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold">Recent History</h3>
                            <button className="text-sm font-bold text-primary hover:underline cursor-pointer">View All</button>
                        </div>
                        <div className="bg-white dark:bg-[#193322] rounded-xl border border-slate-200 dark:border-[#23482f] overflow-hidden">
                            {[
                                { month: 'FEB', day: '12', title: 'Leg Day — Hypertrophy', duration: '65 mins', volume: '18,450 kg Vol', prs: '8 PRs', label: 'Est. 1RM Squat', value: '140 kg', change: '▲ 2.5kg', positive: true },
                                { month: 'FEB', day: '10', title: 'Push Day A', duration: '50 mins', volume: '12,300 kg Vol', prs: '2 PRs', label: 'Est. 1RM Bench', value: '95 kg', change: '—', positive: false },
                                { month: 'FEB', day: '08', title: 'Pull Day B', duration: '55 mins', volume: '14,100 kg Vol', prs: '', label: 'Est. 1RM Deadlift', value: '160 kg', change: '▲ 5kg', positive: true },
                            ].map((item, i, arr) => (
                                <div key={i} className={`flex items-center justify-between p-4 md:p-5 ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-[#23482f]' : ''} hover:bg-slate-50 dark:hover:bg-[#112217] transition-colors`}>
                                    <div className="flex items-center gap-3 md:gap-4 min-w-0">
                                        <div className="w-11 h-11 md:w-12 md:h-12 rounded-lg bg-slate-100 dark:bg-[#112217] flex flex-col items-center justify-center text-slate-500 dark:text-[#92c9a4] shrink-0">
                                            <span className="text-[9px] md:text-[10px] font-bold leading-none">{item.month}</span>
                                            <span className="text-base md:text-lg font-bold leading-tight">{item.day}</span>
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-slate-900 dark:text-white font-bold text-sm md:text-base truncate">{item.title}</h4>
                                            <div className="flex flex-wrap gap-1.5 md:gap-3 text-xs text-slate-500 dark:text-[#92c9a4] mt-0.5">
                                                <span>{item.duration}</span>
                                                <span>•</span>
                                                <span>{item.volume}</span>
                                                {item.prs && <><span>•</span><span>{item.prs}</span></>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 md:gap-4 shrink-0 ml-2">
                                        <div className="text-right hidden sm:block">
                                            <div className="text-xs text-slate-400">{item.label}</div>
                                            <div className="text-slate-900 dark:text-white font-bold text-sm">
                                                {item.value} <span className={`text-xs ${item.positive ? 'text-green-500' : 'text-slate-500'}`}>{item.change}</span>
                                            </div>
                                        </div>
                                        <button className="p-1.5 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[20px] leading-none">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
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
