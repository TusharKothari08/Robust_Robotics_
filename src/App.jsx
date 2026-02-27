
// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import Home from "./pages/Home";
// import Careers from "./pages/Careers";
// import Resources from "./pages/Resources";
// import Company from "./pages/Company";
// import WhatWeDo from "./pages/WhatWeDo";
// import Newsroom from "./pages/Newsroom";
// // import Webinars from "./pages/Webinars";
// import Events from "./components/Events";
// import AboutUs from "./pages/AboutUs";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import Support from "./pages/Support";
// import OurBusinesses from "./pages/OurBusinesses";
// import Sustainability from "./pages/Sustainability";
// import Ethics from "./pages/Ethics";
// import GlobalActivities from "./pages/GlobalActivities";
// import Cookies from "./pages/Cookies";
// import Signup from "./pages/Signup";
// import WhyRobustRobotics from "./pages/WhyRobustRobotics";
// // import IndustrialRobotics from "./pages/business/IndustrialRobotics";
// // import AiComputerVision from "./pages/business/AiComputerVision";

// import AutonomousAerialSystems from "./pages/business/AutonomousAerialSystems";
// import DefenseSecuritySolutions from "./pages/business/DefenseSecuritySolutions";
// import MaritimeCoastalSystems from "./pages/business/MaritimeCoastalSystems";
// import MissionIntegrationAnalytics from "./pages/business/MissionIntegrationAnalytics";
// import AutonomyAI from "./pages/business/AutonomyAI";
// import TrainingOperatorDevelopment from "./pages/business/TrainingOperatorDevelopment";

// import SustainabilitySocialImpact from "./pages/impact/SustainabilitySocialImpact";
// import EnvironmentalRestoration from "./pages/impact/EnvironmentalRestoration";
// import CommunityResilience from "./pages/impact/CommunityResilience";
// import EmployeeVolunteerism from "./pages/impact/EmployeeVolunteerism";
// import EmployeeFocusedPrograms from "./pages/impact/EmployeeFocusedPrograms";
// import SSISustainability from "./pages/impact/Sustainability";


// // Components
// import CookieBanner from "./components/CookieBanner";
// import { useLocation } from "react-router-dom";

// // Utils
// import { getPrefs, setPrefs } from "../utils/cookieManager";

// import FeedbackButton from "./components/Feedback";
// import FeedbackSurvey from "./components/FeedbackSurvey";
// import FireSuppressionUpdate from "./pages/InnovationUpdates/FireSuppressionUpdate";
// import InterceptorUpdate from "./pages/InnovationUpdates/InterceptorUpdate";
// import GISUpdate from "./pages/InnovationUpdates/GISUpdate";
// import TrainingUpdate from "./pages/InnovationUpdates/TrainingUpdate";
// import InnovationUpdateDetail from "./pages/InnovationUpdateDetail";
// import InnovationUpdatesPage from "./pages/InnovationUpdatesPage";
// import AutonomousNavigationTechBrief from "./pages/KnowledgeCenter/AutonomousNavigationTechBrief";
// import RapidInfrastructureCaseStudy from "./pages/KnowledgeCenter/RapidInfrastructureCaseStudy";
// import FiberOpticTetheringWhitePaper from "./pages/KnowledgeCenter/FiberOpticTetheringWhitePaper";
// import KnowledgeCenterDetail from "./pages/KnowledgeCenterDetail";
// import KnowledgeCenterPage from "./pages/KnowledgeCenterPage";
// import ScrollToTop from "./components/ScrollToTop";
// import OperationalDomainsPage from "./pages/OperationalDomainsPage";
// import AiAutonomousNavigation from "./pages/CoreCapabilities/AiAutonomousNavigation";
// import AdvancedSensorFusion from "./pages/CoreCapabilities/AdvancedSensorFusion";
// import PrecisionDeployment from "./pages/CoreCapabilities/PrecisionDeployment";
// import DigitalTwinGIS from "./pages/CoreCapabilities/DigitalTwinGIS";
// import CoreCapabilitiesPage from "./pages/CoreCapabilitiesPage";
// import AutonomousMobility from "./pages/WhatWeDo/AutonomousMobility";
// import CommercialRobotics from "./pages/WhatWeDo/CommercialRobotics";
// import DefenseSecuritySystems from "./pages/WhatWeDo/DefenseSecuritySystems";
// import MaritimeMonitoring from "./pages/WhatWeDo/MaritimeMonitoring";
// import MissionControl from "./pages/WhatWeDo/MissionControl";
// import ResearchInnovation from "./pages/WhatWeDo/ResearchInnovation";

