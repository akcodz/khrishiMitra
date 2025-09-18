import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx';

const Layout = () => {
    const navigate = useNavigate();
    const [sidebar, setSidebar] = useState(false);


    return (
        <div className="flex flex-col h-screen items-start justify-start">
            {/* Navbar */}
            <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200">

                <h3 className="text-2xl font-semibold text-green-800" onClick={()=>navigate("/")}> Khrishi Mitra</h3>

                <div className="sm:hidden cursor-pointer">
                    {sidebar ? (
                        <X className="w-6 h-6 text-gray-600" onClick={() => setSidebar(false)} />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-600" onClick={() => setSidebar(true)} />
                    )}
                </div>
            </nav>

            {/* Sidebar and Main Content */}
            <div className="flex flex-1 w-full h-[calc(100vh-56px)]">
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <main className="flex-1 bg-[#F4F7FB] overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;