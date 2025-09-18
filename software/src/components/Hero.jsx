import React from "react";
import {useNavigate} from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
      <section className="relative h-screen bg-gradient-to-b from-white via-green-100 to-white w-full text-sm">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
          {/* Project Title */}
          <h3 className="text-2xl font-semibold text-green-800">Khrishi Mitra</h3>

          {/* Nav Button */}
          <button onClick={()=>navigate("/auth")} className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-all  duration-300 ease-in-out">
            Get Started
          </button>
        </nav>

        {/* Hero Content Centered */}
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max px-4 py-2 mb-6">
            <span>🌱 Empowering Farmers with Smart Technology</span>
          </div>

          <h5 className="text-4xl md:text-6xl font-bold max-w-[850px] text-green-900">
            Smart Irrigation & Farming Solutions
          </h5>

          <p className="text-sm md:text-base max-w-2xl mt-6 text-gray-700">
            Monitor soil, water, and crop health in real-time. Harness the power of
            IoT, AI, and data insights to maximize yields, conserve resources, and
            farm sustainably.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button onClick={()=>navigate("/dashboard")}  className="bg-green-700 hover:bg-green-800 hover:scale-105 text-white px-6 py-3 rounded-lg font-medium transition-all  duration-300 ease-in-out">
              Go to Dashboard
            </button>
            <button className="flex items-center gap-2 border border-slate-300 hover:scale-105 hover:bg-slate-200/30 rounded-lg px-6 py-3 transition-all  duration-300 ease-in-out">
              <span>Learn More</span>
              <svg
                  width="6"
                  height="8"
                  viewBox="0 0 6 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M1.25.5 4.75 4l-3.5 3.5"
                    stroke="#050040"
                    strokeOpacity=".4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
  );
};

export default Hero;
