'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lightbulb, Target, Briefcase, Loader2 } from 'lucide-react'
import ProtectedRoute from '@/components/ProtectedRoute'
import { db, auth } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

const CreatePitchPage = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        idea: '',
        description: '',
        industry: ''
    })

    // app/create/page.js - Update handleSubmit only
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        try {
            // Call API route instead
            const response = await fetch('/api/generate-pitch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    idea: formData.idea,
                    description: formData.description,
                    industry: formData.industry
                })
            })

            if (!response.ok) throw new Error('Failed to generate pitch')

            const generatedPitch = await response.json()

            // Save to Firestore
            await addDoc(collection(db, 'pitches'), {
                ...generatedPitch,
                userId: auth.currentUser.uid,
                industry: formData.industry,
                createdAt: new Date().toISOString()
            })

            router.push('/dashboard')
        } catch (err) {
            setError(err.message || 'Failed to generate pitch')
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProtectedRoute>
            <div className="min-h-screen py-12">
                <div className="max-w-[800px] w-full mx-auto px-[16px]">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Create Your Pitch
                        </h1>
                        <p className="text-white/70 text-lg">
                            Share your startup idea and let AI craft the perfect pitch
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-xl mb-6">
                            {error}
                        </div>
                    )}

                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div>
                                <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                                    <Lightbulb size={18} className="text-cyan-400" />
                                    Startup Idea Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g., Student Mentor Connect"
                                    value={formData.idea}
                                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                                    <Target size={18} className="text-cyan-400" />
                                    Description
                                </label>
                                <textarea
                                    placeholder="Describe your startup idea in detail..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 transition-all resize-none"
                                    required
                                />
                            </div>

                            {/* Industry */}
                            <div>
                                <label className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                                    <Briefcase size={18} className="text-cyan-400" />
                                    Industry
                                </label>
                                <select
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-all"
                                    required
                                >
                                    <option value="" className="bg-[#1a1d2e]">Select Industry</option>
                                    <option value="Technology" className="bg-[#1a1d2e]">Technology</option>
                                    <option value="Education" className="bg-[#1a1d2e]">Education</option>
                                    <option value="Healthcare" className="bg-[#1a1d2e]">Healthcare</option>
                                    <option value="Finance" className="bg-[#1a1d2e]">Finance</option>
                                    <option value="E-commerce" className="bg-[#1a1d2e]">E-commerce</option>
                                    <option value="Entertainment" className="bg-[#1a1d2e]">Entertainment</option>
                                    <option value="Food & Beverage" className="bg-[#1a1d2e]">Food & Beverage</option>
                                    <option value="Other" className="bg-[#1a1d2e]">Other</option>
                                </select>
                            </div>


                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full cursor-pointer bg-cyan-400 text-black font-semibold py-4 rounded-xl hover:bg-cyan-500 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Generating Your Pitch...
                                    </>
                                ) : (
                                    'Generate Pitch'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default CreatePitchPage