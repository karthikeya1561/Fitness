export function CallToAction() {
    return (
        <section className="px-6 py-20 max-w-[1200px] mx-auto text-center">
            <div className="bg-primary rounded-2xl p-12 flex flex-col items-center gap-6 shadow-xl dark:shadow-primary/10">
                <h2 className="text-background-dark text-3xl md:text-5xl font-black tracking-tight max-w-2xl">
                    Ready to transform your fitness journey?
                </h2>
                <p className="text-background-dark/80 text-lg font-medium max-w-xl">
                    Join 50,000+ athletes and start your 14-day free trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button className="bg-background-dark text-white px-8 h-14 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer">
                        Create Account Now
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <button className="bg-transparent border-2 border-background-dark/20 text-background-dark px-8 h-14 rounded-xl font-bold text-lg hover:bg-background-dark/10 transition-colors cursor-pointer">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
}
