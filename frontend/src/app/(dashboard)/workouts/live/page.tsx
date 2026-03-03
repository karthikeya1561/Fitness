"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";

export default function LiveWorkoutPage() {
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-white font-display">
            <Sidebar mobileOpen={sidebarOpen} onClose={closeSidebar} />
            <main className="flex-1 flex flex-col overflow-y-auto bg-background-dark min-w-0">
                {/* Live Header */}
                <header className="sticky top-0 z-20 border-b border-border-dark bg-[#112217]/90 backdrop-blur-md px-4 md:px-8 py-3 md:py-4">
                    <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 md:gap-4">
                        {/* Left: hamburger + title */}
                        <div className="flex items-center gap-2 min-w-0">
                            <button onClick={openSidebar} className="lg:hidden p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors shrink-0" aria-label="Open menu">
                                <span className="material-symbols-outlined text-[22px] leading-none">menu</span>
                            </button>
                            <div className="flex flex-col min-w-0">
                                <h2 className="text-white text-sm md:text-lg font-bold leading-tight truncate">Upper Body Power</h2>
                                <span className="text-[#92c9a4] text-[9px] md:text-xs uppercase tracking-wider font-semibold">Routine Session</span>
                            </div>
                        </div>
                        {/* Center: Timer */}
                        <div className="flex flex-col items-center shrink-0">
                            <div className="text-primary text-xl md:text-3xl font-mono font-bold tracking-tighter leading-none">00:42:15</div>
                            <span className="text-[9px] md:text-[10px] text-[#92c9a4]/60 uppercase tracking-wide mt-0.5">Duration</span>
                        </div>
                        {/* Right: Finish */}
                        <button className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-bold text-xs md:text-sm transition-all flex items-center gap-1.5 cursor-pointer shrink-0">
                            <span className="material-symbols-outlined text-[16px] md:text-[18px] leading-none">check_circle</span>
                            <span className="hidden sm:inline">Finish</span>
                            <span className="sm:hidden">Done</span>
                        </button>
                    </div>
                </header>

                {/* Workout Content */}
                <div className="p-3 md:p-8 max-w-4xl mx-auto w-full space-y-4 md:space-y-8 pb-8">
                    {/* Exercise 1 */}
                    <section className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-lg">
                        <div className="p-4 md:p-5 border-b border-border-dark flex items-center justify-between">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#112217] flex items-center justify-center border border-border-dark text-primary shrink-0">
                                    <span className="material-symbols-outlined text-xl md:text-2xl leading-none">fitness_center</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">Bench Press (Barbell)</h3>
                                    <p className="text-[#92c9a4] text-xs mt-0.5">Previous: 185 lbs × 8</p>
                                </div>
                            </div>
                            <button className="text-white/40 hover:text-white transition-colors cursor-pointer flex items-center justify-center">
                                <span className="material-symbols-outlined leading-none">more_vert</span>
                            </button>
                        </div>
                        <div className="p-3 md:p-5">
                            {/* Column Headers */}
                            <div className="grid grid-cols-12 gap-2 md:gap-4 mb-3 text-[9px] md:text-[10px] uppercase font-bold text-[#92c9a4]/60 px-1 md:px-2">
                                <div className="col-span-1 text-center">Set</div>
                                <div className="col-span-4">Prev</div>
                                <div className="col-span-3">Weight</div>
                                <div className="col-span-3">Reps</div>
                                <div className="col-span-1" />
                            </div>
                            {/* Set 1 (completed) */}
                            <div className="grid grid-cols-12 gap-2 md:gap-4 items-center mb-3 bg-primary/5 p-2 rounded-lg border border-primary/20">
                                <div className="col-span-1 text-center font-bold text-primary text-sm">1</div>
                                <div className="col-span-4 text-xs md:text-sm text-[#92c9a4]">175 × 10</div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center font-bold h-9 md:h-10 border-2 border-primary/40 text-sm" type="number" defaultValue="185" />
                                </div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center font-bold h-9 md:h-10 border-2 border-primary/40 text-sm" type="number" defaultValue="8" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="w-7 h-7 md:w-8 md:h-8 rounded bg-primary text-[#102216] flex items-center justify-center cursor-pointer">
                                        <span className="material-symbols-outlined text-sm leading-none font-bold">check</span>
                                    </button>
                                </div>
                            </div>
                            {/* Set 2 (pending) */}
                            <div className="grid grid-cols-12 gap-2 md:gap-4 items-center mb-3 bg-[#112217]/50 p-2 rounded-lg border border-transparent hover:border-primary/20 transition-all">
                                <div className="col-span-1 text-center font-bold text-[#92c9a4] text-sm">2</div>
                                <div className="col-span-4 text-xs md:text-sm text-[#92c9a4]">175 × 10</div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-9 md:h-10 text-sm" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-9 md:h-10 text-sm" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="w-7 h-7 md:w-8 md:h-8 rounded bg-[#23482f] text-white/40 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-[#102216] transition-all">
                                        <span className="material-symbols-outlined text-sm leading-none">check</span>
                                    </button>
                                </div>
                            </div>
                            <button className="w-full py-2.5 mt-2 border border-dashed border-border-dark rounded-lg text-sm text-[#92c9a4] hover:bg-white/5 hover:border-primary/30 transition-all cursor-pointer">
                                + Add Set
                            </button>
                        </div>
                    </section>

                    {/* Exercise 2 */}
                    <section className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-lg">
                        <div className="p-4 md:p-5 border-b border-border-dark flex items-center justify-between">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#112217] flex items-center justify-center border border-border-dark text-primary shrink-0">
                                    <span className="material-symbols-outlined text-xl md:text-2xl leading-none">exercise</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-base md:text-lg leading-tight">Lat Pulldown (Cable)</h3>
                                    <p className="text-[#92c9a4] text-xs mt-0.5">Previous: 140 lbs × 12</p>
                                </div>
                            </div>
                            <button className="text-white/40 hover:text-white transition-colors cursor-pointer flex items-center justify-center">
                                <span className="material-symbols-outlined leading-none">more_vert</span>
                            </button>
                        </div>
                        <div className="p-3 md:p-5">
                            <div className="grid grid-cols-12 gap-2 md:gap-4 mb-3 text-[9px] md:text-[10px] uppercase font-bold text-[#92c9a4]/60 px-1 md:px-2">
                                <div className="col-span-1 text-center">Set</div>
                                <div className="col-span-4">Prev</div>
                                <div className="col-span-3">Weight</div>
                                <div className="col-span-3">Reps</div>
                                <div className="col-span-1" />
                            </div>
                            <div className="grid grid-cols-12 gap-2 md:gap-4 items-center mb-3 bg-[#112217]/50 p-2 rounded-lg border border-transparent hover:border-primary/20 transition-all">
                                <div className="col-span-1 text-center font-bold text-[#92c9a4] text-sm">1</div>
                                <div className="col-span-4 text-xs md:text-sm text-[#92c9a4]">140 × 12</div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-9 md:h-10 text-sm" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-9 md:h-10 text-sm" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="w-7 h-7 md:w-8 md:h-8 rounded bg-[#23482f] text-white/40 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-[#102216] transition-all">
                                        <span className="material-symbols-outlined text-sm leading-none">check</span>
                                    </button>
                                </div>
                            </div>
                            <button className="w-full py-2.5 mt-2 border border-dashed border-border-dark rounded-lg text-sm text-[#92c9a4] hover:bg-white/5 hover:border-primary/30 transition-all cursor-pointer">
                                + Add Set
                            </button>
                        </div>
                    </section>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#193322] border border-primary/30 text-primary py-3.5 md:py-4 rounded-xl font-bold hover:bg-primary/10 transition-all shadow-lg cursor-pointer text-sm md:text-base">
                            <span className="material-symbols-outlined leading-none text-[20px]">add_circle</span>
                            Add Exercise
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/30 text-red-500 py-3.5 md:py-4 rounded-xl font-bold hover:bg-red-500/20 transition-all shadow-lg cursor-pointer text-sm md:text-base">
                            <span className="material-symbols-outlined leading-none text-[20px]">cancel</span>
                            Cancel Workout
                        </button>
                    </div>
                </div>

                <footer className="mt-auto py-5 md:py-6 text-center text-[#92c9a4]/40 text-xs md:text-sm border-t border-border-dark">
                    Session ID: 4829-U-2024 • Active Tracking Enabled
                </footer>
            </main>

            {/* Right Stats Panel — hidden on mobile/tablet, visible on xl+ */}
            <aside className="hidden xl:flex w-72 flex-shrink-0 border-l border-border-dark bg-[#112217] flex-col p-6 space-y-6">
                <h3 className="text-white font-bold text-lg border-b border-border-dark pb-4">Session Stats</h3>
                <div className="space-y-4">
                    <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
                        <div className="text-[#92c9a4] text-xs uppercase font-bold mb-1 tracking-wider">Total Volume</div>
                        <div className="text-2xl font-bold text-white mt-1">1,480 <span className="text-sm font-normal text-[#92c9a4]">lbs</span></div>
                    </div>
                    <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
                        <div className="text-[#92c9a4] text-xs uppercase font-bold mb-1 tracking-wider">Total Sets</div>
                        <div className="text-2xl font-bold text-white mt-1">4 <span className="text-sm font-normal text-[#92c9a4]">of 18</span></div>
                        <div className="w-full bg-[#112217] h-1.5 mt-3 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[22%] rounded-full" />
                        </div>
                    </div>
                    <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
                        <div className="text-[#92c9a4] text-xs uppercase font-bold mb-2 tracking-wider">Rest Timer</div>
                        <div className="flex items-center justify-between">
                            <div className="text-2xl font-mono font-bold text-primary">01:12</div>
                            <button className="text-white/40 hover:text-white flex items-center justify-center transition-colors">
                                <span className="material-symbols-outlined leading-none">refresh</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <span className="material-symbols-outlined text-[18px] leading-none">lightbulb</span>
                            <span className="text-xs font-bold uppercase tracking-wide">Pro Tip</span>
                        </div>
                        <p className="text-xs text-[#92c9a4] leading-relaxed">
                            Control your breathing during the Bench Press. Inhale on the way down, exhale as you push.
                        </p>
                    </div>
                </div>
            </aside>
        </div>
    );
}
