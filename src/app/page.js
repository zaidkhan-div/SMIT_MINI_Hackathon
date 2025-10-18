import AfteHeroComp from '@/components/shared/AfteHeroComp'
import Blogs from '@/components/shared/Blogs'
import CTA from '@/components/shared/CTA'
import Features from '@/components/shared/Features'
import HeroChat from '@/components/shared/Hero'
import Pricing from '@/components/shared/Pricing'
import Stats from '@/components/shared/Stats'
import VisualSection from '@/components/shared/VisualSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroChat />
      {/* AFter Hero */}
      <AfteHeroComp />
      {/* Features */}
      <Features />
      {/* Stats */}
      <Stats />
      {/* VisualSection */}
      <VisualSection />
      {/* Pricing */}
      <Pricing />
      {/* CTA */}
      <CTA />
      {/* Blogs */}
      <Blogs />
    </div>
  )
}

export default page
