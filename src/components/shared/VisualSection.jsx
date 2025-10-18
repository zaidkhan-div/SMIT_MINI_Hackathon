import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

const VisualSection = () => {
    return (
        <section className="max-w-[1280px] w-full mx-auto px-[16px] py-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left - Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            AI-Powered Ideas:<br />
                            More Than Just Text.
                        </h2>
                        <p className="text-white/70 text-base md:text-lg mb-8">
                            Transform your startup concept into a complete brand identity. Get names, taglines, pitch decks, and marketing copy that investors love.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-6 md:gap-8">
                            <div className="flex flex-col">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">500+</h3>
                                <p className="text-white/60 text-sm">Pitches</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/20"></div>
                            <div className="flex flex-col">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">1K+</h3>
                                <p className="text-white/60 text-sm">Users</p>
                            </div>
                            <div className="h-12 w-[1px] bg-white/20"></div>
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-2 mb-1">
                                    <Star className="text-yellow-400 fill-yellow-400" size={24} />
                                    <h3 className="text-3xl md:text-4xl font-bold text-white">4.8</h3>
                                </div>
                                <p className="text-white/60 text-sm">Ratings</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Robot Image */}
                    <div className="flex justify-center">
                        <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                            <Image
                                src="/robot1.png"
                                alt="AI Assistant"
                                width={350}
                                height={350}
                                className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default VisualSection