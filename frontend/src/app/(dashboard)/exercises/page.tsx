"use client";

import { Sidebar, useSidebar } from "@/components/Sidebar";
import Link from 'next/link';

export default function ExerciseSelectionPage() {
    const { sidebarOpen, openSidebar, closeSidebar } = useSidebar();

    const exercises = [
        { name: 'Barbell Bench Press', muscle: 'Chest • Barbell', target: 'Pectorals', type: 'Strength', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SqNdzANWRb7Z9Vg4awBXQYp5FTMBLJGdA5LboqF-z247Qlv_IbZPWPszZMDTgB9Fq3U3NLhf9g7nGHYWj1i-TD2Y9xyW0LSKbwgJuUZw25qJCV7gyIMrzOJiarnBcbcXViwvNcgyciXGcbRB-rZkzCE_U6x9vjyOZnGct_p9eq8Uep61Z0BxgzTnYFkIaoq-tcdt7hr6HQ5SCCbofMaksuoRx0zmZA1DDC2wteUjIzg07OmHQh4tx4T_0h7Thpf4b7wgfZu9qlw' },
        { name: 'Conventional Deadlift', muscle: 'Back • Barbell', target: 'Posterior Chain', type: 'Strength', added: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRCJUGfSC2qvRaQYPkPIbmGBkotbGubAhbeYSBSkXBj0FEZizpEcFj71jci3J4tbPTpsXrQIYCg-OhSkKxx8gWu5g4zeglt9JnAt7nS-rkNTwDVzTPHwSV8G0qJuJQdh0b7k_E0AP1oHBFeMz1KEosokYF7HOff3t7CbzvvupGoUuszBipaxT88Hx5-jzGdzSCALActgGLYaaYOxkLYKffIQCUcESAw2w_XRXCiPNFsPZDEOw0fCDXT0T2Hg2Z7h8xH8Htm9gP924' },
        { name: 'Back Squat (High Bar)', muscle: 'Legs • Barbell', target: 'Quadriceps', type: 'Strength', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk9yyUEpDP-EaQcp3KrM5c8y4L1vH5vFabQK0IxG5ID04g3mX-M7-jmfA_eSw-rpTU1VGkmzqwiMn3Ae52RkB9OM6HMreTpL1pFdBmEujPqpnpqV8d1ReGNMkc6oUqxt-e9kRhEuba8yQtIYekMBSeA42eIfQaP-f1odBJ1kQsiSJtaUmK1HIO6zw_PVyDxpO55BEJbDzHURlV53iYX4zjGdniyluukw08Y0eePxXOodwluKVhWbesg-ZZzPlty4X0wZiUCiq-k3I' },
        { name: 'Wide Grip Pull-ups', muscle: 'Back • Bodyweight', target: 'Lats', type: 'Bodyweight', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzboLBW9ioYkGz_MCK7_7fp3KYHgROT5c7W3Sehjvu-JCYPRYemuL_KkNQmEWqUiZm1UT3qHeZs9zBeXYQKzCQPvTfCZpL2Qqnamx0OpOseJROpY5WrqiyeQmecL5DNgfJOLlSnbV0xcawE33q9vjjZWK7IUwWWvmlUBHcXX1OpCxNzuJ2wTD19njIgGY0YcG-hkzFREDUIVsvub3VAzXZVwByM_xWBeiZmNTyn-FUXyQ68FF43OSRO9FnrMX3Qjx8aWcz25QXg-k' },
        { name: 'Overhead Press', muscle: 'Shoulders • Barbell', target: 'Deltoids', type: 'Strength', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAssMhGq6chrVC_RR60YTK0teL2J7E8sqe8nzwYw4D7iEQd58uEi51DsBQr2Gz-RE1CzqglqVnQiZwJ65jeFfrLV9YLAc0GOsIiFYyPacawxYOF01n3cqf3kciKp-AYyHPLbm3vpgXM-VV23YL6EBgYazAMwXoKm_ix3G2p2TfuISA7l5N6qquPe4Kbox7mPhWHpo67AqgS7WyXVT2ilzNJm5QV-UO6O6ziV9Zipol9qLxVEQ5LMuFBw_peMHKtp0u05lUNneqbt60' },
        { name: 'Dumbbell Bicep Curl', muscle: 'Arms • Dumbbell', target: 'Biceps Brachii', type: 'Strength', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYiLGtT3Fs-hVuJQJVc7Htai9bhNYQGRxeIbKHBTdnswEOFHeTkZJy1-izRIEueFzYcZWq8cO8tayn4C0r6ivEpNhxetuDkzb98JzkMAGizjRfzNi3jKMTqNTPhnK9hqOE0ObYoAJ92ANAt_9Vv_xE9XAkeerlaSI0fd0WHZRWsuAli_pLD8J9CPDyk2tWejVAUrU3H71L0zntkcJGlcqYSXn99d49szDc4kDgKEPWe4C7VFTDmFHVeUttKFeDlHTIDuQ63DxnCfA' },
        { name: 'Tricep Pushdown', muscle: 'Arms • Cable', target: 'Triceps', type: 'Strength', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBklT01qZ8Cfv_ZhJGbj9RiZnJ7YKPh-sxNN48TtqxfPyf6fshfEg_GlOfDc-kto6QY4CRl27xGOf9Ygk3lsMUNpFRY_o-n-m1YrSZ1FbqlBG7p22w3KQKuqeQ6dXLD2KByixWO7qdK2fAR-EiN74msF1scqOsbUbQ6AfEJCua0IuQ8TDmKZGApwhJHvI7hHTt6Cv7ceim0Z4q2C12bherPBKFoA3VFdmgFssMFAgVMrasUCXQcrKTBPNOpiFPlGioctjXMGf9sygk' },
        { name: 'Dumbbell Lunges', muscle: 'Legs • Dumbbell', target: 'Quads & Glutes', type: 'Strength', added: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBFjI834a7Fp5QGB3CwWuXMrZshrjfU5JGTXpB8VqZDMJvG7B-tcTPPs4vCihFuJJ2Ox-Mmymm2aVWSD8nbxyVCCSTmf7QAcwuqwEyNXJGFoe4Sx9VIdpFyncT-6aQJI6W1CKccj_3GjFSMu2S9g03DHSgGl3S90qoD8sPHcoatOxZ1edO6FyIrAPSUv3GzDwGLlqUYOvvVAKIZwkNYPddJvPlGA_P3Ea-mYX_4-GLnS7gh2qXMWUOixICFT60VFjiGK0gQuAs7uQ' },
    ];

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
                            <h2 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold tracking-tight truncate">Exercise Library</h2>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-xs hidden sm:block mt-0.5">Add exercises to your &quot;Push Day&quot; routine</p>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-1.5 rounded-lg h-9 md:h-10 px-3 md:px-5 bg-primary text-background-dark text-sm font-bold hover:scale-105 transition-transform cursor-pointer shrink-0">
                        <span className="material-symbols-outlined text-[18px] leading-none">add_circle</span>
                        <span className="hidden sm:inline">Create Custom</span>
                    </button>
                </header>

                <div className="p-4 md:p-8 max-w-7xl mx-auto w-full pb-28">
                    {/* Search and Filter */}
                    <div className="flex flex-col gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="flex w-full items-center gap-3 bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl px-4 h-12 md:h-14 shadow-sm focus-within:ring-2 focus-within:ring-primary transition-all">
                            <span className="material-symbols-outlined text-slate-400 dark:text-[#92c9a4] leading-none shrink-0 text-[20px]">search</span>
                            <input
                                className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#92c9a4] text-sm md:text-base focus:outline-none"
                                placeholder="Search exercises..."
                            />
                        </div>
                        {/* Category Chips */}
                        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-1 no-scrollbar">
                            <button className="flex h-8 md:h-9 shrink-0 items-center justify-center gap-1 rounded-full bg-primary px-4 md:px-5 text-background-dark font-bold text-xs md:text-sm cursor-pointer">All</button>
                            {['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Abs'].map(c => (
                                <button key={c} className="flex h-8 md:h-9 shrink-0 items-center justify-center gap-0.5 rounded-full bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] px-3 md:px-5 text-slate-700 dark:text-white hover:border-primary transition-all cursor-pointer text-xs md:text-sm font-medium">
                                    {c}
                                    <span className="material-symbols-outlined text-[14px] leading-none">expand_more</span>
                                </button>
                            ))}
                            <button className="flex h-8 md:h-9 shrink-0 items-center justify-center gap-0.5 rounded-full bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] px-3 md:px-5 text-slate-700 dark:text-white hover:border-primary transition-all cursor-pointer text-xs md:text-sm font-medium">
                                Equipment
                                <span className="material-symbols-outlined text-[14px] leading-none">filter_alt</span>
                            </button>
                        </div>
                    </div>

                    {/* Exercise Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                        {exercises.map((ex) => (
                            <div key={ex.name} className="group flex flex-col bg-white dark:bg-[#193322] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm cursor-pointer">
                                <div className="relative w-full aspect-video overflow-hidden">
                                    <div className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url("${ex.img}")` }} />
                                    <div className="absolute top-2 right-2 bg-[#102216]/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold text-primary uppercase">{ex.type}</div>
                                </div>
                                <div className="p-3 md:p-4 flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-white text-sm md:text-base font-bold leading-tight mb-0.5 md:mb-1">{ex.name}</h3>
                                    <p className="text-slate-500 dark:text-[#92c9a4] text-[9px] md:text-xs font-medium uppercase tracking-wider mb-3 md:mb-4">{ex.muscle}</p>
                                    <div className="mt-auto flex items-center justify-between gap-1">
                                        <span className="text-[9px] md:text-xs text-slate-400 italic hidden sm:block">Target: {ex.target}</span>
                                        {ex.added ? (
                                            <button className="flex items-center justify-center gap-0.5 rounded-lg h-7 md:h-9 px-2 md:px-4 bg-primary text-background-dark font-bold text-[9px] md:text-xs uppercase cursor-pointer w-full sm:w-auto">
                                                <span className="material-symbols-outlined text-[12px] md:text-[14px] leading-none">check</span>
                                                Added
                                            </button>
                                        ) : (
                                            <button className="flex items-center justify-center gap-0.5 rounded-lg h-7 md:h-9 px-2 md:px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-[9px] md:text-xs uppercase cursor-pointer w-full sm:w-auto">
                                                <span className="material-symbols-outlined text-[12px] md:text-[14px] leading-none">add</span>
                                                Add
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sticky Footer — full width on mobile, offset by sidebar on desktop */}
                <div className="fixed bottom-0 left-0 lg:left-64 right-0 bg-white/90 dark:bg-[#0c1a11]/95 backdrop-blur-md border-t border-slate-200 dark:border-[#23482f] p-3 md:p-4 z-40">
                    <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-800 flex items-center justify-center text-primary font-bold text-xs md:text-sm border-2 border-primary shrink-0">1</div>
                            <div>
                                <p className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">1 Exercise Selected</p>
                                <p className="text-[10px] md:text-xs text-slate-500 dark:text-[#92c9a4] hidden sm:block">Added to &quot;Push Day&quot; routine</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 md:gap-4">
                            <button className="px-3 md:px-5 h-9 md:h-10 text-xs md:text-sm font-bold text-slate-500 dark:text-[#92c9a4] hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Cancel</button>
                            <button className="px-4 md:px-6 h-9 md:h-10 bg-primary text-background-dark rounded-lg font-bold text-xs md:text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap">Confirm Selection</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
