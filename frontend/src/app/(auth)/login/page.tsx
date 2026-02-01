"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import Link from 'next/link';

export default function LoginPage() {
    const [authMethod, setAuthMethod] = useState<'email' | 'mobile'>('email');

    // Email State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // Mobile State
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            router.push('/dashboard');
        }
        setIsLoading(false);
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const { error } = await supabase.auth.signInWithOtp({
            phone: phone,
        });

        if (error) {
            alert(error.message);
        } else {
            setShowOtpField(true);
            alert("OTP sent to your mobile!");
        }
        setIsLoading(false);
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const { error } = await supabase.auth.verifyOtp({
            phone: phone,
            token: otp,
            type: 'sms',
        });

        if (error) {
            alert(error.message);
        } else {
            router.push('/dashboard');
        }
        setIsLoading(false);
    };

    const handleSocialLogin = async (provider: 'google') => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            console.error("Auth error:", error.message);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
            {/* Top Navigation Bar Component */}
            <div className="w-full">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-[#23482f] px-6 md:px-10 py-3 bg-white/5 dark:bg-transparent backdrop-blur-sm">
                    <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                        <div className="size-6 text-primary">
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path>
                            </svg>
                        </div>
                        <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">FitTrack</h2>
                    </div>
                    <Link className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#112217] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity" href="/register">
                        <span>Sign Up</span>
                    </Link>
                </header>
            </div>
            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-6 bg-gradient-mesh">
                <div className="w-full max-w-[440px] flex flex-col items-center">
                    {/* Headline & Body Text Section */}
                    <div className="mb-8 text-center">
                        <h1 className="text-gray-900 dark:text-white tracking-tight text-[36px] font-extrabold leading-tight mb-2">Welcome Back</h1>
                        <p className="text-gray-600 dark:text-[#92c9a4] text-lg font-normal leading-normal">Ready for your workout?</p>
                    </div>
                    {/* Login Card */}
                    <div className="w-full bg-white dark:bg-[#193322]/40 backdrop-blur-xl border border-gray-200 dark:border-[#326744] rounded-xl p-8 shadow-2xl">

                        {authMethod === 'email' ? (
                            <form className="flex flex-col gap-6" onSubmit={handleEmailLogin}>
                                {/* Email Field */}
                                <div className="flex flex-col w-full">
                                    <label className="flex flex-col w-full">
                                        <p className="text-gray-700 dark:text-white text-sm font-semibold leading-normal pb-2">Email Address</p>
                                        <input
                                            className="form-input flex w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#326744] bg-white dark:bg-[#112217] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] px-4 text-base font-normal transition-all"
                                            placeholder="name@example.com"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </label>
                                </div>
                                {/* Password Field */}
                                <div className="flex flex-col w-full">
                                    <label className="flex flex-col w-full">
                                        <p className="text-gray-700 dark:text-white text-sm font-semibold leading-normal pb-2">Password</p>
                                        <div className="relative flex w-full items-stretch rounded-lg">
                                            <input
                                                className="form-input flex w-full rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-300 dark:border-[#326744] bg-white dark:bg-[#112217] h-14 placeholder:text-gray-400 dark:placeholder:text-[#92c9a4] px-4 text-base font-normal transition-all"
                                                placeholder="Enter your password"
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <button
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#92c9a4] hover:text-primary transition-colors cursor-pointer"
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                                            </button>
                                        </div>
                                    </label>
                                </div>
                                {/* Remember Me & Forgot Password Row */}
                                <div className="flex items-center justify-between w-full text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input className="w-4 h-4 rounded border-gray-300 dark:border-[#326744] bg-transparent text-primary focus:ring-primary focus:ring-offset-0" type="checkbox" />
                                        <span className="text-gray-600 dark:text-[#92c9a4] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Remember me</span>
                                    </label>
                                    <a className="text-primary font-medium hover:underline" href="#">Forgot password?</a>
                                </div>
                                {/* Log In Button */}
                                <button
                                    className="flex w-full items-center justify-center rounded-lg h-14 bg-primary text-[#112217] text-lg font-bold leading-normal tracking-[0.015em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Verifying...' : 'Log In'}
                                </button>
                            </form>
                        ) : (
                            // Mobile OTP Forms
                            !showOtpField ? (
                                <form className="flex flex-col gap-6" onSubmit={handleSendOtp}>
                                    <div className="flex flex-col w-full">
                                        <label className="text-gray-700 dark:text-white text-sm font-semibold pb-2">Mobile Number</label>
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="form-input w-full rounded-lg border dark:border-[#326744] bg-white dark:bg-[#112217] h-14 px-4 text-gray-900 dark:text-white"
                                            placeholder="+1234567890"
                                            type="tel"
                                            required
                                        />
                                    </div>
                                    <button disabled={isLoading} className="flex w-full items-center justify-center rounded-lg h-14 bg-primary text-[#112217] text-lg font-bold leading-normal tracking-[0.015em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100" type="submit">
                                        {isLoading ? 'Sending...' : 'Send OTP'}
                                    </button>
                                    <button type="button" onClick={() => setAuthMethod('email')} className="text-sm text-primary underline text-center">Back to Email Login</button>
                                </form>
                            ) : (
                                <form className="flex flex-col gap-6" onSubmit={handleVerifyOtp}>
                                    <div className="flex flex-col w-full">
                                        <label className="text-gray-700 dark:text-white text-sm font-semibold pb-2">Enter OTP</label>
                                        <input
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            className="form-input w-full rounded-lg border dark:border-[#326744] bg-white dark:bg-[#112217] h-14 px-4 text-gray-900 dark:text-white"
                                            placeholder="123456"
                                            type="text"
                                            required
                                        />
                                    </div>
                                    <button disabled={isLoading} className="flex w-full items-center justify-center rounded-lg h-14 bg-primary text-[#112217] text-lg font-bold leading-normal tracking-[0.015em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100" type="submit">
                                        {isLoading ? 'Verifying...' : 'Verify & Log In'}
                                    </button>
                                    <button type="button" onClick={() => setShowOtpField(false)} className="text-xs text-primary underline text-center">Change Number</button>
                                </form>
                            )
                        )}

                        {/* Divider */}
                        <div className="flex items-center my-8">
                            <div className="flex-grow border-t border-gray-200 dark:border-[#326744]"></div>
                            <span className="px-4 text-xs uppercase tracking-widest text-gray-400 dark:text-[#92c9a4]">Or continue with</span>
                            <div className="flex-grow border-t border-gray-200 dark:border-[#326744]"></div>
                        </div>

                        {/* Social Login Buttons - Simplified if AuthMethod is Email */}
                        {authMethod === 'email' ? (
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => handleSocialLogin('google')}
                                    className="flex items-center justify-center gap-2 rounded-lg h-12 border border-gray-300 dark:border-[#326744] bg-transparent text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                    type="button"
                                >
                                    <img alt="" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChjhYM5sl9MD_Cen5Q3KTD4x3MlKhzWfUAcTyhUGXRTM6sy-EcZmX_iNFWsslq6ESnJz3179Gi3STYnMfub7nxmDKMAZj0GTZwIfrOy4UWRI3DA4Xuolg7oh896_bZ_pSIwgw3K2_Ts5CjfkZdFpmVogs9_rgvX6bNmTOHa_IZYo_Wm1q9ry5l_bb6SJg2nEzbKHwrHPHl2G0OfM87PFO09ypXQ3igKxncqwiq6uDhyOnpZTaLOdn0NWkGChqV7YeG97wO9pFzMPs" />
                                    Google
                                </button>
                                <button
                                    onClick={() => setAuthMethod('mobile')}
                                    className="flex items-center justify-center gap-2 rounded-lg h-12 border border-gray-300 dark:border-[#326744] bg-transparent text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                    type="button"
                                >
                                    <span className="material-symbols-outlined text-xl">smartphone</span>
                                    Mobile
                                </button>
                            </div>
                        ) : (
                            // If mobile flow is active but showed above, we can hide these or keep them. 
                            // To keep UI clean, we can just show "Back to Email" inside the form above (added).
                            // Or we can show the Google button here still.
                            <button
                                onClick={() => handleSocialLogin('google')}
                                className="flex w-full items-center justify-center gap-2 rounded-lg h-12 border border-gray-300 dark:border-[#326744] bg-transparent text-gray-700 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                                type="button"
                            >
                                <img alt="" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChjhYM5sl9MD_Cen5Q3KTD4x3MlKhzWfUAcTyhUGXRTM6sy-EcZmX_iNFWsslq6ESnJz3179Gi3STYnMfub7nxmDKMAZj0GTZwIfrOy4UWRI3DA4Xuolg7oh896_bZ_pSIwgw3K2_Ts5CjfkZdFpmVogs9_rgvX6bNmTOHa_IZYo_Wm1q9ry5l_bb6SJg2nEzbKHwrHPHl2G0OfM87PFO09ypXQ3igKxncqwiq6uDhyOnpZTaLOdn0NWkGChqV7YeG97wO9pFzMPs" />
                                Google
                            </button>
                        )}
                    </div>
                    {/* Sign Up Prompt */}
                    <p className="mt-8 text-gray-600 dark:text-[#92c9a4] text-base">
                        New to FitTrack?
                        <Link className="text-primary font-bold hover:underline ml-1" href="/register">Create an account</Link>
                    </p>
                </div>
            </main>
            {/* Footer */}
            <footer className="py-6 text-center text-gray-400 dark:text-[#92c9a4]/60 text-xs">
                © 2024 FitTrack Pro. All rights reserved.
            </footer>
        </div>
    );
}