// import WhatWeDoLayout from "./layouts/WhatWeDoLayout";

// import SmartCitySolutions from "./pages/whatwedo/SmartCitySolutions";
// import AISurveillance from "./pages/whatwedo/AISurveillance";

// import { loadAnalytics, enableAnalytics } from "../utils/analytics";



// function PageTracker() {
//   const location = useLocation();

//   useEffect(() => {
//     if (!window.gtag) return;

//     window.gtag("config", import.meta.env.VITE_GA_ID, {
//       page_path: location.pathname,
//     });

//   }, [location]);

//   return null;
// }

// function App() {
//   /**
//    * State:
//    * showBanner (boolean): Controls the visibility of the cookie consent banner.
//    */
//   const [showBanner, setShowBanner] = useState(false);

//   /**
//    * Effect: Initial Cookie Check
//    *
//    * On mount, this effect retrieves the stored preference from localStorage.
//    * - If no preference exists, it shows the banner.
//    * - If 'analytics' consent is already granted, it initializes Google Analytics.
//    */
//   useEffect(() => {

//     const prefs = getPrefs();
  
//     loadAnalytics(); // always load script
  
//     if (!prefs) {
//       setShowBanner(true);
//     }
//     else if (prefs.analytics) {
//       enableAnalytics(); // allow if already accepted
//     }
  
//   }, []);

//   /**
//    * Handler: Accept All Cookies
//    * Sets all tracking preferences to true and hides the banner.
//    */
//   const acceptAll = () => {

//     const prefs = { analytics: true };
//     setPrefs(prefs);
  
//     loadAnalytics();      // load GA
//     enableAnalytics();    // allow tracking
  
//     setShowBanner(false);
//   };

//   /**
//    * Handler: Reject All Cookies
//    * Sets tracking preferences to false and hides the banner.
//    */
//   const rejectAll = () => {

//     setPrefs({ analytics: false });
  
//     loadAnalytics(); // GA loads but tracking denied
  
//     setShowBanner(false);
//   };

//   /**
//    * Render Structure:
//    * - Router: Wraps the entire application for navigation.
//    * - A top-level div with `overflow-x-hidden` to prevent horizontal scroll
//    *   caused by animations (e.g. letter-by-letter labels).
//    * - CookieBanner: Conditional rendering based on 'showBanner' state.
//    * - Routes: Map URL paths to specific page components.
//    */
//   return (
//     <Router>
//       <ScrollToTop />
//       {/* Top-level container prevents horizontal overflow site-wide */}
//       <div className="w-full overflow-x-hidden">
//         {/* Cookie banner (renders above content). Keep inside overflow wrapper. */}
//         {showBanner && (
//           <CookieBanner onAccept={acceptAll} onReject={rejectAll} />
//         )}
//         <PageTracker />
//         {/* Dynamic container to prevent banner from overlapping content */}
//         <div className="w-full" style={showBanner ? { marginTop: "56px" } : {}}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/company" element={<Company />} />
//             <Route path="/what-we-do" element={<WhatWeDo />} />
//             <Route path="/newsroom" element={<Newsroom />} />
//             {/* <Route path="/webinars" element={<Webinars />} /> */}
//             <Route path="/events" element={<Events />} />
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/team" element={<Team />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/support" element={<Support />} />
//             <Route path="/our-businesses" element={<OurBusinesses />} />
//             <Route path="/sustainability" element={<Sustainability />} />
//             <Route path="/ethics" element={<Ethics />} />
//             <Route path="/global-activities" element={<GlobalActivities />} />
//             <Route path="/cookies" element={<Cookies />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/feedback" element={<FeedbackSurvey />} />
            
//             <Route
//               path="/innovation-updates"
//               element={<InnovationUpdatesPage />}
//             />
//             <Route
//               path="/why-robust-robotics"
//               element={<WhyRobustRobotics />}
//             />
//             <Route
//               path="/knowledge-center"
//               element={<KnowledgeCenterPage />}
//             />
//             <Route
//               path="/knowledge-center/:id"
//               element={<KnowledgeCenterDetail />}
//             />
//             <Route
//               path="/operational-domains"
//               element={<OperationalDomainsPage />}
//             />
//             <Route
//               path="/core-capabilities"
//               element={<CoreCapabilitiesPage />}
//             />
//             <Route path="/business/aerial-systems" element={<AutonomousAerialSystems />} />
//             <Route path="/business/defense-security" element={<DefenseSecuritySolutions />} />
//             <Route path="/business/maritime-coastal" element={<MaritimeCoastalSystems />} />
//             <Route path="/business/mission-analytics" element={<MissionIntegrationAnalytics />} />
//             <Route path="/business/autonomy-ai" element={<AutonomyAI />} />
//             <Route path="/business/training-operator" element={<TrainingOperatorDevelopment />} />

