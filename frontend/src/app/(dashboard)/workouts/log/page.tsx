"use client";

import Link from 'next/link';

export default function LogExercisePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white transition-colors duration-200">
            <div className="layout-container flex h-full grow flex-col">
                {/* Top Navigation Bar */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-white/10 px-6 md:px-10 py-3 bg-white dark:bg-background-dark sticky top-0 z-50">
                    <div className="flex items-center gap-4">
                        <div className="text-primary size-6 flex items-center justify-center">
                            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>exercise</span>
                        </div>
                        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">FitnessTracker</h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-4 md:gap-8">
                        <div className="hidden md:flex items-center gap-9">
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
                            <Link className="text-primary text-sm font-medium leading-normal" href="/workouts">Workouts</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/exercises">Exercises</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/progress">Progress</Link>
                        </div>
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
                            data-alt="User profile avatar"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVix3OKhEqSxptJ_5yuDfxQ6mg1RhoqDK_kn3ANhyQvMbVR6Sup2aU9fmfDtgBsfzSkRLzk5RqJo6IhjdumcDOVvf14-HWtFNh3SXV_kniGL61fEI4GaTmU2tCCjYY3ccL4bn4AZSvB7JElNhhQh60LiQGTrVrCLHyJs520nYR4M7UGz9DRr-xegPZk9Li9P7UN_Vt59awpk4in6kZDMpqc1gzLk9yHip3W2CyCSN5mpJHSl0M0z2EmBHKbcveIcZcXJPeWF6sgW8")' }}
                        ></div>
                    </div>
                </header>

                <main className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4">
                        {/* Breadcrumbs */}
                        <div className="flex flex-wrap gap-2 py-2">
                            <Link className="text-primary/70 dark:text-primary/70 text-sm font-medium leading-normal hover:underline" href="/workouts">Workouts</Link>
                            <span className="text-slate-400 text-sm font-medium leading-normal">/</span>
                            <Link className="text-primary/70 dark:text-primary/70 text-sm font-medium leading-normal hover:underline" href="#">Routine Alpha</Link>
                            <span className="text-slate-400 text-sm font-medium leading-normal">/</span>
                            <span className="text-slate-900 dark:text-white text-sm font-medium leading-normal">Logging Exercise</span>
                        </div>

                        {/* Page Heading */}
                        <div className="flex flex-wrap justify-between items-center gap-3 py-6">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Incline Bench Press</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Target: Chest, Front Delts</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white text-sm font-bold transition-all">
                                    <span className="material-symbols-outlined mr-2" style={{ fontSize: '18px' }}>history</span>
                                    <span className="truncate">History</span>
                                </button>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-900 dark:text-white text-sm font-bold transition-all">
                                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>more_vert</span>
                                </button>
                            </div>
                        </div>

                        {/* Exercise Logging Table */}
                        <div className="py-3 @container">
                            <div className="flex overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#192b1e]">
                                <table className="flex-1 w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100 dark:bg-[#23482f]/50 border-b border-slate-200 dark:border-white/10">
                                            <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-primary/70 w-16 text-center">Set</th>
                                            <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-primary/70 hidden sm:table-cell">Previous</th>
                                            <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-primary/70">Weight (kg)</th>
                                            <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-primary/70">Reps</th>
                                            <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-primary/70 w-16 text-center">Done</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-white/5">
                                        {/* Set 1 */}
                                        <tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-4 text-center font-bold text-slate-400">1</td>
                                            <td className="px-4 py-4 hidden sm:table-cell">
                                                <span className="text-slate-400 text-sm italic">80kg x 10</span>
                                            </td>
                                            <td className="px-2 py-4">
                                                <input className="w-full max-w-[100px] bg-slate-100 dark:bg-background-dark border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium px-3 py-2" placeholder="0" type="number" defaultValue="82.5" />
                                            </td>
                                            <td className="px-2 py-4">
                                                <input className="w-full max-w-[80px] bg-slate-100 dark:bg-background-dark border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium px-3 py-2" placeholder="0" type="number" defaultValue="10" />
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <label className="relative flex items-center justify-center cursor-pointer">
                                                    <input defaultChecked className="peer sr-only" type="checkbox" />
                                                    <div className="size-6 border-2 border-slate-300 dark:border-white/20 rounded peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-white text-sm font-bold opacity-0 peer-checked:opacity-100">check</span>
                                                    </div>
                                                </label>
                                            </td>
                                        </tr>
                                        {/* Set 2 */}
                                        <tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-4 text-center font-bold text-slate-400">2</td>
                                            <td className="px-4 py-4 hidden sm:table-cell">
                                                <span className="text-slate-400 text-sm italic">80kg x 10</span>
                                            </td>
                                            <td className="px-2 py-4">
                                                <input className="w-full max-w-[100px] bg-slate-100 dark:bg-background-dark border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium px-3 py-2" placeholder="0" type="number" defaultValue="82.5" />
                                            </td>
                                            <td className="px-2 py-4">
                                                <input className="w-full max-w-[80px] bg-slate-100 dark:bg-background-dark border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium px-3 py-2" placeholder="0" type="number" defaultValue="8" />
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <label className="relative flex items-center justify-center cursor-pointer">
                                                    <input className="peer sr-only" type="checkbox" />
                                                    <div className="size-6 border-2 border-slate-300 dark:border-white/20 rounded peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-white text-sm font-bold opacity-0 peer-checked:opacity-100">check</span>
                                                    </div>
                                                </label>
                                            </td>
                                        </tr>
                                        {/* Set 3 (Empty) */}
                                        <tr className="group hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                            <td className="px-4 py-4 text-center font-bold text-slate-400">3</td>
                                            <td className="px-4 py-4 hidden sm:table-cell">
                                                <span className="text-slate-400 text-sm italic">80kg x 8</span>
                                            </td>
                                            <td className="px-2 py-4">
                                                <input className="w-full max-w-[100px] bg-slate-100 dark:bg-background-dark border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium px-3 py-2" placeholder="0" type="number" />
                                            </td>
                                            <td className="px-2 py-4">
                                                <input className="w-full max-w-[80px] bg-slate-100 dark:bg-background-dark border-none rounded-lg focus:ring-2 focus:ring-primary text-slate-900 dark:text-white font-medium px-3 py-2" placeholder="0" type="number" />
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <label className="relative flex items-center justify-center cursor-pointer">
                                                    <input className="peer sr-only" type="checkbox" />
                                                    <div className="size-6 border-2 border-slate-300 dark:border-white/20 rounded peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-white text-sm font-bold opacity-0 peer-checked:opacity-100">check</span>
                                                    </div>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Add Set Button */}
                        <div className="flex py-4 justify-start">
                            <button className="group flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-slate-200 dark:bg-white/10 hover:bg-primary/20 hover:text-primary text-slate-900 dark:text-white gap-2 transition-all font-bold">
                                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
                                <span className="truncate">Add Set</span>
                            </button>
                        </div>

                        {/* Rest Timer Suggestion */}
                        <div className="my-6 p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-4">
                            <div className="p-2 bg-primary rounded-lg text-background-dark">
                                <span className="material-symbols-outlined">timer</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold">Recommended Rest: 120s</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Based on your performance in the last set</p>
                            </div>
                            <button className="ml-auto px-4 py-1.5 bg-primary/20 text-primary text-sm font-bold rounded-lg hover:bg-primary/30 transition-colors">Start Timer</button>
                        </div>

                        {/* Large Save Button */}
                        <div className="mt-8 flex flex-col gap-4">
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-10 bg-primary text-background-dark text-lg font-black tracking-wide shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                <span className="truncate uppercase">Complete Exercise</span>
                            </button>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent border-2 border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 text-sm font-bold hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30 transition-all">
                                <span className="truncate">Cancel Logging</span>
                            </button>
                        </div>

                        {/* Performance Insights (Footer Card) */}
                        <div className="mt-12 mb-10 p-6 rounded-2xl bg-white dark:bg-[#192b1e] border border-slate-200 dark:border-white/10">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">insights</span>
                                Live Insights
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex flex-col gap-1 p-4 rounded-xl bg-slate-50 dark:bg-background-dark/50">
                                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Volume Today</span>
                                    <span className="text-2xl font-black">1,650 <span className="text-sm font-normal text-slate-500">kg</span></span>
                                    <span className="text-xs text-primary font-bold flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">trending_up</span> +5% vs Prev
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1 p-4 rounded-xl bg-slate-50 dark:bg-background-dark/50">
                                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Estimated 1RM</span>
                                    <span className="text-2xl font-black">105.0 <span className="text-sm font-normal text-slate-500">kg</span></span>
                                    <span className="text-xs text-slate-400 font-bold">Stable performance</span>
                                </div>
                                <div className="flex flex-col gap-1 p-4 rounded-xl bg-slate-50 dark:bg-background-dark/50">
                                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Set Consistency</span>
                                    <span className="text-2xl font-black">High</span>
                                    <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full mt-2">
                                        <div className="bg-primary h-full rounded-full w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Bottom Spacer */}
                <footer className="py-10 text-center opacity-30 text-xs text-slate-500 dark:text-slate-400">
                    © 2024 FitnessTracker. All metrics are calculated based on your profile inputs.
                </footer>
            </div>
        </div>
    );
}
