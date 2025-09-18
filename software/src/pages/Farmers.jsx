import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // icon for remove button

const Farmers = () => {
    // Initial farmer data
    const [farmers, setFarmers] = useState([
        { id: "F001", name: "Ramesh Kumar", fields: 3 },
        { id: "F002", name: "Sita Devi", fields: 2 },
        { id: "F003", name: "Anil Patel", fields: 5 },
        { id: "F004", name: "Priya Singh", fields: 1 },
    ]);

    // Function to remove farmer by id
    const removeFarmer = (id) => {
        setFarmers(farmers.filter((farmer) => farmer.id !== id));
    };

    return (
        <div className=" p-6">
            {/* Title outside card */}
            <h1 className="text-3xl font-bold text-green-700 mb-6">Farmers</h1>

            {/* Card container */}
            <div className="bg-white p-6 rounded-2xl shadow">
                {farmers.length === 0 ? (
                    <p className="text-gray-500">No farmers available.</p>
                ) : (
                    <div className="space-y-4">
                        {farmers.map((farmer) => (
                            <div
                                key={farmer.id}
                                className="p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center hover:shadow-md transition"
                            >
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">
                                        {farmer.name}
                                    </p>
                                    <p className="text-sm text-gray-500">ID: {farmer.id}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                                        {farmer.fields} Fields
                                    </div>
                                    <button
                                        onClick={() => removeFarmer(farmer.id)}
                                        className="p-2 rounded-lg hover:bg-red-100 transition"
                                        title="Remove Farmer"
                                    >
                                        <Trash2 className="w-5 h-5 text-red-500" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Farmers;
