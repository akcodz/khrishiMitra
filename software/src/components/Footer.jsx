import React from "react";

const Footer = () => {
  return (
    <footer
      className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full border-t border-green-900 shadow-lg
      text-gray-800"
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-400/40 pb-6">
        {/* Left Section */}
        <div className="md:max-w-96">
          <h3 className="text-xl font-semibold mb-3 text-green-900">
            Smart Irrigation
          </h3>
          <p className="mt-6 text-sm">
            AgriSense 360 is a smart farming platform powered by{" "}
            <span className="font-semibold text-green-900">
              IoT, AI, and Web Technologies
            </span>
            . We help farmers monitor soil, water, and crop health in real-time,
            turning data into insights for better productivity and
            sustainability.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex items-start md:justify-end gap-20">
          {/* Explore */}
          <div>
            <h2 className="font-semibold mb-5 text-green-900">Explore</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-green-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Smart Farming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  AI Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  IoT Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold mb-5 text-green-900">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>📞 +91-98765-43210</p>
              <p>📧 support@agrisense360.com</p>
              <p>🌍 www.agrisense360.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <p className="pt-4 text-center text-xs md:text-sm pb-5 text-gray-700">
        Copyright 2024 ©{" "}
        <span className="font-semibold text-green-900">AgriSense 360</span>. All
        Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
