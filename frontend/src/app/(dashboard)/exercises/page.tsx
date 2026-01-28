"use client";

import Link from 'next/link';

export default function ExerciseSelectionPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            <div className="layout-container flex h-full grow flex-col">
                {/* Top Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#23482f] px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                            <div className="size-6 text-primary">
                                <span className="material-symbols-outlined text-3xl">exercise</span>
                            </div>
                            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">FitnessTracker</h2>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <nav className="flex items-center gap-9">
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/dashboard">Dashboard</Link>
                            <Link className="text-primary text-sm font-medium leading-normal" href="/workouts">Workouts</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/exercises">Exercises</Link>
                            <Link className="text-sm font-medium leading-normal hover:text-primary transition-colors" href="/progress">Progress</Link>
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
                    <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
                        <div className="flex min-w-72 flex-col gap-1">
                            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Select Exercise Library</p>
                            <p className="text-slate-500 dark:text-[#92c9a4] text-base font-normal leading-normal">Add exercises to your &quot;Push Day&quot; routine</p>
                        </div>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform">
                            <span className="material-symbols-outlined">add_circle</span>
                            <span className="truncate">Create Custom Exercise</span>
                        </button>
                    </div>

                    {/* Search and Filter Bar */}
                    <div className="flex flex-col gap-4 mb-8">
                        <div className="w-full">
                            <label className="flex flex-col min-w-40 h-14 w-full">
                                <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                                    <div className="text-slate-400 dark:text-[#92c9a4] flex border-none bg-white dark:bg-[#23482f] items-center justify-center pl-4 rounded-l-xl border-r-0">
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white dark:bg-[#23482f] h-full placeholder:text-slate-400 dark:placeholder:text-[#92c9a4] px-4 pl-2 text-base font-normal" placeholder="Search exercises (e.g. Bench Press, Squats...)" />
                                </div>
                            </label>
                        </div>
                        {/* Category Chips */}
                        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-6 text-background-dark font-bold cursor-pointer">
                                <span className="text-sm">All</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Chest</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Back</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Legs</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Shoulders</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Arms</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Abs</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-[#23482f] px-6 text-slate-700 dark:text-white hover:border-primary border border-transparent transition-all cursor-pointer">
                                <span className="text-sm font-medium">Equipment</span>
                                <span className="material-symbols-outlined text-sm">filter_alt</span>
                            </button>
                        </div>
                    </div>

                    {/* Exercise Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-24">
                        {/* Card 1 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Muscular person performing bench press"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1SqNdzANWRb7Z9Vg4awBXQYp5FTMBLJGdA5LboqF-z247Qlv_IbZPWPszZMDTgB9Fq3U3NLhf9g7nGHYWj1i-TD2Y9xyW0LSKbwgJuUZw25qJCV7gyIMrzOJiarnBcbcXViwvNcgyciXGcbRB-rZkzCE_U6x9vjyOZnGct_p9eq8Uep61Z0BxgzTnYFkIaoq-tcdt7hr6HQ5SCCbofMaksuoRx0zmZA1DDC2wteUjIzg07OmHQh4tx4T_0h7Thpf4b7wgfZu9qlw")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Barbell Bench Press</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Chest • Barbell</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Pectorals</span>
                                    <Link href="/workouts/log" className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Person lifting heavy barbell off the floor"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCRCJUGfSC2qvRaQYPkPIbmGBkotbGubAhbeYSBSkXBj0FEZizpEcFj71jci3J4tbPTpsXrQIYCg-OhSkKxx8gWu5g4zeglt9JnAt7nS-rkNTwDVzTPHwSV8G0qJuJQdh0b7k_E0AP1oHBFeMz1KEosokYF7HOff3t7CbzvvupGoUuszBipaxT88Hx5-jzGdzSCALActgGLYaaYOxkLYKffIQCUcESAw2w_XRXCiPNFsPZDEOw0fCDXT0T2Hg2Z7h8xH8Htm9gP924")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Conventional Deadlift</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Back • Barbell</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Posterior Chain</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">check</span> Added
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Close up of legs squatting with barbell"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk9yyUEpDP-EaQcp3KrM5c8y4L1vH5vFabQK0IxG5ID04g3mX-M7-jmfA_eSw-rpTU1VGkmzqwiMn3Ae52RkB9OM6HMreTpL1pFdBmEujPqpnpqV8d1ReGNMkc6oUqxt-e9kRhEuba8yQtIYekMBSeA42eIfQaP-f1odBJ1kQsiSJtaUmK1HIO6zw_PVyDxpO55BEJbDzHURlV53iYX4zjGdniyluukw08Y0eePxXOodwluKVhWbesg-ZZzPlty4X0wZiUCiq-k3I")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Back Squat (High Bar)</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Legs • Barbell</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Quadriceps</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Person performing pull ups on a bar"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzboLBW9ioYkGz_MCK7_7fp3KYHgROT5c7W3Sehjvu-JCYPRYemuL_KkNQmEWqUiZm1UT3qHeZs9zBeXYQKzCQPvTfCZpL2Qqnamx0OpOseJROpY5WrqiyeQmecL5DNgfJOLlSnbV0xcawE33q9vjjZWK7IUwWWvmlUBHcXX1OpCxNzuJ2wTD19njIgGY0YcG-hkzFREDUIVsvub3VAzXZVwByM_xWBeiZmNTyn-FUXyQ68FF43OSRO9FnrMX3Qjx8aWcz25QXg-k")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Bodyweight</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Wide Grip Pull-ups</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Back • Bodyweight</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Lats</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Person doing overhead shoulder press"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAssMhGq6chrVC_RR60YTK0teL2J7E8sqe8nzwYw4D7iEQd58uEi51DsBQr2Gz-RE1CzqglqVnQiZwJ65jeFfrLV9YLAc0GOsIiFYyPacawxYOF01n3cqf3kciKp-AYyHPLbm3vpgXM-VV23YL6EBgYazAMwXoKm_ix3G2p2TfuISA7l5N6qquPe4Kbox7mPhWHpo67AqgS7WyXVT2ilzNJm5QV-UO6O6ziV9Zipol9qLxVEQ5LMuFBw_peMHKtp0u05lUNneqbt60")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Overhead Press</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Shoulders • Barbell</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Deltoids</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Close up of bicep curl with dumbbell"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYiLGtT3Fs-hVuJQJVc7Htai9bhNYQGRxeIbKHBTdnswEOFHeTkZJy1-izRIEueFzYcZWq8cO8tayn4C0r6ivEpNhxetuDkzb98JzkMAGizjRfzNi3jKMTqNTPhnK9hqOE0ObYoAJ92ANAt_9Vv_xE9XAkeerlaSI0fd0WHZRWsuAli_pLD8J9CPDyk2tWejVAUrU3H71L0zntkcJGlcqYSXn99d49szDc4kDgKEPWe4C7VFTDmFHVeUttKFeDlHTIDuQ63DxnCfA")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Dumbbell Bicep Curl</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Arms • Dumbbell</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Biceps Brachii</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Tricep pushdown on cable machine"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBklT01qZ8Cfv_ZhJGbj9RiZnJ7YKPh-sxNN48TtqxfPyf6fshfEg_GlOfDc-kto6QY4CRl27xGOf9Ygk3lsMUNpFRY_o-n-m1YrSZ1FbqlBG7p22w3KQKuqeQ6dXLD2KByixWO7qdK2fAR-EiN74msF1scqOsbUbQ6AfEJCua0IuQ8TDmKZGApwhJHvI7hHTt6Cv7ceim0Z4q2C12bherPBKFoA3VFdmgFssMFAgVMrasUCXQcrKTBPNOpiFPlGioctjXMGf9sygk")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Tricep Pushdown</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Arms • Cable</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Triceps</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="group flex flex-col bg-white dark:bg-[#1a2e21] rounded-xl overflow-hidden border border-slate-200 dark:border-[#23482f] hover:border-primary/50 transition-all shadow-sm hover:shadow-primary/10 cursor-pointer">
                            <div className="relative w-full aspect-video overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                                    data-alt="Person doing walking lunges with dumbbells"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBBFjI834a7Fp5QGB3CwWuXMrZshrjfU5JGTXpB8VqZDMJvG7B-tcTPPs4vCihFuJJ2Ox-Mmymm2aVWSD8nbxyVCCSTmf7QAcwuqwEyNXJGFoe4Sx9VIdpFyncT-6aQJI6W1CKccj_3GjFSMu2S9g03DHSgGl3S90qoD8sPHcoatOxZ1edO6FyIrAPSUv3GzDwGLlqUYOvvVAKIZwkNYPddJvPlGA_P3Ea-mYX_4-GLnS7gh2qXMWUOixICFT60VFjiGK0gQuAs7uQ")' }}
                                ></div>
                                <div className="absolute top-3 right-3 bg-background-dark/80 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-primary uppercase">Strength</div>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">Dumbbell Lunges</h3>
                                <p className="text-slate-500 dark:text-[#92c9a4] text-xs font-medium uppercase tracking-wider mb-4">Legs • Dumbbell</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">Target: Quads & Glutes</span>
                                    <button className="flex items-center justify-center gap-1 rounded-lg h-9 px-4 bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary hover:text-background-dark transition-all font-bold text-xs uppercase tracking-widest cursor-pointer">
                                        <span className="material-symbols-outlined text-sm">add</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Sticky Footer Summary */}
                <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-[#23482f] p-4 z-40">
                    <div className="max-w-[1280px] mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3 overflow-hidden">
                                <div
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-background-dark bg-center bg-cover"
                                    data-alt="Exercise icon 1"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTfVstW9BKxlqAvs7sW8_lvIOHbUnSzP9YstBu00IYdZB1pDkoQsADz4nqoo64R9J4lmTTQucswSXAlJ2pghIYlS_tFS9jpPJ1mgo21K2sCLi3dEo8yf_TvaxZrq2HP7c1LszrrIxW0XMA3F3CZz7yNtrIMcshet0u2VGPs3J0Y5m0F9d9mnYTQ4WvG35GekkvKlYm4UZeeCdCVNgl-7rU1fgOJ6QxbLjkFB5aQ1piCuNfQ2SKu3lyRwH0NQ9IqEzlhddhA7u1-bQ")' }}
                                ></div>
                                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-background-dark bg-slate-800 flex items-center justify-center text-primary font-bold text-sm">+2</div>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">3 Exercises Selected</p>
                                <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Added to &quot;Push Day&quot; routine</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="px-6 h-12 text-sm font-bold text-slate-500 dark:text-[#92c9a4] hover:text-white transition-colors cursor-pointer">Cancel</button>
                            <button className="px-8 h-12 bg-primary text-background-dark rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">Confirm Selection</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
