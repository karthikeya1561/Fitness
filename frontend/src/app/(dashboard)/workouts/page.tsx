"use client";

import Link from 'next/link';

export default function WorkoutsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <div className="layout-container flex h-full grow flex-col">
                {/* Top Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#23482f] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">fitness_center</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">FitnessTracker</h2>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="flex items-center gap-9">
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
                            <Link className="text-primary text-sm font-medium leading-normal" href="/workouts">Workouts</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/exercises">Exercises</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/progress">Progress</Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#23482f] hover:bg-primary/20 transition-all cursor-pointer">
                                <span className="material-symbols-outlined text-xl">notifications</span>
                            </button>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
                                data-alt="User profile avatar portrait"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARpNT0cRlD9wK_07832xH3NQO5-c89ATLUXCRwPeHAX2s-sEgsrueeiqZQOW_ufnfsAqgyPDuRwraFS6fSNg5RIrU5YUfY-FdduaTENwgvB2S1blyOBIEgHzbY971iwQkVxBodw7Z4STrgMz2CUU0YYRUvxo-UoubhTypM5pBJrtXGGosSlajuYVmIiO16SAma6ZuViytHnCaEOwYOZg7EFOOjF9znWnK_Suazj8b6fOfuxA5aKzL0VPtPRRCgoEXyy0QSs687nYU")' }}
                            ></div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 flex flex-col max-w-[1280px] mx-auto w-full px-4 md:px-10 py-8">
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
                        <div className="flex min-w-72 flex-col gap-1">
                            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Workouts</p>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-base font-normal leading-normal">Manage your routines and view your history</p>
                        </div>
                        <Link href="/routines/create" className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">add</span>
                            <span className="truncate">New Routine</span>
                        </Link>
                    </div>

                    {/* Active Workouts / Quick Start */}
                    <section className="mb-12">
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">Quick Start</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white dark:bg-[#1a2e21] rounded-xl p-6 border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm group cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <span className="material-symbols-outlined text-2xl">fitness_center</span>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-[#112217] text-slate-500 dark:text-[#92c9a4] text-xs font-bold px-2 py-1 rounded">Last done: 2 days ago</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Push Day A</h4>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-6">Chest, Shoulders, Triceps focus with heavy compounds.</p>
                                <button className="w-full h-10 rounded-lg bg-primary text-background-dark font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all">Start Workout</button>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-white dark:bg-[#1a2e21] rounded-xl p-6 border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm group cursor-pointer">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                        <span className="material-symbols-outlined text-2xl">directions_run</span>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-[#112217] text-slate-500 dark:text-[#92c9a4] text-xs font-bold px-2 py-1 rounded">Last done: 5 days ago</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Pull Day B</h4>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-6">Back and Biceps focus with deadlifts.</p>
                                <button className="w-full h-10 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#2d5c3c] font-bold text-sm transition-all">Start Workout</button>
                            </div>
                            {/* Empty Workout Card */}
                            <div className="bg-white dark:bg-[#1a2e21] rounded-xl p-6 border border-2 border-dashed border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm group cursor-pointer flex flex-col items-center justify-center text-center">
                                <div className="p-3 bg-slate-100 dark:bg-[#112217] rounded-full text-slate-400 mb-4 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                                    <span className="material-symbols-outlined text-2xl">add</span>
                                </div>
                                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-1">Empty Workout</h4>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-sm mb-4">Start from scratch without a template</p>
                                <Link href="/workouts/live" className="text-primary font-bold text-sm hover:underline">Launch Logger</Link>
                            </div>
                        </div>
                    </section>

                    {/* Recent History */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold">Recent History</h3>
                            <button className="text-sm font-bold text-primary hover:underline">View All</button>
                        </div>
                        <div className="bg-white dark:bg-[#1a2e21] rounded-xl border border-slate-200 dark:border-[#23482f] overflow-hidden">
                            {/* List Item 1 */}
                            <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-slate-100 dark:border-[#23482f] hover:bg-slate-50 dark:hover:bg-[#112217] transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-slate-500 dark:text-[#92c9a4]">
                                        <span className="text-xs font-bold">FEB</span>
                                        <span className="text-lg font-bold block -mt-1">12</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 dark:text-white font-bold">Leg Day - Hypertrophy</h4>
                                        <div className="flex gap-3 text-xs text-slate-500 dark:text-[#92c9a4]">
                                            <span>65 mins</span>
                                            <span>•</span>
                                            <span>18,450 kg Vol</span>
                                            <span>•</span>
                                            <span>8 PRs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right">
                                        <div className="text-xs text-slate-400">Est. 1RM Squat</div>
                                        <div className="text-slate-900 dark:text-white font-bold">140 kg <span className="text-green-500 text-xs">▲ 2.5kg</span></div>
                                    </div>
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            {/* List Item 2 */}
                            <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-slate-100 dark:border-[#23482f] hover:bg-slate-50 dark:hover:bg-[#112217] transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-slate-500 dark:text-[#92c9a4]">
                                        <span className="text-xs font-bold">FEB</span>
                                        <span className="text-lg font-bold block -mt-1">10</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 dark:text-white font-bold">Push Day A</h4>
                                        <div className="flex gap-3 text-xs text-slate-500 dark:text-[#92c9a4]">
                                            <span>50 mins</span>
                                            <span>•</span>
                                            <span>12,300 kg Vol</span>
                                            <span>•</span>
                                            <span>2 PRs</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right">
                                        <div className="text-xs text-slate-400">Est. 1RM Bench</div>
                                        <div className="text-slate-900 dark:text-white font-bold">95 kg <span className="text-slate-500 text-xs">-</span></div>
                                    </div>
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            {/* List Item 3 */}
                            <div className="flex flex-col md:flex-row items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-[#112217] transition-colors">
                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-slate-500 dark:text-[#92c9a4]">
                                        <span className="text-xs font-bold">FEB</span>
                                        <span className="text-lg font-bold block -mt-1">08</span>
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 dark:text-white font-bold">Pull Day B</h4>
                                        <div className="flex gap-3 text-xs text-slate-500 dark:text-[#92c9a4]">
                                            <span>55 mins</span>
                                            <span>•</span>
                                            <span>14,100 kg Vol</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end">
                                    <div className="text-right">
                                        <div className="text-xs text-slate-400">Est. 1RM Deadlift</div>
                                        <div className="text-slate-900 dark:text-white font-bold">160 kg <span className="text-green-500 text-xs">▲ 5kg</span></div>
                                    </div>
                                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
