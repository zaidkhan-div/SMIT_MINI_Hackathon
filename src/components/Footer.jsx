import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#1a1d2e93] border-t border-white/10">
            <div className="max-w-[1280px] w-full mx-auto px-[16px] py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-3">PitchCraft</h2>
                        <p className="text-white/60 text-sm">Your AI-powered startup pitch generator. Turn ideas into professional pitches instantly.</p>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Features</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Pricing</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Templates</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">About</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Blog</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Privacy</a></li>
                            <li><a href="#" className="text-white/60 hover:text-white text-sm">Terms</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-6">
                    <p className="text-white/40 text-sm text-center">© 2024 PitchCraft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer