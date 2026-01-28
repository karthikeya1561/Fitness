export function Hero() {
    return (
        <section className="relative px-6 py-12 md:py-20 max-w-[1200px] mx-auto">
            <div className="@container">
                <div className="@[480px]:p-4">
                    <div
                        className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 rounded-xl items-start justify-end px-8 pb-16 @[480px]:px-12 relative overflow-hidden group shadow-2xl"
                        data-alt="Cinematic photo of an athlete lifting weights in a moody dark gym"
                        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(16, 34, 22, 0.95) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuANAAm70fmdA_nzabX3rW1Zpeg3mlicQTr47UDVCDYw8IlvtUYbl5KdDP4zOeuttvZAgpD_2XcGwJbBjCeE02wKzmGGT-b8gTKHz7Ls38WOaVd11G2NfvZjS4XgGqyktlG4vOePofrNt5tdi_BHWeAlAiyOLu3xUylecVkmcTlTdVCW-YUuLLZXL9aQ405L8WJ0SitYNpB7abYESFialP6IyyAOszNYyvUc8k0z2Xi9ZSPtw_8988l6dPdf1EM96nrbg9jdSXpz9_k")' }}
                    >
                        <div className="flex flex-col gap-3 text-left max-w-2xl z-10">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest w-fit mb-2 border border-primary/30">New Version 4.0</span>
                            <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                                Elevate Your Limits.
                            </h1>
                            <h2 className="text-slate-300 text-base font-normal leading-relaxed @[480px]:text-lg max-w-lg">
                                The all-in-one platform to track, analyze, and master your fitness journey. Join 50,000+ athletes reaching their peak performance.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 z-10">
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold tracking-tight hover:scale-105 active:scale-95 transition-all">
                                Get Started Free
                            </button>
                            <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 text-white backdrop-blur-sm border border-white/20 text-base font-bold tracking-tight hover:bg-white/20 transition-all">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
