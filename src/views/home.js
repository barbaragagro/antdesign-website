import React from 'react'
import AppCarousel from '../components/common/home/carousel'
import AppAbout from '../components/common/home/about'
import AppFeature from '../components/common/home/feature'
import AppWorks from '../components/common/home/works'
import AppFAQ from '../components/common/home/faq'
import AppPricing from '../components/common/home/pricing'
import AppContact from '../components/common/home/contact'


export default function AppHome() {
  return (
    <div className='main'>
      <AppCarousel/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFAQ/>
      <AppPricing/>
      <AppContact/>
    </div>
  )
}