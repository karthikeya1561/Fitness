"use client";

import Link from 'next/link';

export default function ProgressPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <div className="layout-container flex h-full grow flex-col">
                {/* Top Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#23482f] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">bar_chart</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">FitnessTracker</h2>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="flex items-center gap-9">
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/workouts">Workouts</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/exercises">Exercises</Link>
                            <Link className="text-primary text-sm font-medium leading-normal" href="/progress">Progress</Link>
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
                    <div className="mb-8">
                        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Your Progress</p>
                        <p className="text-slate-500 dark:text-[#92c9a4] text-base font-normal leading-normal">Track your fitness journey and milestones</p>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {/* Stat Card 1 */}
                        <div className="bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">fitness_center</span>
                                </div>
                                <span className="text-slate-500 dark:text-[#92c9a4] text-sm font-bold uppercase">Total Workouts</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">124</div>
                            <div className="text-xs text-green-500 font-bold mt-1">▲ 12 this month</div>
                        </div>
                        {/* Stat Card 2 */}
                        <div className="bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">monitor_weight</span>
                                </div>
                                <span className="text-slate-500 dark:text-[#92c9a4] text-sm font-bold uppercase">Volume Lifted</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">45.2k <span className="text-sm font-normal text-slate-500">kg</span></div>
                            <div className="text-xs text-green-500 font-bold mt-1">▲ 5.4k this month</div>
                        </div>
                        {/* Stat Card 3 */}
                        <div className="bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">timer</span>
                                </div>
                                <span className="text-slate-500 dark:text-[#92c9a4] text-sm font-bold uppercase">Time Active</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">96 <span className="text-sm font-normal text-slate-500">hrs</span></div>
                            <div className="text-xs text-slate-400 font-bold mt-1">Consistent performance</div>
                        </div>
                        {/* Stat Card 4 */}
                        <div className="bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">local_fire_department</span>
                                </div>
                                <span className="text-slate-500 dark:text-[#92c9a4] text-sm font-bold uppercase">Current Streak</span>
                            </div>
                            <div className="text-3xl font-black text-slate-900 dark:text-white">12 <span className="text-sm font-normal text-slate-500">days</span></div>
                            <div className="text-xs text-green-500 font-bold mt-1">Personal Best!</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Monthly Activity Chart (CSS Bar Chart) */}
                        <div className="lg:col-span-2 bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold">Monthly Activity</h3>
                                <select className="bg-slate-100 dark:bg-[#112217] border-none text-slate-900 dark:text-white text-sm rounded-lg px-3 py-1 outline-none">
                                    <option>Last 30 Days</option>
                                    <option>Last 3 Months</option>
                                    <option>This Year</option>
                                </select>
                            </div>
                            {/* Simple CSS Chart */}
                            <div className="h-64 flex items-end justify-between gap-2">
                                {[
                                    { day: '1', val: 40 }, { day: '3', val: 65 }, { day: '5', val: 30 }, { day: '7', val: 80 },
                                    { day: '9', val: 50 }, { day: '11', val: 90 }, { day: '13', val: 45 }, { day: '15', val: 70 },
                                    { day: '17', val: 60 }, { day: '19', val: 85 }, { day: '21', val: 55 }, { day: '23', val: 95 },
                                    { day: '25', val: 40 }, { day: '27', val: 75 }, { day: '29', val: 65 }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                                        <div className="w-full bg-slate-100 dark:bg-[#112217] rounded-t-sm relative h-48 flex items-end overflow-hidden">
                                            <div
                                                className="w-full bg-primary/80 group-hover:bg-primary transition-all duration-500 rounded-t-sm"
                                                style={{ height: `${item.val}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-[10px] text-slate-400">{item.day}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Personal Records */}
                        <div className="bg-white dark:bg-[#1a2e21] p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                            <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6">Personal Records</h3>
                            <div className="space-y-6">
                                {/* PR Item */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-xl">🏆</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Bench Press</h4>
                                            <span className="text-primary font-bold">120 kg</span>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Feb 02, 2024</p>
                                    </div>
                                </div>
                                {/* PR Item */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-xl">🥇</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Squat</h4>
                                            <span className="text-primary font-bold">165 kg</span>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Jan 28, 2024</p>
                                    </div>
                                </div>
                                {/* PR Item */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-xl">⚡</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-slate-900 dark:text-white font-bold text-sm">Deadlift</h4>
                                            <span className="text-primary font-bold">200 kg</span>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Jan 15, 2024</p>
                                    </div>
                                </div>
                                {/* PR Item */}
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-[#112217] flex items-center justify-center text-xl">🏃‍♂️</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="text-slate-900 dark:text-white font-bold text-sm">5k Run</h4>
                                            <span className="text-primary font-bold">22:15</span>
                                        </div>
                                        <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Dec 10, 2023</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-8 py-3 rounded-lg border border-slate-200 dark:border-[#23482f] text-slate-600 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-[#112217] transition-all">
                                View All Records
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
