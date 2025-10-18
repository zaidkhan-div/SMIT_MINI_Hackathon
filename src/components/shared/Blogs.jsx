import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            image: "/img1.jpg",
            title: "How to Create a Winning Startup Pitch in 2025",
            description: "Learn the essential elements that make investors stop and listen. Discover proven strategies to craft compelling pitches.",
            date: "Oct 15, 2024"
        },
        {
            id: 2,
            image: "/img2.jpg",
            title: "AI in Startup Ecosystem: The Future is Now",
            description: "Explore how artificial intelligence is revolutionizing the way founders present their ideas and connect with investors.",
            date: "Oct 10, 2025"
        },
        {
            id: 3,
            image: "/img3.jpg",
            title: "5 Mistakes to Avoid When Pitching Your Startup",
            description: "Common pitfalls that can ruin your presentation. Get insights from successful founders and investors.",
            date: "Oct 5, 2024"
        }
    ]

    return (
        <section className="max-w-[1280px] w-full mx-auto px-[16px] py-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Latest Insights
                </h2>
                <p className="text-white/70 text-lg">
                    Tips, tricks, and strategies to master your startup pitch
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <div 
                        key={blog.id} 
                        className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
                    >
                        {/* Image */}
                        <div className="relative h-[220px] overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-cyan-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                                {blog.date}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-white/70 text-sm mb-6 line-clamp-3">
                                {blog.description}
                            </p>

                            {/* Button */}
                            <button className="flex items-center gap-2 text-cyan-400 font-semibold hover:gap-4 transition-all group">
                                Read More
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs