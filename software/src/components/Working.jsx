import React from 'react'
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.png'

const Working = () => {
    return (
        <div className="w-full bg-white">

        {/* Intro Section */}
            <div className="h-screen w-full p-16 flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-2/3 h-full">
                    <img className="w-full h-full object-contain rounded-2xl " src={img1} alt="img1" />
                </div>
                <div className="w-full md:w-1/3 h-full flex flex-col items-start justify-center">
                    <h2 className="text-4xl font-bold text-green-600 mb-6">
                        How to Use <span className="text-green-700">KrishiMitra</span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        KrishiMitra is designed to revolutionize agriculture by bringing technology to farmers.
                        Follow the simple steps below to set up your device and start improving your crop
                        production with real-time insights.
                    </p>
                </div>
            </div>

            {/* Step 1 */}
            <div className="h-screen w-full p-16 flex flex-col md:flex-row gap-10 bg-[#F7F7F5]">
                <div className="w-full md:w-2/3 h-full">
                    <img className="w-full h-full object-contain rounded-2xl " src={img2} alt="img2" />
                </div>
                <div className="w-full md:w-1/3 h-full flex flex-col items-start justify-center">
                    <h2 className="text-5xl font-extrabold text-green-600 mb-4">Step 1</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Choose the crop area where you want to install the device. This ensures accurate
                        environmental monitoring tailored to your farmland.
                    </p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="h-screen w-full p-16 pb-0` pr-0 flex flex-col md:flex-row md:justify-end gap-10 bg-[#F7F7F5]">

                <div className="w-full md:w-1/3 h-full flex flex-col items-start justify-center ">
                    <h2 className="text-5xl font-extrabold text-green-600 mb-4">Step 2</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Access real-time data about your crops and receive AI-driven suggestions
                        to optimize growth, irrigation, and disease prevention.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-full flex justify-end ">
                    <img className=" object-contain rounded-2xl " src={img3} alt="img3" />
                </div>
            </div>

            <div className="h-screen w-full pr-20 pl-0 flex flex-col md:flex-row md:justify-end gap-10 bg-white">

                <div className="w-full md:w-2/3 h-full flex justify-end items-center">
                    <img
                        className="w-full h-full object-contain rounded-2xl scale-x-[-1]"
                        src={img4}
                        alt="Step 3 illustration"
                    />
                </div>
                <div className="w-full md:w-1/3 h-full flex flex-col items-start justify-center">
                    <h2 className="text-5xl font-extrabold text-green-600 mb-4">Step 3</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Access real-time data about your crops and receive AI-driven suggestions
                        to optimize growth, irrigation, and disease prevention.
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Working
