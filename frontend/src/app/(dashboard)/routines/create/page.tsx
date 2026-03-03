"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";
import Link from 'next/link';

export default function CreateRoutinePage() {
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <Sidebar mobileOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
                {/* Top Header */}
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-4 md:px-8 py-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <button onClick={openSidebar} className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shrink-0" aria-label="Open menu">
                            <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
                        </button>
                        <div className="min-w-0">
                            <h2 className="text-slate-900 dark:text-white text-base md:text-xl font-bold tracking-tight truncate">Create New Routine</h2>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-xs hidden sm:block mt-0.5">Build your custom workout plan</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 shrink-0">
                        <button className="flex items-center gap-1.5 cursor-pointer justify-center rounded-lg h-9 md:h-10 px-3 md:px-4 bg-slate-100 dark:bg-[#23482f] text-slate-700 dark:text-white text-xs md:text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#2d5c3c] transition-colors">
                            <span className="material-symbols-outlined text-[16px] md:text-[18px] leading-none">close</span>
                            <span className="hidden sm:inline">Discard</span>
                        </button>
                        <button className="flex items-center justify-center cursor-pointer rounded-lg h-9 md:h-10 px-3 md:px-5 bg-primary text-background-dark text-xs md:text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap">
                            Save Routine
                        </button>
                    </div>
                </header>

                <div className="p-4 md:p-8 max-w-5xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                        {/* Left: Main Content */}
                        <div className="md:col-span-2 space-y-5 md:space-y-6">
                            {/* Routine Name Input */}
                            <div className="bg-white dark:bg-[#193322] p-4 md:p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                                <label className="flex flex-col w-full">
                                    <p className="text-slate-700 dark:text-white text-sm font-semibold mb-2">Routine Name</p>
                                    <input
                                        className="w-full rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-slate-200 dark:border-[#23482f] bg-slate-50 dark:bg-[#102216] h-11 md:h-12 placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 px-4 text-base font-medium transition-all"
                                        placeholder="e.g., Monday Morning Push Day"
                                    />
                                </label>
                                <div className="mt-4">
                                    <p className="text-slate-700 dark:text-white text-sm font-semibold mb-2">Description (Optional)</p>
                                    <textarea
                                        className="w-full rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border border-slate-200 dark:border-[#23482f] bg-slate-50 dark:bg-[#102216] h-20 md:h-24 placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 px-4 py-3 text-sm resize-none transition-all"
                                        placeholder="Focus on heavy compounds and progressive overload..."
                                    />
                                </div>
                            </div>

                            {/* Exercises Section */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-slate-900 dark:text-white text-base md:text-lg font-bold tracking-tight">Exercises</h3>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]">0 Added</span>
                                </div>
                                {/* Empty State */}
                                <div className="flex flex-col items-center justify-center py-12 md:py-16 px-6 md:px-8 bg-white dark:bg-[#193322] border-2 border-dashed border-slate-200 dark:border-[#23482f] rounded-2xl transition-all hover:border-primary/50">
                                    <div className="relative mb-4 md:mb-6">
                                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                                        <div className="relative bg-slate-100 dark:bg-[#102216] p-4 md:p-5 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-4xl md:text-5xl text-primary leading-none">fitness_center</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-900 dark:text-white text-lg md:text-xl font-bold text-center mb-2">Your routine is empty</p>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm text-center max-w-xs mb-6 md:mb-8">
                                        Search and add exercises from our library to get started.
                                    </p>
                                    <Link
                                        href="/exercises"
                                        className="flex items-center gap-2 justify-center rounded-lg h-10 md:h-11 px-5 md:px-7 bg-primary text-background-dark text-sm font-bold shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-[0.95] transition-all"
                                    >
                                        <span className="material-symbols-outlined text-[18px] leading-none">add</span>
                                        Add Exercise
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right: Settings sidebar */}
                        <div className="flex flex-col gap-5 md:gap-6">
                            <div className="bg-white dark:bg-[#193322] p-4 md:p-6 rounded-xl border border-slate-200 dark:border-[#23482f] shadow-sm">
                                <h3 className="text-slate-900 dark:text-white text-sm md:text-base font-bold mb-4">Routine Settings</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase tracking-wider mb-2">Target Muscle Groups</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Chest', 'Triceps', 'Shoulders'].map(m => (
                                                <span key={m} className="px-3 py-1 bg-slate-100 dark:bg-[#102216] rounded-full text-xs font-medium text-slate-600 dark:text-white/80">{m}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase tracking-wider mb-2">Estimated Duration</p>
                                        <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                            <span className="material-symbols-outlined text-primary text-[20px] leading-none">schedule</span>
                                            <span className="font-medium text-sm">-- mins</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100 dark:border-[#23482f]">
                                        <button className="w-full flex items-center justify-between text-slate-600 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
                                            <span className="text-sm font-medium">Advanced Settings</span>
                                            <span className="material-symbols-outlined text-[20px] leading-none">chevron_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary/10 border border-primary/20 p-4 md:p-5 rounded-xl">
                                <div className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary text-[20px] leading-none mt-0.5 shrink-0">tips_and_updates</span>
                                    <div>
                                        <p className="text-slate-900 dark:text-white text-sm font-bold mb-1">Pro Tip</p>
                                        <p className="text-slate-600 dark:text-[#92c9a4] text-xs leading-relaxed">
                                            Start with heavy compound movements when your energy is highest for the best strength gains.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
