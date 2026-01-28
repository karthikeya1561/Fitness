"use client";

import { Sidebar } from "@/components/Sidebar";

export default function CalendarPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-8 py-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Workout Activity</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#23482f] rounded-lg p-1">
                            <button className="px-4 py-1.5 rounded text-sm font-medium text-slate-600 dark:text-white/70 hover:bg-white dark:hover:bg-[#193322] transition-all cursor-pointer">List</button>
                            <button className="px-4 py-1.5 rounded text-sm font-bold bg-white dark:bg-[#193322] text-primary shadow-sm cursor-pointer">Calendar</button>
                        </div>
                        <button className="p-2 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-600 dark:text-white hover:text-primary transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 rounded-lg bg-primary text-[#102216] transition-colors cursor-pointer">
                            <span className="material-symbols-outlined">calendar_today</span>
                        </button>
                    </div>
                </header>
                <div className="flex flex-1 overflow-hidden">
                    <div className="flex-1 p-8 overflow-y-auto">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">May 2024</h1>
                                    <p className="text-slate-500 dark:text-[#92c9a4]">18 workouts completed this month</p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg border border-slate-200 dark:border-[#23482f] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-[#23482f] text-sm font-medium hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer">Today</button>
                                    <button className="p-2 rounded-lg border border-slate-200 dark:border-[#23482f] hover:bg-slate-100 dark:hover:bg-white/5 transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <div className="calendar-grid mb-2">
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">MON</div>
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">TUE</div>
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">WED</div>
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">THU</div>
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">FRI</div>
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">SAT</div>
                                <div className="text-center text-xs font-bold text-slate-400 dark:text-[#92c9a4]/50 py-2">SUN</div>
                            </div>
                            <div className="calendar-grid border-t border-l border-slate-200 dark:border-[#23482f] rounded-lg overflow-hidden shadow-sm">
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] bg-slate-50/50 dark:bg-white/[0.02]"></div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] bg-slate-50/50 dark:bg-white/[0.02]"></div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-500 dark:text-white/40">1</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">2</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">3</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">4</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">5</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">6</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">7</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">8</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.6)]"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative bg-primary/10 border-primary/20">
                                    <span className="text-sm font-bold text-primary">9</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(19,236,91,0.8)]"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">10</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">11</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">12</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">13</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">14</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">15</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">16</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">17</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">18</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">19</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">20</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">21</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium">22</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">23</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors relative">
                                    <span className="text-sm font-medium">24</span>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">25</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">26</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">27</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">28</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">29</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">30</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] group cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                    <span className="text-sm font-medium text-slate-400 dark:text-[#92c9a4]/40">31</span>
                                </div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] bg-slate-50/50 dark:bg-white/[0.02]"></div>
                                <div className="aspect-square p-2 border-r border-b border-slate-200 dark:border-[#23482f] bg-slate-50/50 dark:bg-white/[0.02]"></div>
                            </div>
                            <div className="mt-6 flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                                    <span className="text-slate-500 dark:text-[#92c9a4]">Completed Workout</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full border border-slate-300 dark:border-[#23482f]"></div>
                                    <span className="text-slate-500 dark:text-[#92c9a4]">Rest Day</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="w-80 border-l border-slate-200 dark:border-[#23482f] bg-white dark:bg-[#112217] flex flex-col">
                        <div className="p-6 border-b border-slate-200 dark:border-[#23482f]">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Workout Summary</h3>
                            <p className="text-sm text-primary font-medium">Thursday, May 9, 2024</p>
                        </div>
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="mb-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]/50">Session Details</h4>
                                    <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Completed</span>
                                </div>
                                <div className="bg-slate-50 dark:bg-[#193322] rounded-xl p-4 border border-slate-100 dark:border-[#23482f]">
                                    <h5 className="font-bold text-slate-900 dark:text-white mb-2">Day-1: Upper Body</h5>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 dark:text-[#92c9a4]/60 uppercase">Duration</span>
                                            <span className="text-sm font-medium">68 min</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 dark:text-[#92c9a4]/60 uppercase">Volume</span>
                                            <span className="text-sm font-medium">12,450 kg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]/50 mb-4">Exercises</h4>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5FbgfBIGDCBO1hAK1DOM8K3qfGc8uqyeKoegkFYYdI4DLDs0OgG1sS0ALDO8gobNIu8T-zliWUlMPDDu4N-77CqSDU6ybtR5bVjm8Ouk6hO7Jd0GGy9q64FhJT961yJW0cWbnQjRVaBx_J8ijRw4Ng8Ua4U8Kr488hzEqabQI1_B9Nfqf-eeTICtj4gTvJz-3UbotO16yIFm6jATifU0oi5BEGCfXHAK4cYsULQith_n-jG7z5895zdCv_Nk0fvjgHe5T4B1sbfw")' }}></div>
                                        <div className="flex-1">
                                            <h6 className="text-sm font-bold leading-tight mb-1">Bench Press (Barbell)</h6>
                                            <p className="text-xs text-slate-500 dark:text-[#92c9a4]/60">4 sets × 8 reps</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFKb48dyS0Gg_gmoZ5Im6KgtYNYu4sTaBSi0SFr9lE2xnGUaUbU7MYiV6dBid43eVoPxZCAN-kYDzmK8XgCxhCBLZv1y62g58riyuIvmyhVfXEvFEspdTktCCw1hbofHLnR975Gozw2QNsq9l8P_L-BtjTpqZNqZ770XP7EojQEUAgMYCirxkboiAm0V2sVstLhcz3EruS4yWFfdc1jL5reRXTQr2-Hs2vk4SWTKuYyw50r_5cDpBQAM2PcYQygqtf6whM1TEPWCo")' }}></div>
                                        <div className="flex-1">
                                            <h6 className="text-sm font-bold leading-tight mb-1">Overhead Press</h6>
                                            <p className="text-xs text-slate-500 dark:text-[#92c9a4]/60">3 sets × 10 reps</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-[#23482f] flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-400">fitness_center</span>
                                        </div>
                                        <div className="flex-1">
                                            <h6 className="text-sm font-bold leading-tight mb-1">Dumbbell Rows</h6>
                                            <p className="text-xs text-slate-500 dark:text-[#92c9a4]/60">3 sets × 12 reps</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 border-t border-slate-200 dark:border-[#23482f]">
                            <button className="w-full bg-slate-100 dark:bg-[#23482f] hover:bg-slate-200 dark:hover:bg-[#2a5537] text-slate-900 dark:text-white py-2.5 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer">
                                <span className="material-symbols-outlined text-sm">visibility</span>
                                View Full Details
                            </button>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
