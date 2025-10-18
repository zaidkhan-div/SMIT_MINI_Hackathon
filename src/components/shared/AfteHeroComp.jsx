import React from 'react'

const AfteHeroComp = () => {
    return (
        <section className="max-w-[1280px] w-full mx-auto px-[16px] pb-20 pt-10 md:pb-24 md:pt-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Welcome to, <span className="block md:inline">PitchCraft</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-cyan-400 mb-6">
                Turn Ideas Into Winning Pitches
            </h2>

            <p className="text-white/70 text-base md:text-lg max-w-[600px] mx-auto mb-10">
                AI-powered pitch generator for startups. Get professional names, taglines, elevator pitches, and landing page content in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="w-[200px] px-8 py-3 rounded-lg border-2 border-white/30 text-white hover:bg-white/10 transition-all">
                    Get Started
                </button>
                <button className="w-[200px] px-8 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition-all">
                    Try For Free
                </button>
            </div>
        </section>
    )
}

export default AfteHeroComp