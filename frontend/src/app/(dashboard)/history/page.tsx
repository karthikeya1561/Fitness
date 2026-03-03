"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";

export default function HistoryPage() {
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display">
            <Sidebar mobileOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-4 md:px-8 py-4">
                    <div className="flex items-center gap-3">
                        <button onClick={openSidebar} className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors" aria-label="Open menu">
                            <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
                        </button>
                        <h2 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold tracking-tight">Workout History</h2>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="relative hidden md:flex items-center bg-slate-100 dark:bg-[#23482f] rounded-lg px-3 py-2 cursor-pointer border border-transparent hover:border-primary/30 transition-all">
                            <span className="material-symbols-outlined text-slate-400 dark:text-[#92c9a4] text-[18px] leading-none mr-2">calendar_month</span>
                            <span className="text-sm font-medium text-slate-600 dark:text-white mr-3">October 2024</span>
                            <span className="material-symbols-outlined text-slate-400 text-[18px] leading-none">keyboard_arrow_down</span>
                        </div>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-600 dark:text-white hover:text-primary transition-colors cursor-pointer flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px] leading-none">tune</span>
                        </button>
                    </div>
                </header>
                <div className="p-4 md:p-8 max-w-5xl mx-auto w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl">
                            <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-1">Workouts</p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">18</h3>
                            <p className="text-primary text-[10px] font-medium flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-xs">trending_up</span> +3 from last month
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl">
                            <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-1">Total Volume</p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">124,580 kg</h3>
                            <p className="text-primary text-[10px] font-medium flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-xs">trending_up</span> +12% increase
                            </p>
                        </div>
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl">
                            <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-1">Total Time</p>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">22h 45m</h3>
                            <p className="text-slate-400 text-[10px] font-medium flex items-center gap-1 mt-1">
                                <span className="material-symbols-outlined text-xs">horizontal_rule</span> Steady pace
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-slate-400 dark:text-[#92c9a4]/60 text-sm font-semibold uppercase tracking-widest px-1">Recent Sessions</h3>
                        <details className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden transition-all hover:border-primary/40">
                            <summary className="list-none cursor-pointer p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary">
                                            <span className="text-xs font-bold leading-none">24</span>
                                            <span className="text-[10px] uppercase font-medium">Oct</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Day-1: Upper Body</h4>
                                            <p className="text-sm text-slate-500 dark:text-[#92c9a4]">Thursday • 08:30 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 md:gap-12">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Duration</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">65 min</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Volume</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">8,420 kg</p>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                    </div>
                                </div>
                            </summary>
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-[#23482f]">
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-primary font-bold text-sm mb-3">Bench Press (Barbell)</h5>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="text-left text-slate-400 text-xs">
                                                        <th className="pb-2 font-medium w-12">SET</th>
                                                        <th className="pb-2 font-medium">WEIGHT</th>
                                                        <th className="pb-2 font-medium">REPS</th>
                                                        <th className="pb-2 font-medium">1RM EST.</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-600 dark:text-white/80">
                                                    <tr className="border-b border-slate-50 dark:border-white/5">
                                                        <td className="py-2 font-medium">1</td>
                                                        <td className="py-2">80 kg</td>
                                                        <td className="py-2">10</td>
                                                        <td className="py-2 text-slate-400">107 kg</td>
                                                    </tr>
                                                    <tr className="border-b border-slate-50 dark:border-white/5">
                                                        <td className="py-2 font-medium">2</td>
                                                        <td className="py-2">85 kg</td>
                                                        <td className="py-2">8</td>
                                                        <td className="py-2 text-slate-400">108 kg</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 font-medium">3</td>
                                                        <td className="py-2">90 kg</td>
                                                        <td className="py-2">5</td>
                                                        <td className="py-2 text-slate-400">105 kg</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="text-primary font-bold text-sm mb-3">Incline Dumbbell Press</h5>
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="text-left text-slate-400 text-xs">
                                                        <th className="pb-2 font-medium w-12">SET</th>
                                                        <th className="pb-2 font-medium">WEIGHT</th>
                                                        <th className="pb-2 font-medium">REPS</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-slate-600 dark:text-white/80">
                                                    <tr className="border-b border-slate-50 dark:border-white/5">
                                                        <td className="py-2 font-medium">1</td>
                                                        <td className="py-2">28 kg</td>
                                                        <td className="py-2">12</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-2 font-medium">2</td>
                                                        <td className="py-2">28 kg</td>
                                                        <td className="py-2">11</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden transition-all hover:border-primary/40">
                            <summary className="list-none cursor-pointer p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#112217] flex flex-col items-center justify-center text-slate-400">
                                            <span className="text-xs font-bold leading-none">22</span>
                                            <span className="text-[10px] uppercase font-medium">Oct</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Empty Workout</h4>
                                            <p className="text-sm text-slate-500 dark:text-[#92c9a4]">Tuesday • 05:15 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 md:gap-12">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Duration</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">42 min</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Volume</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">3,150 kg</p>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                    </div>
                                </div>
                            </summary>
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-[#23482f]">
                                <p className="text-sm text-slate-500 py-4 italic">Detailed exercise data logged during the session...</p>
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden transition-all hover:border-primary/40">
                            <summary className="list-none cursor-pointer p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary">
                                            <span className="text-xs font-bold leading-none">21</span>
                                            <span className="text-[10px] uppercase font-medium">Oct</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Day-2: Lower Body</h4>
                                            <p className="text-sm text-slate-500 dark:text-[#92c9a4]">Monday • 07:00 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 md:gap-12">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Duration</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">58 min</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Volume</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">12,100 kg</p>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                    </div>
                                </div>
                            </summary>
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-[#23482f]">
                                <p className="text-sm text-slate-500 py-4 italic">No detailed exercises to show for this summary view.</p>
                            </div>
                        </details>
                        <details className="group bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden transition-all hover:border-primary/40">
                            <summary className="list-none cursor-pointer p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary">
                                            <span className="text-xs font-bold leading-none">19</span>
                                            <span className="text-[10px] uppercase font-medium">Oct</span>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Full Body Blast</h4>
                                            <p className="text-sm text-slate-500 dark:text-[#92c9a4]">Saturday • 10:30 AM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-8 md:gap-12">
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Duration</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">75 min</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] text-slate-400 uppercase font-semibold">Volume</p>
                                            <p className="text-sm font-bold text-slate-700 dark:text-white">6,800 kg</p>
                                        </div>
                                        <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                    </div>
                                </div>
                            </summary>
                            <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-[#23482f]">
                                <p className="text-sm text-slate-500 py-4 italic">Detailed exercise data logged during the session...</p>
                            </div>
                        </details>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-[#23482f] text-slate-600 dark:text-[#92c9a4] font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-sm cursor-pointer">
                            Load Older Workouts
                        </button>
                    </div>
                </div>
                <footer className="mt-auto py-8 text-center text-slate-500 dark:text-[#92c9a4]/40 text-sm border-t border-slate-200 dark:border-[#23482f]">
                    © 2024 Fitness Pro Track. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
