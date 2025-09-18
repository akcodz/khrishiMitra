import React from 'react';
import {Droplet, Thermometer, CloudRain, Wind, Bell, AlertTriangle} from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-green-700">Farm Dashboard</h1>
                <p className="text-gray-600">Overview of your farm’s sensors and irrigation system</p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
                    <Droplet className="w-8 h-8 text-blue-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Soil Moisture</p>
                        <h2 className="text-xl font-bold text-gray-800">45%</h2>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
                    <Thermometer className="w-8 h-8 text-red-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Temp & Humidity</p>
                        <h2 className="text-xl font-bold text-gray-800">28°C / 60%</h2>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow flex items-center gap-4">
                    <CloudRain className="w-8 h-8 text-blue-400" />
                    <div>
                        <p className="text-gray-500 text-sm">Rain Sensor</p>
                        <h2 className="text-xl font-bold text-gray-800">5 mm</h2>
                    </div>
                </div>
            </div>

            {/* Charts Section (Static placeholders) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Soil Moisture Chart */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-green-700 font-bold mb-4">Soil Moisture Trend</h3>
                    <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Chart Placeholder
                    </div>
                </div>

                {/* Temp & Humidity Chart */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-green-700 font-bold mb-4">Temperature & Humidity Trend</h3>
                    <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Chart Placeholder
                    </div>
                </div>

                {/* Rainfall Chart */}
                <div className="bg-white p-4 rounded-2xl shadow md:col-span-2">
                    <h3 className="text-green-700 font-bold mb-4">Rainfall Trend</h3>
                    <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Chart Placeholder
                    </div>
                </div>
            </div>

            {/* Irrigation Control */}
            <div className="bg-white p-4 rounded-2xl shadow mb-6">
                <h3 className="text-green-700 font-bold mb-4">Irrigation Control</h3>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center">
                        <Wind className="w-6 h-6 text-green-500" />
                        <p className="text-gray-600 text-sm mt-1">Zone 1</p>
                        <button className="mt-2 bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded">ON</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <Wind className="w-6 h-6 text-green-500" />
                        <p className="text-gray-600 text-sm mt-1">Zone 2</p>
                        <button className="mt-2 bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded">OFF</button>
                    </div>
                </div>
            </div>

            {/* Alerts */}
            <div className="bg-white p-4 rounded-2xl shadow">
                <h3 className="text-green-700 font-bold mb-4">Alerts</h3>
                <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        Soil moisture low in Field 1
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Irrigation system inactive in Zone 2
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        Rain detected: 5 mm
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
