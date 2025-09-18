import React from "react"

const features = [
  {
    id: 1,
    title: "Soil Moisture Monitoring",
    img: "https://i.pinimg.com/1200x/2a/df/a9/2adfa99c9f975d5c396cfd18f419859b.jpg",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Temperature Insights",
    img: "https://i.pinimg.com/1200x/e8/b0/3d/e8b03d1447f732cd6afbac920cf7ed0d.jpg",
    className: "row-span-2",
  },
  {
    id: 3,
    title: "Water Tank Level",
    img: "https://i.pinimg.com/1200x/cb/ae/5f/cbae5f5ac86cad1b16afec75ab6f3e18.jpg",
    className: "",
  },
  {
    id: 4,
    title: "Rainfall Prediction",
    img: "https://i.pinimg.com/1200x/41/f1/fb/41f1fb757bf18711d49b8d2b028e785e.jpg",
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "Crop Intelligence",
    img: "https://i.pinimg.com/1200x/cb/ae/5f/cbae5f5ac86cad1b16afec75ab6f3e18.jpg",
    className: "row-span-2",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    img: "https://i.pinimg.com/1200x/cb/ae/5f/cbae5f5ac86cad1b16afec75ab6f3e18.jpg",
    className: "",
  },
  {
    id: 7,
    title: "Farmer Mobile App",
    img: "https://i.pinimg.com/1200x/cb/ae/5f/cbae5f5ac86cad1b16afec75ab6f3e18.jpg",
    className: "md:col-span-2",
  },
]

const Features = () => {
  return (
      <section className="py-28 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-5xl text-green-700  font-semibold ">
              Smart Farming Features
            </h2>
            <p className="mt-3 text-gray-700">
              Designed for efficiency, sustainability, and farmer empowerment
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
            {features.map((feature) => (
                <div
                    key={feature.id}
                    className={`group relative rounded-lg overflow-hidden border border-green-200/70 shadow-sm hover:shadow-md transition-all ${feature.className}`}
                >
                  {/* Background Image */}
                  <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${feature.img})` }}
                  />

                  {/* Dark overlay - only on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Title - only visible on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white drop-shadow-lg">
                      {feature.title}
                    </h3>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Features
