export function Stats() {
    return (
        <section className="px-6 py-8 max-w-[1200px] mx-auto">
            <div className="flex flex-wrap gap-4 px-4">
                <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-8 border border-slate-200 dark:border-[#326744] bg-white dark:bg-background-dark/50 shadow-sm transition-transform hover:-translate-y-1">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Active Users</p>
                    <div className="flex items-baseline gap-2">
                        <p className="tracking-tight text-3xl font-black">50K+</p>
                        <p className="text-primary text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +12%</p>
                    </div>
                </div>
                <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-8 border border-slate-200 dark:border-[#326744] bg-white dark:bg-background-dark/50 shadow-sm transition-transform hover:-translate-y-1">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Workouts Logged</p>
                    <div className="flex items-baseline gap-2">
                        <p className="tracking-tight text-3xl font-black">2.4M</p>
                        <p className="text-primary text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +25%</p>
                    </div>
                </div>
                <div className="flex min-w-[200px] flex-1 flex-col gap-2 rounded-xl p-8 border border-slate-200 dark:border-[#326744] bg-white dark:bg-background-dark/50 shadow-sm transition-transform hover:-translate-y-1">
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Exercise Library</p>
                    <div className="flex items-baseline gap-2">
                        <p className="tracking-tight text-3xl font-black">750+</p>
                        <p className="text-primary text-sm font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +5%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
