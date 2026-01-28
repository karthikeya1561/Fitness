"use client";

import { Sidebar } from "@/components/Sidebar";

export default function LiveWorkoutPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-white min-h-screen font-display">
            <aside className="w-20 lg:w-64 flex-shrink-0 border-r border-border-dark bg-[#112217] flex flex-col h-full transition-all">
                <div className="p-4 lg:p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-10 overflow-hidden">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 lg:size-12 border-2 border-primary flex-shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBavZ0ImoFujtb4yMeSKsAnleHc4AAR2LUym5T1BVJ95LlTCgtLcMctMCeZzN05fjQRXoxiM1_7HuxlwbvuJ9AUsRWg-9nBWp8JDVochOE1L8L8tjppiZk0iMYYWhanvL0w9s0LMrrh8FpPPBZgfzH_HsB07CD_cgFeVsasPK8DgJxk9IclVmEmQ0lmY2Yyz37BwUbJDkP5vhePJTySgoI-Fy21EDtHwNnevfapCnqxtMHPhN-ItEeFpJtS0yDXLvcuEOFljKiNIIk")' }}></div>
                        <div className="hidden lg:flex flex-col">
                            <h1 className="text-white text-base font-semibold leading-tight truncate">Alex Rivera</h1>
                            <p className="text-[#92c9a4] text-xs font-normal">Session in progress</p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-2 flex-1">
                        <a className="flex items-center justify-center lg:justify-start gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 transition-colors" href="/dashboard">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm hidden lg:block">Dashboard</span>
                        </a>
                        <a className="flex items-center justify-center lg:justify-start gap-3 px-3 py-2.5 rounded-lg bg-primary/20 text-primary font-medium" href="#">
                            <span className="material-symbols-outlined text-primary">timer</span>
                            <span className="text-sm hidden lg:block">Live Workout</span>
                        </a>
                        <a className="flex items-center justify-center lg:justify-start gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 transition-colors" href="/exercises">
                            <span className="material-symbols-outlined">fitness_center</span>
                            <span className="text-sm hidden lg:block">Exercises</span>
                        </a>
                    </nav>
                </div>
            </aside>
            <main className="flex-1 flex flex-col overflow-y-auto bg-background-dark">
                <header className="sticky top-0 z-20 border-b border-border-dark bg-[#112217]/90 backdrop-blur-md px-4 lg:px-8 py-4">
                    <div className="max-w-4xl mx-auto flex items-center justify-between">
                        <div className="flex flex-col">
                            <h2 className="text-white text-lg font-bold">Upper Body Power</h2>
                            <span className="text-[#92c9a4] text-xs uppercase tracking-wider font-semibold">Routine Session</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-primary text-3xl font-mono font-bold tracking-tighter">00:42:15</div>
                            <span className="text-xs text-[#92c9a4]/60 uppercase">Duration</span>
                        </div>
                        <button className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/20 px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 cursor-pointer">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            Finish
                        </button>
                    </div>
                </header>
                <div className="p-4 lg:p-8 max-w-4xl mx-auto w-full space-y-8">
                    <section className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-lg">
                        <div className="p-5 border-b border-border-dark flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#112217] flex items-center justify-center border border-border-dark text-primary">
                                    <span className="material-symbols-outlined text-2xl">fitness_center</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Bench Press (Barbell)</h3>
                                    <p className="text-[#92c9a4] text-xs">Previous: 185 lbs x 8</p>
                                </div>
                            </div>
                            <button className="text-white/40 hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                        </div>
                        <div className="p-5">
                            <div className="grid grid-cols-12 gap-4 mb-4 text-[10px] uppercase font-bold text-[#92c9a4]/60 px-2">
                                <div className="col-span-1 text-center">Set</div>
                                <div className="col-span-4">Previous</div>
                                <div className="col-span-3">Weight (lbs)</div>
                                <div className="col-span-3">Reps</div>
                                <div className="col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 items-center mb-3 bg-[#112217]/50 p-2 rounded-lg border border-transparent hover:border-primary/30 transition-all">
                                <div className="col-span-1 text-center font-bold text-primary">1</div>
                                <div className="col-span-4 text-sm text-[#92c9a4]">175 lbs x 10</div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center font-bold h-10 border-2" type="number" defaultValue="185" />
                                </div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center font-bold h-10 border-2" type="number" defaultValue="8" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="w-8 h-8 rounded bg-primary text-[#102216] flex items-center justify-center cursor-pointer">
                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 items-center mb-3 bg-[#112217]/50 p-2 rounded-lg border border-transparent hover:border-primary/30 transition-all">
                                <div className="col-span-1 text-center font-bold text-primary">2</div>
                                <div className="col-span-4 text-sm text-[#92c9a4]">175 lbs x 10</div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-10" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-10" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="w-8 h-8 rounded bg-[#23482f] text-white/40 flex items-center justify-center cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </button>
                                </div>
                            </div>
                            <button className="w-full py-2 mt-2 border border-dashed border-border-dark rounded-lg text-sm text-[#92c9a4] hover:bg-white/5 transition-all cursor-pointer">
                                + Add Set
                            </button>
                        </div>
                    </section>
                    <section className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-lg">
                        <div className="p-5 border-b border-border-dark flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-[#112217] flex items-center justify-center border border-border-dark text-primary">
                                    <span className="material-symbols-outlined text-2xl">exercise</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">Lat Pulldown (Cable)</h3>
                                    <p className="text-[#92c9a4] text-xs">Previous: 140 lbs x 12</p>
                                </div>
                            </div>
                            <button className="text-white/40 hover:text-white transition-colors cursor-pointer">
                                <span className="material-symbols-outlined">more_vert</span>
                            </button>
                        </div>
                        <div className="p-5">
                            <div className="grid grid-cols-12 gap-4 mb-4 text-[10px] uppercase font-bold text-[#92c9a4]/60 px-2">
                                <div className="col-span-1 text-center">Set</div>
                                <div className="col-span-4">Previous</div>
                                <div className="col-span-3">Weight (lbs)</div>
                                <div className="col-span-3">Reps</div>
                                <div className="col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-12 gap-4 items-center mb-3 bg-[#112217]/50 p-2 rounded-lg border border-transparent hover:border-primary/30 transition-all">
                                <div className="col-span-1 text-center font-bold text-primary">1</div>
                                <div className="col-span-4 text-sm text-[#92c9a4]">140 lbs x 12</div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-10" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-3">
                                    <input className="input-dark text-center h-10" placeholder="--" type="number" />
                                </div>
                                <div className="col-span-1 flex justify-center">
                                    <button className="w-8 h-8 rounded bg-[#23482f] text-white/40 flex items-center justify-center cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                    </button>
                                </div>
                            </div>
                            <button className="w-full py-2 mt-2 border border-dashed border-border-dark rounded-lg text-sm text-[#92c9a4] hover:bg-white/5 transition-all cursor-pointer">
                                + Add Set
                            </button>
                        </div>
                    </section>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-[#193322] border border-primary/30 text-primary py-4 rounded-xl font-bold hover:bg-primary/10 transition-all shadow-lg cursor-pointer">
                            <span className="material-symbols-outlined">add_circle</span>
                            Add Exercise
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/30 text-red-500 py-4 rounded-xl font-bold hover:bg-red-500/20 transition-all shadow-lg cursor-pointer">
                            <span className="material-symbols-outlined">cancel</span>
                            Cancel Workout
                        </button>
                    </div>
                </div>
                <footer className="mt-auto py-8 text-center text-[#92c9a4]/40 text-sm border-t border-border-dark">
                    Session ID: 4829-U-2024 • Active Tracking Enabled
                </footer>
            </main>
            <aside className="hidden xl:flex w-80 flex-shrink-0 border-l border-border-dark bg-[#112217] flex-col p-6 space-y-6">
                <h3 className="text-white font-bold text-lg border-b border-border-dark pb-4">Session Stats</h3>
                <div className="space-y-4">
                    <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
                        <div className="text-[#92c9a4] text-xs uppercase font-bold mb-1">Total Volume</div>
                        <div className="text-2xl font-bold text-white">1,480 <span className="text-sm font-normal text-[#92c9a4]">lbs</span></div>
                    </div>
                    <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
                        <div className="text-[#92c9a4] text-xs uppercase font-bold mb-1">Total Sets</div>
                        <div className="text-2xl font-bold text-white">4 <span className="text-sm font-normal text-[#92c9a4]">of 18</span></div>
                        <div className="w-full bg-[#112217] h-1.5 mt-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[22%]"></div>
                        </div>
                    </div>
                    <div className="bg-surface-dark p-4 rounded-xl border border-border-dark">
                        <div className="text-[#92c9a4] text-xs uppercase font-bold mb-2">Rest Timer</div>
                        <div className="flex items-center justify-between">
                            <div className="text-2xl font-mono font-bold text-primary">01:12</div>
                            <button className="text-white/40 hover:text-white"><span className="material-symbols-outlined">refresh</span></button>
                        </div>
                    </div>
                </div>
                <div className="mt-auto">
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl">
                        <div className="flex items-center gap-2 text-primary mb-2">
                            <span className="material-symbols-outlined">lightbulb</span>
                            <span className="text-xs font-bold uppercase">Pro Tip</span>
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
