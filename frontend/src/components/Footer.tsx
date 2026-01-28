import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-slate-200 dark:border-[#23482f] py-12 px-6 bg-white dark:bg-background-dark transition-colors">
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-primary">
                        <span className="material-symbols-outlined text-2xl">exercise</span>
                        <h2 className="text-slate-900 dark:text-white text-lg font-bold">FitMaster</h2>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Empowering athletes to achieve their peak physical potential through data-driven tracking.</p>
                    <div className="flex gap-4 mt-2">
                        <Link className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></Link>
                        <Link className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-sm uppercase tracking-wider">Product</h3>
                    <nav className="flex flex-col gap-2">
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Feature List</Link>
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Workouts</Link>
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Premium Plans</Link>
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">API</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-sm uppercase tracking-wider">Support</h3>
                    <nav className="flex flex-col gap-2">
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Help Center</Link>
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Privacy Policy</Link>
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Terms of Service</Link>
                        <Link className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary" href="#">Safety Guidelines</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-sm uppercase tracking-wider">Newsletter</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Weekly training tips and insights.</p>
                    <div className="flex gap-2">
                        <input className="bg-slate-100 dark:bg-[#193322] border-none rounded-lg text-sm flex-1 focus:ring-1 focus:ring-primary p-2 outline-none" placeholder="Email address" type="email" />
                        <button className="bg-primary text-background-dark size-10 flex items-center justify-center rounded-lg hover:brightness-110 cursor-pointer">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-[#23482f] text-center text-slate-400 text-xs">
                © 2024 FitMaster Inc. All rights reserved. Built for athletes by athletes.
            </div>
        </footer>
    );
}
