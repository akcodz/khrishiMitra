import React from 'react';
import { Users, Activity, Bell } from 'lucide-react';

const farmers = [
    { id: 1, name: 'John Doe', fields: 2 },
    { id: 2, name: 'Jane Smith', fields: 3 },
    { id: 3, name: 'Arjun Rai', fields: 1 },
];

const sensors = [
    { id: 1, type: 'Moisture Sensor', status: 'Active' },
    { id: 2, type: 'Temperature Sensor', status: 'Active' },
    { id: 3, type: 'Rain Sensor', status: 'Offline' },
];

// Farmer Requests (Issues raised)
const requests = [
    { id: 1, farmer: 'John Doe', issue: 'Sensor not sending data in Field 1' },
    { id: 2, farmer: 'Jane Smith', issue: 'Irrigation not starting in Field 2' },
];

const AdminDashboard = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h1>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Farmers */}
                <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Users className="w-8 h-8 text-green-600" />
                        <h2 className="text-lg font-bold text-gray-700">Farmers</h2>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{farmers.length}</p>
                    <p className="text-sm text-gray-500">Active farmers in the system</p>
                </div>

                {/* Sensors */}
                <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Activity className="w-8 h-8 text-green-600" />
                        <h2 className="text-lg font-bold text-gray-700">Sensors</h2>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{sensors.length}</p>
                    <p className="text-sm text-gray-500">Monitored sensors across fields</p>
                </div>

                {/* Farmer Requests */}
                <div className="bg-white p-6 rounded-2xl shadow flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <Bell className="w-8 h-8 text-green-600" />
                        <h2 className="text-lg font-bold text-gray-700">Requests</h2>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{requests.length}</p>
                    <p className="text-sm text-gray-500">Issues reported by farmers</p>
                </div>
            </div>

            {/* Optional: Show recent farmer requests */}
            <div className="bg-white p-6 rounded-2xl shadow mt-8">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Recent Farmer Requests</h2>
                {requests.length > 0 ? (
                    <ul className="space-y-2">
                        {requests.map((req) => (
                            <li key={req.id} className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                                <span className="font-semibold text-green-700">{req.farmer}:</span> {req.issue}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No new requests.</p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
