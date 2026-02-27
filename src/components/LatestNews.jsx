/**
 * Latest News Component
 * 
 * Displays a grid of news articles, categorized by type (e.g., STORY).
 * Each item includes a preview image, date, and title.
 */

import React from "react";

/**
 * newsData
 * Array of mock news items for the landing page.
 */
const newsData = [
  {
    id: 1,
    date: "JAN 08, 2026",
    category: "STORY",
    title: "Robust Robotics Demos Next-Gen Multi-Domain Autonomy",
    image:
      "https://images.unsplash.com/photo-1581091870627-3f89c8aa64c6?q=80&w=1200",
  },
  {
    id: 2,
    date: "JAN 08, 2026",
    category: "STORY",
    title:
      "Robust Robotics and Government Reach Historic Deal to Turbo-Charge Missile Systems",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    id: 3,
    date: "JAN 07, 2026",
    category: "STORY",
    title: "2026 Look Ahead: Delivering the Future of Defense Tech",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200",
  },
];

const LatestNews = () => {
  return (
    <section className="w-full bg-white py-20">
      {/* Wider side spacing like reference */}
      <div className="max-w-7xl mx-auto px-10 sm:px-16 lg:px-24">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-[11px] tracking-widest uppercase text-gray-700">
            [05] Latest News —
          </h2>

          <a
            href="#"
            className="text-[11px] uppercase tracking-widest text-gray-700 hover:underline"
          >
            View All
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {newsData.map((item) => (
            <article key={item.id} className="group">

              {/* Image */}
              <div className="overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[210px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Meta */}
              <div className="mt-4 text-[10px] tracking-widest text-gray-500 uppercase">
                {item.date}
              </div>

              <div className="mt-1 text-[10px] tracking-widest text-blue-700 uppercase">
                {item.category}
              </div>

              {/* Title */}
              <h3 className="mt-3 text-sm font-medium leading-snug text-gray-900">
                {item.title}
              </h3>

              {/* Read More */}
              <a
                href="#"
                className="
                  inline-block
                  mt-4
                  text-[10px]
                  tracking-widest
                  uppercase
                  text-gray-900
                  border-b border-gray-900
                  pb-[2px]
                  transition-opacity
                  hover:opacity-70
                "
              >
                Read More
              </a>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestNews;
