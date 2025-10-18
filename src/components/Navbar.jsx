import React from 'react'

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 transition-colors duration-500 bg-black/10 backdrop-blur-md">
            <div className="max-w-[1280px] w-full mx-auto px-[16px] py-[15px] flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-bold">PitchCraft</h1>
                </div>

                {/* Menu */}
                <nav className="hidden md:flex gap-8">
                    <a href="#" className="text-white/80 hover:text-white">Home</a>
                    <a href="#" className="text-white/80 hover:text-white">Features</a>
                    <a href="#" className="text-white/80 hover:text-white">Pricing</a>
                    <a href="#" className="text-white/80 hover:text-white">Blog</a>
                </nav>

                <div className="flex gap-4">
                    <button className="text-white/80 hover:text-white">Login</button>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
        </div>
    )
}

export default Navbar