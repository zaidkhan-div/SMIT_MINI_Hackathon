import React from 'react'

const Stats = () => {
    return (
        <section className="max-w-[1280px] w-full mx-auto px-[16px] py-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    
                    <div className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
                        <p className="text-white/60 text-sm md:text-base">Pitches Created</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">1200+</h3>
                        <p className="text-white/60 text-sm md:text-base">Active Users</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">4.8</h3>
                        <p className="text-white/60 text-sm md:text-base">User Rating</p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">50+</h3>
                        <p className="text-white/60 text-sm md:text-base">Success Stories</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Stats