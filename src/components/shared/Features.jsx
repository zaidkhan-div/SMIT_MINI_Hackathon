import React from 'react'
import { Lightbulb, Target, Zap, Sparkles } from 'lucide-react'

const Features = () => {
    return (
        <section className="max-w-[1280px] w-full mx-auto px-[16px] py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left - Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <Lightbulb className="text-cyan-400 mb-4" size={40} />
                        <h3 className="text-white font-semibold text-lg mb-2">Smart Name Generation</h3>
                        <p className="text-white/60 text-sm">AI creates unique startup names that resonate with your vision</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <Target className="text-cyan-400 mb-4" size={40} />
                        <h3 className="text-white font-semibold text-lg mb-2">Target Audience</h3>
                        <p className="text-white/60 text-sm">Define your ideal customers with AI-powered insights</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <Zap className="text-cyan-400 mb-4" size={40} />
                        <h3 className="text-white font-semibold text-lg mb-2">Instant Pitch</h3>
                        <p className="text-white/60 text-sm">Generate elevator pitches that capture attention instantly</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all">
                        <Sparkles className="text-cyan-400 mb-4" size={40} />
                        <h3 className="text-white font-semibold text-lg mb-2">Landing Copy</h3>
                        <p className="text-white/60 text-sm">Professional website content ready to impress investors</p>
                    </div>
                </div>

                {/* Right - Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Simplify Pitching,<br />
                        <span className="text-cyan-400">with Smarter AI</span>
                    </h2>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed">
                        PitchCraft uses advanced AI to transform your raw startup ideas into professional, investor-ready pitches. Get taglines, problem statements, solutions, and complete landing page content—all in minutes. Focus on building, let AI handle the pitch.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Features