//             <Route path="/impact" element={<SustainabilitySocialImpact />}>

// <Route path="environmental-restoration"
//   element={<EnvironmentalRestoration />} 
// />

// <Route path="community-resilience"
//   element={<CommunityResilience />} 
// />

// <Route path="employee-volunteerism"
//   element={<EmployeeVolunteerism />} 
// />

// <Route path="employee-programs"
//   element={<EmployeeFocusedPrograms />} 
// />

// <Route path="sustainability"
//   element={<SSISustainability />} 
// />
// </Route>


// <Route path="/what-we-do" element={<WhatWeDoLayout />}>

//   <Route index element={<WhatWeDo />} />

//   <Route
//     path="smart-city-solutions"
//     element={<SmartCitySolutions />}
//   />

//   <Route
//     path="research-innovation"
//     element={<ResearchInnovation />}
//   />

//   <Route
//     path="ai-surveillance"
//     element={<AISurveillance />}
//   />
//   <Route
//   path="defense-security-systems"
//   element={<DefenseSecuritySystems />}
//   />
//   <Route
//     path="commercial-robotics"
//     element={<CommercialRobotics />}
//   />
//   <Route
//     path="autonomous-mobility"
//     element={<AutonomousMobility />}
//   />
//   <Route
//     path="maritime-monitoring"
//     element={<MaritimeMonitoring />}
//   />
//   <Route
//     path="mission-control"
//     element={<MissionControl />}
//   />

// </Route>

//             <Route
//             path="/core-capabilities/ai-autonomous-navigation"
//             element={<AiAutonomousNavigation />}
//           />

//           <Route
//             path="/core-capabilities/advanced-sensor-fusion"
//             element={<AdvancedSensorFusion />}
//           />

//           <Route
//             path="/core-capabilities/precision-deployment"
//             element={<PrecisionDeployment />}
//           />

//           <Route
//             path="/core-capabilities/digital-twin-gis"
//             element={<DigitalTwinGIS />}
//           />
//           <Route
//             path="/innovation-updates/ai-fire-suppression-platform-advances"
//             element={<FireSuppressionUpdate />}
//           />

//           <Route
//             path="/innovation-updates/high-speed-interceptor-architecture-certified"
//             element={<InterceptorUpdate />}
//           />

// <Route
//   path="/innovation-updates/next-generation-gis-capabilities-deployed"
//   element={<GISUpdate />}
// />

// <Route
//   path="/innovation-updates/operator-training-systems-expanded"
//   element={<TrainingUpdate />}
// />       
// <Route
//   path="/core-capabilities/ai-autonomous-navigation"
//   element={<AiAutonomousNavigation />}
// />

// <Route
//   path="/core-capabilities/advanced-sensor-fusion"
//   element={<AdvancedSensorFusion />}
// />

// <Route
//   path="/core-capabilities/precision-deployment"
//   element={<PrecisionDeployment />}
// />

// <Route
//   path="/core-capabilities/digital-twin-gis"
//   element={<DigitalTwinGIS />}
// />     
//           </Routes>

//           {/* Floating feedback button (kept inside wrapper) */}
//           <FeedbackButton />

//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

//
// Pages (kept as you provided)
//
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import Company from "./pages/Company";
import WhatWeDo from "./pages/WhatWeDo";
import Newsroom from "./pages/Newsroom";
// import Webinars from "./pages/Webinars";
import Events from "./components/Events";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import OurBusinesses from "./pages/OurBusinesses";
import Sustainability from "./pages/Sustainability";
import Ethics from "./pages/Ethics";
import GlobalActivities from "./pages/GlobalActivities";
import Cookies from "./pages/Cookies";
import Signup from "./pages/Signup";
import WhyRobustRobotics from "./pages/WhyRobustRobotics";
// import IndustrialRobotics from "./pages/business/IndustrialRobotics";
// import AiComputerVision from "./pages/business/AiComputerVision";

import AutonomousAerialSystems from "./pages/business/AutonomousAerialSystems";
import DefenseSecuritySolutions from "./pages/business/DefenseSecuritySolutions";
import MaritimeCoastalSystems from "./pages/business/MaritimeCoastalSystems";
import MissionIntegrationAnalytics from "./pages/business/MissionIntegrationAnalytics";
import AutonomyAI from "./pages/business/AutonomyAI";
import TrainingOperatorDevelopment from "./pages/business/TrainingOperatorDevelopment";

