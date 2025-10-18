'use client'
import React, { useState } from 'react'
import { Check } from 'lucide-react'

const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true)

    return (
        <section className="max-w-[1280px] w-full mx-auto px-[16px] py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                    Plans Designed Around You
                </h2>

                {/* Toggle */}
                <div className="inline-flex bg-white/10 rounded-full p-1">
                    <button
                        onClick={() => setIsMonthly(true)}
                        className={`cursor-pointer px-8 py-2 rounded-full transition-all ${isMonthly ? 'bg-cyan-400 text-black font-semibold' : 'text-white'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsMonthly(false)}
                        className={`cursor-pointer px-8 py-2 rounded-full transition-all ${!isMonthly ? 'bg-cyan-400 text-black font-semibold' : 'text-white'}`}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Starter Plan */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all">
                    <h3 className="text-white text-xl font-semibold mb-4">Starter Plan</h3>
                    <div className="mb-6">
                        <span className="text-white text-5xl font-bold">${isMonthly ? '0' : '0'}</span>
                        <span className="text-white/60">/{isMonthly ? 'month' : 'year'}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">5 Pitch generations per month</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">Basic name & tagline generation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">Simple pitch templates</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition-all">
                        Get Started
                    </button>
                </div>

                {/* Pro Plan */}
                <div className="bg-cyan-400 rounded-3xl p-8 transform md:scale-105 shadow-2xl">
                    <h3 className="text-black text-xl font-semibold mb-4">Pro Plan</h3>
                    <div className="mb-6">
                        <span className="text-black text-5xl font-bold">${isMonthly ? '29' : '290'}</span>
                        <span className="text-black/60">/{isMonthly ? 'month' : 'year'}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <Check className="text-black flex-shrink-0 mt-1" size={20} />
                            <span className="text-black/80 text-sm">Unlimited pitch generations</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-black flex-shrink-0 mt-1" size={20} />
                            <span className="text-black/80 text-sm">Advanced AI capabilities</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-black flex-shrink-0 mt-1" size={20} />
                            <span className="text-black/80 text-sm">Landing page copy generation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-black flex-shrink-0 mt-1" size={20} />
                            <span className="text-black/80 text-sm">Export to PDF & share links</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-lg bg-black text-white font-semibold hover:bg-black/90 transition-all">
                        Select Plan
                    </button>
                </div>

                {/* Business Plan */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all">
                    <h3 className="text-white text-xl font-semibold mb-4">Business Plan</h3>
                    <div className="mb-6">
                        <span className="text-white text-5xl font-bold">${isMonthly ? '99' : '990'}</span>
                        <span className="text-white/60">/{isMonthly ? 'month' : 'year'}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">Everything in Pro</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">Team collaboration (5 users)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">Priority support</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Check className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                            <span className="text-white/70 text-sm">Custom branding options</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-500 transition-all">
                        Select Plan
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Pricing