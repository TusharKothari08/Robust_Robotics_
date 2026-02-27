
import { useState, useEffect, useRef } from "react";

import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";

export default function Events() {
  const images = [event1, event2, event3];
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless reset
  const handleTransitionEnd = () => {
    if (current === images.length) {
      setTransition(false);
      setCurrent(0);
    }
  };

  useEffect(() => {
    if (!transition) {
      // Re-enable transition immediately after reset
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  return (
    <section className="w-full bg-white py-18">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative w-full h-[50vh] sm:h-[60vh] rounded-3xl overflow-hidden shadow-xl">

          <div
            ref={sliderRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex h-full ${
              transition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {[...images, images[0]].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 z-10 flex items-end p-6 sm:p-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-200">
                Industry Engagement
              </p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-light text-white">
                Our Events & Seminars
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