import SustainabilitySocialImpact from "./pages/impact/SustainabilitySocialImpact";
import EnvironmentalRestoration from "./pages/impact/EnvironmentalRestoration";
import CommunityResilience from "./pages/impact/CommunityResilience";
import EmployeeVolunteerism from "./pages/impact/EmployeeVolunteerism";
import EmployeeFocusedPrograms from "./pages/impact/EmployeeFocusedPrograms";
import SSISustainability from "./pages/impact/Sustainability";

//
// Components & Utils
//
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";
import FeedbackButton from "./components/Feedback";
import FeedbackSurvey from "./components/FeedbackSurvey";

import FireSuppressionUpdate from "./pages/InnovationUpdates/FireSuppressionUpdate";
import InterceptorUpdate from "./pages/InnovationUpdates/InterceptorUpdate";
import GISUpdate from "./pages/InnovationUpdates/GISUpdate";
import TrainingUpdate from "./pages/InnovationUpdates/TrainingUpdate";
import InnovationUpdateDetail from "./pages/InnovationUpdateDetail";
import InnovationUpdatesPage from "./pages/InnovationUpdatesPage";

import AutonomousNavigationTechBrief from "./pages/KnowledgeCenter/AutonomousNavigationTechBrief";
import RapidInfrastructureCaseStudy from "./pages/KnowledgeCenter/RapidInfrastructureCaseStudy";
import FiberOpticTetheringWhitePaper from "./pages/KnowledgeCenter/FiberOpticTetheringWhitePaper";
import KnowledgeCenterDetail from "./pages/KnowledgeCenterDetail";
import KnowledgeCenterPage from "./pages/KnowledgeCenterPage";

import OperationalDomainsPage from "./pages/OperationalDomainsPage";

import AiAutonomousNavigation from "./pages/CoreCapabilities/AiAutonomousNavigation";
import AdvancedSensorFusion from "./pages/CoreCapabilities/AdvancedSensorFusion";
import PrecisionDeployment from "./pages/CoreCapabilities/PrecisionDeployment";
import DigitalTwinGIS from "./pages/CoreCapabilities/DigitalTwinGIS";
import CoreCapabilitiesPage from "./pages/CoreCapabilitiesPage";

import AutonomousMobility from "./pages/WhatWeDo/AutonomousMobility";
import CommercialRobotics from "./pages/WhatWeDo/CommercialRobotics";
import DefenseSecuritySystems from "./pages/WhatWeDo/DefenseSecuritySystems";
import MaritimeMonitoring from "./pages/WhatWeDo/MaritimeMonitoring";
import MissionControl from "./pages/WhatWeDo/MissionControl";
import ResearchInnovation from "./pages/WhatWeDo/ResearchInnovation";

import WhatWeDoLayout from "./layouts/WhatWeDoLayout";

import SmartCitySolutions from "./pages/whatwedo/SmartCitySolutions";
import AISurveillance from "./pages/whatwedo/AISurveillance";
import { SITE_CONFIG } from "./config/siteConfig";

//
// Cookie + Analytics utilities
//
import { getPrefs, setPrefs } from "../utils/cookieManager";
import { loadAnalytics, enableAnalytics } from "../utils/analytics";
import Maintenance from "./pages/Maintenance";

