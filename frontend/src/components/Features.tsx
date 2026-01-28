export function Features() {
    return (
        <>
            <section className="px-6 mt-12 max-w-[1200px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between px-4 gap-4">
                    <div>
                        <span className="text-primary font-bold text-sm uppercase tracking-widest">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight mt-2">Master Your Routine</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 max-w-md">Everything you need to reach your peak performance in one simple, highly optimized interface.</p>
                </div>
            </section>

            <section className="px-6 py-12 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-[#326744] bg-white dark:bg-[#193322] p-8 hover:border-primary/50 transition-all group">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-3xl">timer</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Intelligent Tracking</h3>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-sm leading-relaxed">Log sets, reps, and rest intervals in seconds with our optimized interface designed for high-intensity training.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-[#326744] bg-white dark:bg-[#193322] p-8 hover:border-primary/50 transition-all group">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-3xl">play_circle</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Pro Library</h3>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-sm leading-relaxed">Access over 750+ 4K video exercises with proper form guidance from elite coaches to ensure maximum safety.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-[#326744] bg-white dark:bg-[#193322] p-8 hover:border-primary/50 transition-all group">
                        <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2 group-hover:bg-primary group-hover:text-background-dark transition-colors">
                            <span className="material-symbols-outlined text-3xl">bar_chart</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Advanced Analytics</h3>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-sm leading-relaxed">Deep dive into your volume, intensity, and 1RM progression with charts that actually tell you what to do next.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
