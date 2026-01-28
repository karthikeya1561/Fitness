"use client";

import { Sidebar } from "@/components/Sidebar";

export default function SettingsPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen font-display">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-y-auto">
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 dark:border-[#23482f] bg-white/80 dark:bg-[#112217]/80 backdrop-blur-md px-8 py-4">
                    <div className="flex items-center gap-4">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">User Settings & Profile</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-primary text-[#102216] px-4 py-2 rounded-lg font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 cursor-pointer">
                            Save Changes
                        </button>
                    </div>
                </header>
                <div className="p-8 max-w-4xl mx-auto w-full space-y-8">
                    <section className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 dark:border-[#23482f]">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">person</span>
                                Profile Information
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="relative group cursor-pointer">
                                        <div className="size-24 rounded-full bg-center bg-cover border-4 border-primary/20" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBavZ0ImoFujtb4yMeSKsAnleHc4AAR2LUym5T1BVJ95LlTCgtLcMctMCeZzN05fjQRXoxiM1_7HuxlwbvuJ9AUsRWg-9nBWp8JDVochOE1L8L8tjppiZk0iMYYWhanvL0w9s0LMrrh8FpPPBZgfzH_HsB07CD_cgFeVsasPK8DgJxk9IclVmEmQ0lmY2Yyz37BwUbJDkP5vhePJTySgoI-Fy21EDtHwNnevfapCnqxtMHPhN-ItEeFpJtS0yDXLvcuEOFljKiNIIk")' }}></div>
                                        <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white">photo_camera</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-500 dark:text-[#92c9a4]">Full Name</label>
                                        <input className="bg-slate-100 dark:bg-[#23482f] border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" type="text" defaultValue="Alex Rivera" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-500 dark:text-[#92c9a4]">Email Address</label>
                                        <input className="bg-slate-100 dark:bg-[#23482f] border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" type="email" defaultValue="alex.rivera@example.com" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-500 dark:text-[#92c9a4]">Weight</label>
                                    <div className="relative">
                                        <input className="w-full bg-slate-100 dark:bg-[#23482f] border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" type="number" defaultValue="78" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 dark:text-[#92c9a4]">KG</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-500 dark:text-[#92c9a4]">Height</label>
                                    <div className="relative">
                                        <input className="w-full bg-slate-100 dark:bg-[#23482f] border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" type="number" defaultValue="182" />
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 dark:text-[#92c9a4]">CM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 dark:border-[#23482f]">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">straighten</span>
                                Units
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Weight Units</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Choose your preferred weight measurement</p>
                                </div>
                                <div className="flex bg-slate-100 dark:bg-[#23482f] p-1 rounded-lg">
                                    <button className="px-4 py-1.5 rounded text-sm font-bold bg-white dark:bg-[#112217] text-primary shadow-sm cursor-pointer">Metric (kg)</button>
                                    <button className="px-4 py-1.5 rounded text-sm font-medium text-slate-500 dark:text-[#92c9a4] hover:text-white cursor-pointer">Imperial (lbs)</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Distance Units</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Used for cardio and running activities</p>
                                </div>
                                <div className="flex bg-slate-100 dark:bg-[#23482f] p-1 rounded-lg">
                                    <button className="px-4 py-1.5 rounded text-sm font-bold bg-white dark:bg-[#112217] text-primary shadow-sm cursor-pointer">Kilometers</button>
                                    <button className="px-4 py-1.5 rounded text-sm font-medium text-slate-500 dark:text-[#92c9a4] hover:text-white cursor-pointer">Miles</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 dark:border-[#23482f]">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">notifications_active</span>
                                Notification Settings
                            </h3>
                        </div>
                        <div className="p-6 divide-y divide-slate-200 dark:divide-[#23482f]">
                            <div className="flex items-center justify-between py-4 first:pt-0">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Push Notifications</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Receive workout reminders on your device</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer toggle-checkbox" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 dark:bg-[#23482f] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label transition-colors"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Weekly Summary</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Email report of your progress and consistency</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input defaultChecked className="sr-only peer toggle-checkbox" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 dark:bg-[#23482f] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label transition-colors"></div>
                                </label>
                            </div>
                            <div className="flex items-center justify-between py-4 last:pb-0">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">App Updates</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Get notified about new features and exercises</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input className="sr-only peer toggle-checkbox" type="checkbox" />
                                    <div className="w-11 h-6 bg-slate-200 dark:bg-[#23482f] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label transition-colors"></div>
                                </label>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white dark:bg-[#193322] border border-slate-200 dark:border-[#23482f] rounded-xl overflow-hidden shadow-sm">
                        <div className="p-6 border-b border-slate-200 dark:border-[#23482f]">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">security</span>
                                Security
                            </h3>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-500 dark:text-[#92c9a4]">Current Password</label>
                                    <input className="bg-slate-100 dark:bg-[#23482f] border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="••••••••" type="password" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-slate-500 dark:text-[#92c9a4]">New Password</label>
                                    <input className="bg-slate-100 dark:bg-[#23482f] border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white" placeholder="••••••••" type="password" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined text-sm">info</span>
                                    <span className="text-xs">Passwords must be at least 8 characters long</span>
                                </div>
                                <button className="text-sm font-bold text-primary hover:underline transition-all cursor-pointer">Update Password</button>
                            </div>
                            <div className="pt-6 border-t border-slate-200 dark:border-[#23482f] flex flex-col md:flex-row items-center justify-between gap-4">
                                <div>
                                    <p className="font-medium text-slate-900 dark:text-white">Two-Factor Authentication</p>
                                    <p className="text-xs text-slate-500 dark:text-[#92c9a4]">Add an extra layer of security to your account</p>
                                </div>
                                <button className="px-6 py-2 rounded-lg bg-slate-100 dark:bg-[#23482f] text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#2a5538] transition-colors cursor-pointer">
                                    Enable 2FA
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 rounded-xl p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-red-600 dark:text-red-400">Danger Zone</h3>
                                <p className="text-sm text-slate-500 dark:text-[#92c9a4]">Permanently delete your account and all workout history</p>
                            </div>
                            <button className="px-6 py-2 rounded-lg border border-red-500 text-red-500 text-sm font-bold hover:bg-red-500 hover:text-white transition-all cursor-pointer">
                                Delete Account
                            </button>
                        </div>
                    </section>
                </div>
                <footer className="mt-auto py-8 text-center text-slate-500 dark:text-[#92c9a4]/40 text-sm border-t border-slate-200 dark:border-[#23482f]">
                    © 2024 Fitness Pro Track. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
