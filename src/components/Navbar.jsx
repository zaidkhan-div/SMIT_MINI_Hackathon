'use client'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`sticky top-0 z-50 transition-colors duration-500 ${isOpen ? "bg-black/100" : "bg-black/40"} backdrop-blur-md`}>
            <div className="max-w-[1280px] w-full mx-auto px-[16px] py-[15px] flex items-center justify-between">
                <div>
                    <Link href="/"><h1 className="text-xl text-white font-bold">PitchCraft</h1></Link>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    <a href="#" className="text-white/80 hover:text-white">Home</a>
                    <a href="#" className="text-white/80 hover:text-white">Features</a>
                    <a href="#" className="text-white/80 hover:text-white">Pricing</a>
                    <a href="#" className="text-white/80 hover:text-white">Blog</a>
                </nav>

                <div className="flex gap-4 items-center">
                    <Link className="bg-cyan-400 px-5 py-1 rounded-3xl text-black/75 hover:shadow-3xl text-lg font-semibold hidden md:block" href='/login'>
                        Login/Signup
                    </Link>

                    {/* Hamburger */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-[60]">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>


            {/* Overlay */}
            {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-[45]" />}
        </div>
    )
}

export default Navbar