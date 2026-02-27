/**
 * Home Page (Landing Page)
 * 
 * The main entry point for visitors. It assembles various high-level components
 * like the Hero section, Latest Updates, and News to provide an overview
 * of the company.
 */

import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDoSection from '../components/WhatWeDoSection'

import OperationalDomainsSection from '../components/OperationalDomainsSection'
import CoreCapabilitiesSection from '../components/CoreCapabilitiesSection'

import WhyRobustRoboticsSection from '../components/WhyRobustRoboticsSection'


import InnovationUpdatesSection from '../components/InnovationUpdatesSection'


import Footer from '../components/Footer'
import Lastfooter from '../components/Lastfooter'
import KnowledgeCenterSection from "../components/KnowledgeCenterSection";
import Events from "../components/Events";

/**
 * Home Component
 * 
 * Renders the primary landing page sections in sequence.
 */
function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <WhatWeDoSection />
            <Events/>
            <OperationalDomainsSection />
            <CoreCapabilitiesSection />
            <InnovationUpdatesSection />
            <KnowledgeCenterSection />
            <WhyRobustRoboticsSection />

            <Footer />
            <Lastfooter />
        </>
    )
}

export default Home
