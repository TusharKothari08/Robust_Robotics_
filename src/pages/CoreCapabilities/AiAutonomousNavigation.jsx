export default function AiAutonomousNavigation() {
    return (
      <div className="w-full bg-white">
  
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Core Capabilities
          </p>
  
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight max-w-4xl">
            AI-Driven Autonomous
            <br />
            Navigation Systems
          </h1>
  
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Robust Robotics develops intelligent autonomous navigation
            systems capable of operating in complex, GPS-denied,
            low-visibility, and electronically contested environments.
            Our proprietary AI-driven algorithms enable real-time
            perception, localization, and adaptive path planning for
            mission-critical applications.
          </p>
        </section>
  
        {/* OVERVIEW */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
  
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Intelligent Localization
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our navigation framework enables autonomous systems to
                determine precise positioning even in GPS-denied
                environments. Advanced localization techniques ensure
                operational reliability across urban canyons,
                subterranean zones, and contested mission areas.
              </p>
            </div>
  
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Adaptive Path Planning
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Real-time path planning algorithms dynamically respond
                to terrain variations, obstacles, and mission
                constraints, ensuring safe and optimized navigation
                throughout deployment.
              </p>
            </div>
  
          </div>
        </section>
  
        {/* FEATURES */}
        <section className="max-w-7xl mx-auto px-6 py-20">
  
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            Core System Features
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                GPS-Denied Navigation
              </h3>
              <p className="text-gray-600">
                Autonomous operation in environments without
                satellite connectivity.
              </p>
            </div>
  
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Obstacle Detection
              </h3>
              <p className="text-gray-600">
                Dynamic detection and avoidance using AI-powered
                perception models.
              </p>
            </div>
  
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Terrain Adaptation
              </h3>
              <p className="text-gray-600">
                Autonomous traversal across complex and
                unpredictable environments.
              </p>
            </div>
  
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Multi-Sensor Integration
              </h3>
              <p className="text-gray-600">
                Integration of LiDAR, vision, and inertial
                navigation systems.
              </p>
            </div>
  
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Mission Planning
              </h3>
              <p className="text-gray-600">
                Automated route optimization based on
                operational objectives.
              </p>
            </div>
  
            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-2">
                Autonomous Decision Making
              </h3>
              <p className="text-gray-600">
                AI-based decision frameworks for mission
                adaptability.
              </p>
            </div>
  
          </div>
        </section>
  
        {/* APPLICATIONS */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
  
            <h2 className="text-3xl font-semibold text-gray-900 mb-10">
              Operational Applications
            </h2>
  
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>✔ Autonomous Ground Vehicles</li>
              <li>✔ UAV Navigation Systems</li>
              <li>✔ Defense Reconnaissance Missions</li>
              <li>✔ Industrial Automation Platforms</li>
              <li>✔ Infrastructure Monitoring</li>
              <li>✔ Smart City Deployment</li>
            </ul>
  
          </div>
        </section>
  
        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Enable Autonomous Mission Execution
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover how AI-powered navigation enhances operational
            reliability and mission safety in complex environments.
          </p>
        </section>
  
      </div>
    );
  }