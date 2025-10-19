import React from 'react'

const CTA = () => {
    return (
        <section className="w-full bg-gradient-to-r from-cyan-500 to-cyan-400 py-20">
            <div className="max-w-[1280px] w-full mx-auto px-[16px]">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Perfect Pitch?
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl max-w-[700px] mx-auto mb-10">
                        Join hundreds of founders who&apos;ve turned their ideas into investor-ready pitches with PitchCraft AI. Start for free today!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-[220px] cursor-pointer px-8 py-4 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-all shadow-lg">
                            Start Free Trial
                        </button>
                        <button className="cursor-pointer w-[220px] px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-all">
                            View Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA