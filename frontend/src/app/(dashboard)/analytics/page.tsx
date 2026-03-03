"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";

export default function AnalyticsPage() {
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display">
            <Sidebar mobileOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-4 md:px-8 py-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <button onClick={openSidebar} className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shrink-0" aria-label="Open menu">
                            <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
                        </button>
                        <h2 className="text-slate-900 dark:text-white text-base md:text-xl font-bold tracking-tight truncate">Fitness Progress Analytics</h2>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4 shrink-0">
                        <div className="flex bg-slate-100 dark:bg-[#23482f] rounded-lg p-1">
                            <button className="px-2.5 md:px-4 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-[#193322] shadow-sm text-primary">7D</button>
                            <button className="px-2.5 md:px-4 py-1.5 text-xs font-bold rounded-md text-slate-500 dark:text-[#92c9a4]">30D</button>
                            <button className="hidden sm:block px-2.5 md:px-4 py-1.5 text-xs font-bold rounded-md text-slate-500 dark:text-[#92c9a4]">1Y</button>
                            <button className="hidden sm:block px-2.5 md:px-4 py-1.5 text-xs font-bold rounded-md text-slate-500 dark:text-[#92c9a4]">All</button>
                        </div>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-600 dark:text-white hover:text-primary transition-colors cursor-pointer flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px] leading-none">ios_share</span>
                        </button>
                    </div>
                </header>

                <div className="p-4 md:p-8 max-w-7xl mx-auto w-full">
                    {/* Key Metrics Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]/60">Bench Press PR</span>
                                <span className="material-symbols-outlined text-primary">military_tech</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">105 kg</span>
                                <span className="text-xs text-primary mb-1.5 flex items-center">+5 kg</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]/60">Squat PR</span>
                                <span className="material-symbols-outlined text-primary">military_tech</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">140 kg</span>
                                <span className="text-xs text-primary mb-1.5 flex items-center">+10 kg</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]/60">Weekly Volume</span>
                                <span className="material-symbols-outlined text-slate-400">fitness_center</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">12.4k</span>
                                <span className="text-xs text-slate-400 mb-1.5 font-medium">kg</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] p-5 rounded-xl shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]/60">Workout Time</span>
                                <span className="material-symbols-outlined text-slate-400">timer</span>
                            </div>
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-white">4.2h</span>
                                <span className="text-xs text-slate-400 mb-1.5 font-medium">this week</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                        {/* 1RM Chart Area */}
                        <div className="lg:col-span-2 bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h3 className="text-slate-900 dark:text-white font-bold text-lg">Estimated 1RM Over Time</h3>
                                    <p className="text-sm text-slate-500 dark:text-[#92c9a4]/60">Squat vs Bench Press (Last 6 Months)</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-medium">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                                        <span>Squat</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                        <span>Bench</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-64 relative w-full border-b border-l border-slate-100 dark:border-[#23482f]">
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path d="M 0 80 Q 20 75, 40 60 T 80 30 T 100 20" fill="none" stroke="#13ec5b" strokeLinecap="round" strokeWidth="3"></path>
                                    <path d="M 0 90 Q 25 85, 50 82 T 75 70 T 100 65" fill="none" stroke="#94a3b8" strokeLinecap="round" strokeWidth="3"></path>
                                </svg>
                                <div className="chart-line-dot left-[0%] top-[80%]"></div>
                                <div className="chart-line-dot left-[40%] top-[60%]"></div>
                                <div className="chart-line-dot left-[80%] top-[30%]"></div>
                                <div className="chart-line-dot left-[100%] top-[20%]"></div>
                            </div>
                            <div className="flex justify-between mt-4 text-[10px] uppercase font-bold text-slate-400 dark:text-[#92c9a4]/40 px-2">
                                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                            </div>
                        </div>

                        {/* Muscle Distribution Donut */}
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl p-6 flex flex-col">
                            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Muscle Distribution</h3>
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="relative w-48 h-48 rounded-full border-[16px] border-slate-100 dark:border-[#112217] flex items-center justify-center">
                                    <svg className="absolute inset-0 transform -rotate-90 w-full h-full" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" fill="transparent" r="42" stroke="#13ec5b" strokeDasharray="100 263.89" strokeDashoffset="0" strokeWidth="16"></circle>
                                        <circle cx="50" cy="50" fill="transparent" r="42" stroke="#92c9a4" strokeDasharray="70 263.89" strokeDashoffset="-100" strokeWidth="16"></circle>
                                        <circle cx="50" cy="50" fill="transparent" r="42" stroke="#065f46" strokeDasharray="93.89 263.89" strokeDashoffset="-170" strokeWidth="16"></circle>
                                    </svg>
                                    <div className="text-center">
                                        <span className="block text-2xl font-bold">12</span>
                                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">Focus Groups</span>
                                    </div>
                                </div>
                                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2 w-full text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded bg-primary"></span>
                                        <span className="text-slate-600 dark:text-[#92c9a4]">Chest (38%)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded bg-[#92c9a4]"></span>
                                        <span className="text-slate-600 dark:text-[#92c9a4]">Legs (26%)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded bg-[#065f46]"></span>
                                        <span className="text-slate-600 dark:text-[#92c9a4]">Back (36%)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Workout Frequency Bar Chart */}
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl p-6">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg">Workout Frequency</h3>
                                <p className="text-xs text-primary font-bold">AVG: 4.5/week</p>
                            </div>
                            <div className="flex items-end justify-between h-48 gap-3 px-2">
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[60%]"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">MON</span>
                                </div>
                                {/* Other bars */}
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[85%]"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">TUE</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[40%] opacity-50"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">WED</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[75%]"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">THU</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[95%]"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">FRI</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[20%] opacity-50"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">SAT</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                                    <div className="chart-bar w-full h-[15%] opacity-50"></div>
                                    <span className="text-[10px] text-slate-400 font-bold">SUN</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Records List */}
                        <div className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl p-6">
                            <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-6">Recent Records</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-100 dark:border-[#23482f]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">trending_up</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Deadlift</p>
                                            <p className="text-xs text-slate-500">Yesterday</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-sm">185 kg</p>
                                        <p className="text-[10px] text-primary">+15 kg</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-100 dark:border-[#23482f]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">trending_up</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Shoulder Press</p>
                                            <p className="text-xs text-slate-500">3 days ago</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-sm">65 kg</p>
                                        <p className="text-[10px] text-primary">+2.5 kg</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-[#112217] border border-slate-100 dark:border-[#23482f]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined">trending_up</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Barbell Row</p>
                                            <p className="text-xs text-slate-500">May 12, 2024</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-sm">90 kg</p>
                                        <p className="text-[10px] text-primary">+5 kg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="mt-auto py-8 text-center text-slate-500 dark:text-[#92c9a4]/40 text-sm border-t border-slate-200 dark:border-[#23482f]">
                    © 2024 Fitness Pro Track. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
