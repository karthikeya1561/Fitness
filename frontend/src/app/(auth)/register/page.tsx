"use client";

import Link from 'next/link';

export default function RegisterPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#23482f] px-6 md:px-10 py-3 bg-background-light dark:bg-background-dark sticky top-0 z-50">
                <div className="flex items-center gap-4 text-background-dark dark:text-white">
                    <div className="size-6 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">FitTrack</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8 items-center">
                    <nav className="hidden md:flex items-center gap-9">
                        <Link className="text-gray-600 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Features</Link>
                        <Link className="text-gray-600 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Workouts</Link>
                        <Link className="text-gray-600 dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Pricing</Link>
                    </nav>
                    <div className="flex gap-2">
                        <Link href="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#23482f] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#2d5c3c] transition-all">
                            <span>Log In</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex items-center justify-center p-6 bg-mesh relative overflow-hidden">
                {/* Abstract Decoration Elements */}
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>

                <div className="w-full max-w-[540px] z-10">
                    {/* Header Text Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-background-dark dark:text-white tracking-tight text-[36px] font-bold leading-tight mb-2">Start Your Journey</h1>
                        <p className="text-gray-600 dark:text-white/80 text-base font-normal leading-normal">Track your workouts, smash your goals, and join our fitness community.</p>
                    </div>

                    {/* Signup Form Card */}
                    <div className="bg-white dark:bg-[#193322] rounded-xl shadow-2xl p-8 border border-gray-100 dark:border-[#326744]">
                        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                            {/* Name Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-background-dark dark:text-white text-sm font-medium leading-normal">Full Name</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92c9a4] text-[20px]">person</span>
                                    <input className="form-input flex w-full rounded-lg text-background-dark dark:text-white border border-gray-300 dark:border-[#326744] bg-white dark:bg-[#112217] focus:ring-2 focus:ring-primary focus:border-primary h-12 pl-12 pr-4 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] text-base font-normal" placeholder="Enter your name" type="text" />
                                </div>
                            </div>
                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-background-dark dark:text-white text-sm font-medium leading-normal">Email Address</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92c9a4] text-[20px]">mail</span>
                                    <input className="form-input flex w-full rounded-lg text-background-dark dark:text-white border border-gray-300 dark:border-[#326744] bg-white dark:bg-[#112217] focus:ring-2 focus:ring-primary focus:border-primary h-12 pl-12 pr-4 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] text-base font-normal" placeholder="email@example.com" type="email" />
                                </div>
                            </div>
                            {/* Password Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Password Field */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-background-dark dark:text-white text-sm font-medium leading-normal">Password</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92c9a4] text-[20px]">lock</span>
                                        <input className="form-input flex w-full rounded-lg text-background-dark dark:text-white border border-gray-300 dark:border-[#326744] bg-white dark:bg-[#112217] focus:ring-2 focus:ring-primary focus:border-primary h-12 pl-12 pr-4 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] text-base font-normal" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                                {/* Confirm Password Field */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-background-dark dark:text-white text-sm font-medium leading-normal">Confirm Password</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92c9a4] text-[20px]">verified_user</span>
                                        <input className="form-input flex w-full rounded-lg text-background-dark dark:text-white border border-gray-300 dark:border-[#326744] bg-white dark:bg-[#112217] focus:ring-2 focus:ring-primary focus:border-primary h-12 pl-12 pr-4 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] text-base font-normal" placeholder="••••••••" type="password" />
                                    </div>
                                </div>
                            </div>
                            {/* Signup Button */}
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 mt-4 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform" type="submit">
                                <span>Sign Up</span>
                            </button>
                            {/* Divider */}
                            <div className="flex items-center gap-4 my-2">
                                <div className="h-px bg-gray-200 dark:bg-[#326744] flex-1"></div>
                                <span className="text-xs text-gray-400 dark:text-[#92c9a4] font-medium uppercase tracking-widest">or sign up with</span>
                                <div className="h-px bg-gray-200 dark:bg-[#326744] flex-1"></div>
                            </div>
                            {/* Social Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-gray-200 dark:border-[#326744] bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-background-dark dark:text-white font-medium text-sm" type="button">
                                    <span className="text-xl">G</span> Google
                                </button>
                                <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-gray-200 dark:border-[#326744] bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-background-dark dark:text-white font-medium text-sm" type="button">
                                    <span className="material-symbols-outlined text-[20px]">ios</span> Apple
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Login Redirect */}
                    <div className="text-center mt-8">
                        <p className="text-gray-600 dark:text-white/60 text-base font-normal">
                            Already have an account?
                            <Link className="text-primary font-bold hover:underline underline-offset-4 ml-1" href="/login">Log in here</Link>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-6 px-10 border-t border-gray-200 dark:border-[#23482f] bg-background-light dark:bg-background-dark">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 dark:text-[#92c9a4] text-xs">© 2024 FitTrack Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="text-gray-500 dark:text-[#92c9a4] text-xs hover:text-primary" href="#">Privacy Policy</Link>
                        <Link className="text-gray-500 dark:text-[#92c9a4] text-xs hover:text-primary" href="#">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
