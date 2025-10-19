// app/dashboard/page.js
'use client'
import React, { useState, useEffect } from 'react'
import { Plus, FileText, Trash2, Eye } from 'lucide-react'
import Link from 'next/link'
import ProtectedRoute from '@/components/ProtectedRoute'
import { db, auth } from '@/lib/firebase'
import { collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore'

const DashboardPage = () => {
    const [pitches, setPitches] = useState([])
    const [loading, setLoading] = useState(true)



    const fetchPitches = async () => {
        try {
            const q = query(
                collection(db, 'pitches'),
                where('userId', '==', auth.currentUser.uid)
            )
            const querySnapshot = await getDocs(q)
            const pitchesData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setPitches(pitchesData)
        } catch (error) {
            console.error("Error fetching pitches:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPitches()
    }, [fetchPitches])

    const handleDelete = async (id) => {
        if (confirm('Delete this pitch?')) {
            try {
                await deleteDoc(doc(db, 'pitches', id))
                setPitches(pitches.filter(p => p.id !== id))
            } catch (error) {
                console.error("Error deleting:", error)
            }
        }
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

    return (
        <ProtectedRoute>
            <div className="min-h-screen py-12">
                <div className="max-w-[1280px] w-full mx-auto px-[16px]">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">My Pitches</h1>
                            <p className="text-white/60 text-lg">Manage and view all your startup pitches</p>
                        </div>
                        <Link
                            href="/create"
                            className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-500 transition-all"
                        >
                            <Plus size={20} />
                            Create New Pitch
                        </Link>
                    </div>

                    {pitches.length === 0 ? (
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center">
                            <FileText className="mx-auto text-white/40 mb-4" size={64} />
                            <h3 className="text-white text-2xl font-bold mb-2">No Pitches Yet</h3>
                            <p className="text-white/60 mb-6">Create your first pitch to get started!</p>
                            <Link
                                href="/create"
                                className="inline-flex items-center gap-2 bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-500 transition-all"
                            >
                                <Plus size={20} />
                                Create Pitch
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pitches.map((pitch) => (
                                <div
                                    key={pitch.id}
                                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/15 transition-all group"
                                >
                                    <div className="inline-block bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                                        {pitch.industry}
                                    </div>

                                    <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                        {pitch.name}
                                    </h3>
                                    <p className="text-white/60 text-sm mb-4 italic">"{pitch.tagline}"</p>
                                    <p className="text-white/40 text-xs mb-6">
                                        Created: {new Date(pitch.createdAt).toLocaleDateString()}
                                    </p>

                                    <div className="flex gap-3">
                                        <Link
                                            href={`/pitch/${pitch.id}`}
                                            className="flex-1 flex items-center justify-center gap-2 bg-cyan-400 text-black font-semibold py-2 rounded-lg hover:bg-cyan-500 transition-all"
                                        >
                                            <Eye size={18} />
                                            View
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(pitch.id)}
                                            className="px-4 cursor-pointer py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ProtectedRoute>
    )
}

export default DashboardPage