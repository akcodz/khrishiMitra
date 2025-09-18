import React from 'react';
import { NavLink } from 'react-router-dom';
import {LayoutDashboard, Users, Activity, FileText, LogOut, Bell} from 'lucide-react';

const navItems = [
    { to: '/admin-dashboard', label: 'Dashboard', Icon: LayoutDashboard },
    { to: '/admin-dashboard/farmers', label: 'Farmers', Icon: Users },
    { to: '/admin-dashboard/sensors', label: 'Sensors', Icon: Activity },
    { to: '/admin-dashboard/requests', label: 'Requests', Icon: Bell },
];

const AdminSidebar = ({ sidebar, setSidebar }) => {
    return (
        <div
            className={`
        w-60 bg-white border-r border-gray-200 flex flex-col justify-between
        max-sm:absolute top-0 bottom-0
        transition-all duration-300 ease-in-out
        ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}
      `}
        >
            {/* Navigation */}
            <div className="my-7 w-full px-6 text-sm text-gray-600 font-medium">
                {navItems.map(({ to, label, Icon }, index) => (
                    <NavLink
                        key={index}
                        to={to}
                        end={to === '/admin-dashboard'}
                        onClick={() => setSidebar(false)}
                        className={({ isActive }) =>
                            `px-3.5 py-2.5 flex items-center gap-3 rounded transition-colors duration-200 ${
                                isActive
                                    ? 'bg-gradient-to-r from-green-400 to-green-700 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <Icon
                                    className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-600'}`}
                                />
                                <span className="text-sm">{label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
            </div>

            {/* Footer */}
            <div className="w-full border-t border-gray-200 p-4 px-6 flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User avatar"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-sm font-medium text-slate-700">John Doe</h1>
                        <p className="text-xs text-gray-500">Admin</p>
                    </div>
                </div>
                <LogOut className="w-5 h-5 text-gray-400 hover:text-gray-700 cursor-pointer" />
            </div>
        </div>
    );
};

export default AdminSidebar;