//
// PageTracker component: fires page_path config on route change (SPA)
//
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;
    // Protect against missing env var just in case
    const gaId = import.meta.env.VITE_GA_ID || "";
    if (!gaId) return;

    window.gtag("config", gaId, {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
}

function App() {

  if (SITE_CONFIG.MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  // showBanner controls whether the banner should be visible
  const [showBanner, setShowBanner] = useState(false);
  

  // isChecked ensures we only render the banner after initial preference check
  const [isChecked, setIsChecked] = useState(false);

  /**
   * Initial effect:
   * - Load GA script in "denied" mode (so it doesn't write cookies)
   * - If no preference stored -> show the banner
   * - If analytics already accepted -> enable analytics
   *
   * Note: loadAnalytics() should load gtag.js but put consent=denied by default.
   * enableAnalytics() should call gtag('consent','update', { analytics_storage: 'granted' })
   * and then gtag('config', GA_ID, { page_path: ... })
   */
  useEffect(() => {

    console.log("Checking cookie prefs...");
  
    const prefs = getPrefs();
  
    console.log("Prefs value:", prefs);
  
    loadAnalytics();
  
    if (!prefs) {
      console.log("No prefs found → show banner");
      setShowBanner(true);
    } else if (prefs.analytics === true) {
      console.log("Prefs already accepted");
      enableAnalytics();
    }
  
    setIsChecked(true);
  
  }, []);

  /**
   * Accept all: store preference, enable analytics and hide banner
   */
  const acceptAll = () => {
    const prefs = { analytics: true };
    setPrefs(prefs);

    // Ensure script exists and then enable analytics
    loadAnalytics();
    enableAnalytics();

    setShowBanner(false);
  };

  /**
   * Reject all: store preference (analytics false), load GA in denied mode (script only)
   */
  const rejectAll = () => {
    setPrefs({ analytics: false });

    // keep script loaded (in denied mode) so it doesn't set cookies
    loadAnalytics();

    setShowBanner(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="w-full overflow-x-hidden">
        {/* Render cookie banner only after we've checked localStorage (avoids flash) */}
        {isChecked && (
  showBanner ? (
    <CookieBanner onAccept={acceptAll} onReject={rejectAll} />
  ) : null
)}

        {/* Page tracker must be inside Router so useLocation works */}
        <PageTracker />

        {/* Ensure the page content is pushed down if banner is visible */}
        <div
            className="w-full"
            style={showBanner ? { marginTop: "72px" } : {}}
          >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/newsroom" element={<Newsroom />} />
            {/* <Route path="/webinars" element={<Webinars />} /> */}
            <Route path="/events" element={<Events />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/our-businesses" element={<OurBusinesses />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/global-activities" element={<GlobalActivities />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feedback" element={<FeedbackSurvey />} />

            <Route path="/innovation-updates" element={<InnovationUpdatesPage />} />
            <Route path="/why-robust-robotics" element={<WhyRobustRobotics />} />
            <Route path="/knowledge-center" element={<KnowledgeCenterPage />} />
            <Route path="/knowledge-center/:id" element={<KnowledgeCenterDetail />} />
            <Route path="/operational-domains" element={<OperationalDomainsPage />} />
            <Route path="/core-capabilities" element={<CoreCapabilitiesPage />} />

            <Route path="/business/aerial-systems" element={<AutonomousAerialSystems />} />
            <Route path="/business/defense-security" element={<DefenseSecuritySolutions />} />
            <Route path="/business/maritime-coastal" element={<MaritimeCoastalSystems />} />
            <Route path="/business/mission-analytics" element={<MissionIntegrationAnalytics />} />
            <Route path="/business/autonomy-ai" element={<AutonomyAI />} />
            <Route path="/business/training-operator" element={<TrainingOperatorDevelopment />} />

            <Route path="/impact" element={<SustainabilitySocialImpact />}>
              <Route path="environmental-restoration" element={<EnvironmentalRestoration />} />
              <Route path="community-resilience" element={<CommunityResilience />} />
              <Route path="employee-volunteerism" element={<EmployeeVolunteerism />} />
              <Route path="employee-programs" element={<EmployeeFocusedPrograms />} />
              <Route path="sustainability" element={<SSISustainability />} />
            </Route>

            <Route path="/what-we-do" element={<WhatWeDoLayout />}>
              <Route index element={<WhatWeDo />} />
              <Route path="smart-city-solutions" element={<SmartCitySolutions />} />
              <Route path="research-innovation" element={<ResearchInnovation />} />
              <Route path="ai-surveillance" element={<AISurveillance />} />
              <Route path="defense-security-systems" element={<DefenseSecuritySystems />} />
              <Route path="commercial-robotics" element={<CommercialRobotics />} />
              <Route path="autonomous-mobility" element={<AutonomousMobility />} />
              <Route path="maritime-monitoring" element={<MaritimeMonitoring />} />
              <Route path="mission-control" element={<MissionControl />} />
            </Route>

            <Route path="/core-capabilities/ai-autonomous-navigation" element={<AiAutonomousNavigation />} />
            <Route path="/core-capabilities/advanced-sensor-fusion" element={<AdvancedSensorFusion />} />
            <Route path="/core-capabilities/precision-deployment" element={<PrecisionDeployment />} />
            <Route path="/core-capabilities/digital-twin-gis" element={<DigitalTwinGIS />} />

            <Route path="/innovation-updates/ai-fire-suppression-platform-advances" element={<FireSuppressionUpdate />} />
            <Route path="/innovation-updates/high-speed-interceptor-architecture-certified" element={<InterceptorUpdate />} />
            <Route path="/innovation-updates/next-generation-gis-capabilities-deployed" element={<GISUpdate />} />
            <Route path="/innovation-updates/operator-training-systems-expanded" element={<TrainingUpdate />} />

            {/* duplicate core-capabilities routes removed (kept above) */}
          </Routes>

          {/* Floating feedback button */}
          <FeedbackButton />
        </div>
      </div>
    </Router>
  );
}

export default App;