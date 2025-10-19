import React from "react"
import Image from "next/image"

const HeroChat = () => {
    return (
        <div className="max-w-[1280px] w-full mx-auto px-[16px] py-24 md:py-32">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">
                {/* Robot Image */}
                <div className="flex-shrink-0">
                    <div className="w-[280px] h-[280px] md:w-[550px] md:h-[550px] rounded-full bg-cyan-400/20 backdrop-blur-sm flex items-center justify-center">
                        <Image
                            src="/robot1.png"
                            alt="AI Assistant"
                            width={350}
                            height={350}
                            className="w-[240px] h-[240px] md:w-[480px] md:h-[480px] object-contain"
                        />
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 space-y-6 w-full">
                    {/* AI Message */}
                    <div className="bg-white text-black rounded-2xl rounded-tl-none p-6 shadow-lg">
                        <p className="text-base md:text-lg">
                            <span className="font-bold">Welcome to PitchCraft!</span> Hey there! I&apos;m your AI startup partner. Share your idea and I&apos;ll generate a complete pitch with name, tagline, target audience & more. Ready to build something amazing?
                        </p>
                    </div>

                    {/* User Typing */}
                    <div className="bg-cyan-400 rounded-2xl rounded-tr-none p-5 ml-auto max-w-[240px] shadow-lg">
                        <p className="text-white text-base md:text-lg font-medium">Typing...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroChat