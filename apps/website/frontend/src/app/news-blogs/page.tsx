import HeroSection from '@/components/newsBlogs/HeroSection'
import RecentInsights from '@/components/newsBlogs/RecentInsights'
import { RequestFreeGrowthDiscussion } from '@/components/newsBlogs/RequestFreeGrowthDiscussion'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <RecentInsights/>
      <RequestFreeGrowthDiscussion/>
    </div>
  )
}

export default page