"use client";

import Link from 'next/link';

export default function CreateRoutinePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-200 font-display">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] px-6 py-3 bg-white dark:bg-[#112217] sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="text-primary size-8">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V44Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">FitTrack Pro</h2>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/dashboard" className="text-slate-600 dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Dashboard</Link>
                        <Link href="/workouts" className="text-primary text-sm font-medium">Workouts</Link>
                        <Link href="/exercises" className="text-slate-600 dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Exercises</Link>
                        <Link href="/progress" className="text-slate-600 dark:text-white/80 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors">Progress</Link>
                    </nav>
                    <div className="h-8 w-[1px] bg-slate-200 dark:bg-[#23482f] mx-2"></div>
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <span className="truncate">Save Routine</span>
                    </button>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
                        data-alt="User profile avatar"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANsTalwDlRk8W8opQkQRNkTqlfF0VpGnNOOSMh_8k24DuXu09fB93wRX5FdQ7zsBXcOmaCgPO96DJHFw6VNasNs_7hWhQFfgtURzGglFQUNUkLY6A4PDTXqzZSA9o8RWBTWh3gwx3-OKxVhzev7mnuGPjGruYK-NOJ_WtI9fZAD04I5HzRDbnCMeArY4o3N8QV0R8TX5fiGJ0NqnHDstFd1pRXXd-Oh2pRIgG9R5JJQltPXo8BWYRMF1HBk4bmM9347Os19G5-gHg")' }}
                    ></div>
                </div>
            </header>

            <main className="flex flex-col items-center flex-1 w-full max-w-[1200px] mx-auto px-4 py-8">
                {/* Page Heading Section */}
                <div className="w-full max-w-[960px] mb-8">
                    <div className="flex flex-wrap justify-between items-end gap-4 p-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">Create New Routine</h1>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-base font-normal">Build your custom workout plan by adding exercises below.</p>
                        </div>
                        <button className="flex items-center gap-2 cursor-pointer justify-center rounded-lg h-10 px-5 bg-slate-200 dark:bg-[#23482f] text-slate-700 dark:text-white text-sm font-bold hover:bg-slate-300 dark:hover:bg-[#2d5c3c] transition-colors">
                            <span className="material-symbols-outlined text-lg">close</span>
                            <span>Discard</span>
                        </button>
                    </div>
                </div>

                {/* Routine Configuration */}
                <div className="w-full max-w-[960px] grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    <div className="md:col-span-2 space-y-6">
                        {/* Routine Name Input */}
                        <div className="bg-white dark:bg-[#193322] p-6 rounded-xl border border-slate-200 dark:border-[#326744] shadow-sm">
                            <label className="flex flex-col w-full">
                                <p className="text-slate-700 dark:text-white text-sm font-semibold mb-2">Routine Name</p>
                                <input className="form-input w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-[#326744] bg-slate-50 dark:bg-[#102216] h-14 placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 px-4 text-lg font-medium" placeholder="e.g., Monday Morning Push Day" />
                            </label>
                            <div className="mt-4">
                                <p className="text-slate-700 dark:text-white text-sm font-semibold mb-2">Description (Optional)</p>
                                <textarea className="form-textarea w-full rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-200 dark:border-[#326744] bg-slate-50 dark:bg-[#102216] h-24 placeholder:text-slate-400 dark:placeholder:text-[#92c9a4]/50 px-4 py-3 text-base resize-none" placeholder="Focus on heavy compounds and progressive overload..."></textarea>
                            </div>
                        </div>

                        {/* Exercises Section */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-2">
                                <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Exercises</h2>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-[#92c9a4]">0 Exercises Added</span>
                            </div>
                            {/* Empty State */}
                            <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-[#193322] border-2 border-dashed border-slate-200 dark:border-[#326744] rounded-2xl transition-all">
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                                    <div className="relative bg-slate-100 dark:bg-[#102216] p-6 rounded-full">
                                        <span className="material-symbols-outlined text-5xl text-primary">fitness_center</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2 mb-8">
                                    <p className="text-slate-900 dark:text-white text-xl font-bold text-center">Your routine is looking empty</p>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-sm font-normal text-center max-w-[320px]">
                                        Start building your routine by searching and adding exercises from our library.
                                    </p>
                                </div>
                                <Link href="/exercises" className="flex items-center gap-2 min-w-[180px] cursor-pointer justify-center rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold shadow-xl shadow-primary/20 hover:scale-[1.05] active:scale-[0.95] transition-all">
                                    <span className="material-symbols-outlined">add</span>
                                    <span>Add Exercise</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-white dark:bg-[#193322] p-6 rounded-xl border border-slate-200 dark:border-[#326744] shadow-sm">
                            <h3 className="text-slate-900 dark:text-white text-base font-bold mb-4">Routine Settings</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase mb-2">Target Muscle Groups</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-[#102216] rounded-full text-xs font-medium text-slate-600 dark:text-white/80">Chest</span>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-[#102216] rounded-full text-xs font-medium text-slate-600 dark:text-white/80">Triceps</span>
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-[#102216] rounded-full text-xs font-medium text-slate-600 dark:text-white/80">Shoulders</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-bold uppercase mb-2">Estimated Duration</p>
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                        <span className="material-symbols-outlined text-primary">schedule</span>
                                        <span className="font-medium">-- mins</span>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-slate-100 dark:border-[#23482f]">
                                    <button className="w-full flex items-center justify-between text-slate-600 dark:text-white/70 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer">
                                        <span className="text-sm font-medium">Advanced Settings</span>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary/10 border border-primary/20 p-6 rounded-xl">
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary">tips_and_updates</span>
                                <div>
                                    <p className="text-slate-900 dark:text-white text-sm font-bold">Pro Tip</p>
                                    <p className="text-slate-600 dark:text-[#92c9a4] text-xs leading-relaxed mt-1">
                                        Start with heavy compound movements when your energy is highest for the best strength gains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Save Bar (Mobile/Bottom sticky) */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md border-t border-slate-200 dark:border-[#23482f] md:hidden">
                    <button className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-background-dark text-base font-bold shadow-lg shadow-primary/30">
                        Save Routine
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 px-6 border-t border-slate-200 dark:border-[#23482f] mt-12 bg-white dark:bg-[#0c1a11]">
                <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                        <div className="text-slate-400 dark:text-white/40 size-6">
                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <span className="text-slate-500 dark:text-white/40 text-sm font-medium">© 2024 FitTrack Pro. All rights reserved.</span>
                    </div>
                    <div className="flex gap-8">
                        <Link className="text-slate-500 dark:text-white/40 hover:text-primary transition-colors text-sm" href="#">Privacy</Link>
                        <Link className="text-slate-500 dark:text-white/40 hover:text-primary transition-colors text-sm" href="#">Terms</Link>
                        <Link className="text-slate-500 dark:text-white/40 hover:text-primary transition-colors text-sm" href="#">Support</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
