'use client'
import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Download, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import ProtectedRoute from '@/components/ProtectedRoute'
import { db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

const ViewPitchPage = () => {
    const params = useParams()
    const router = useRouter()
    const [pitch, setPitch] = useState(null)
    const [loading, setLoading] = useState(true)
    const [copied, setCopied] = useState(false)


    const fetchPitch = async () => {
        try {
            const docRef = doc(db, 'pitches', params.id)
            const docSnap = await getDoc(docRef)

            if (docSnap.exists()) {
                setPitch({ id: docSnap.id, ...docSnap.data() })
            } else {
                router.push('/dashboard')
            }
        } catch (error) {
            console.error("Error fetching pitch:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPitch()
    }, [])

    const copyToClipboard = () => {
        const text = `
${pitch.name}
${pitch.tagline}

ELEVATOR PITCH:
${pitch.pitch}

PROBLEM:
${pitch.problem}

SOLUTION:
${pitch.solution}

TARGET AUDIENCE:
${pitch.targetAudience}

LANDING PAGE COPY:
${pitch.landingCopy}
        `
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (loading) {
        return (
            <ProtectedRoute>
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-white text-xl">Loading...</p>
                </div>
            </ProtectedRoute>
        )
    }

    if (!pitch) return null

    return (
        <ProtectedRoute>
            <div className="min-h-screen py-12">
                <div className="max-w-[900px] w-full mx-auto px-[16px]">

                    {/* Header */}
                    <div className="mb-8">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 transition-colors"
                        >
                            <ArrowLeft size={20} />
                            Back to Dashboard
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                                <div className="inline-block bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                    {pitch.industry}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {pitch.name}
                                </h1>
                                <p className="text-white/60 text-xl italic">&quot;{pitch.tagline}&quot;</p>
                            </div>

                            <button
                                onClick={copyToClipboard}
                                className="flex items-center gap-2 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-500 transition-all"
                            >
                                {copied ? <Check size={20} /> : <Copy size={20} />}
                                {copied ? 'Copied!' : 'Copy All'}
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">

                        {/* Elevator Pitch */}
                        <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                🎯 Elevator Pitch
                            </h2>
                            <p className="text-white/90 text-lg leading-relaxed">
                                {pitch.pitch}
                            </p>
                        </div>

                        {/* Problem */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                ❗ Problem
                            </h2>
                            <p className="text-white/80 text-base leading-relaxed">
                                {pitch.problem}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                💡 Solution
                            </h2>
                            <p className="text-white/80 text-base leading-relaxed">
                                {pitch.solution}
                            </p>
                        </div>

                        {/* Target Audience */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                👥 Target Audience
                            </h2>
                            <p className="text-white/80 text-base leading-relaxed">
                                {pitch.targetAudience}
                            </p>
                        </div>

                        {/* Landing Copy */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                🚀 Landing Page Copy
                            </h2>
                            <p className="text-white/80 text-base leading-relaxed">
                                {pitch.landingCopy}
                            </p>
                        </div>

                    </div>

                    {/* Footer Actions */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/create"
                            className="flex-1 text-center bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-500 transition-all"
                        >
                            Create Another Pitch
                        </Link>
                        <Link
                            href="/dashboard"
                            className="flex-1 text-center border-2 border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
                        >
                            Back to Dashboard
                        </Link>
                    </div>

                </div>
            </div>
        </ProtectedRoute>
    )
}

export default ViewPitchPage