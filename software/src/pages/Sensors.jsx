import React, { useState } from "react";

const Sensors = () => {
    // Initial sensor data with active state
    const [sensors, setSensors] = useState([
        { id: "S001", assignedTo: "Ramesh Kumar", field: "Field 1", active: true },
        { id: "S002", assignedTo: "Sita Devi", field: "Field 2", active: true },
        { id: "S003", assignedTo: "Anil Patel", field: "Field 4", active: true },
        { id: "S004", assignedTo: "Priya Singh", field: "Field 1", active: true },
    ]);

    // Toggle active/inactive
    const toggleActive = (id) => {
        setSensors(
            sensors.map((sensor) =>
                sensor.id === id ? { ...sensor, active: !sensor.active } : sensor
            )
        );
    };

    return (
        <div className="p-6">
            {/* Title outside card */}
            <h1 className="text-3xl font-bold text-green-700 mb-6">Sensors</h1>

            {/* Card container */}
            <div className="bg-white p-6 rounded-2xl shadow">
                {sensors.length === 0 ? (
                    <p className="text-gray-500">No sensors available.</p>
                ) : (
                    <div className="space-y-4">
                        {sensors.map((sensor) => (
                            <div
                                key={sensor.id}
                                className="p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center hover:shadow-md transition"
                            >
                                <div>
                                    <p className="text-lg font-semibold text-gray-700">
                                        Sensor ID: {sensor.id}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Assigned To:{" "}
                                        <span className="font-medium">
                                            {sensor.assignedTo}
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Field:{" "}
                                        <span className="font-medium">
                                            {sensor.field}
                                        </span>
                                    </p>
                                    <p
                                        className={`text-sm font-medium mt-1 ${
                                            sensor.active
                                                ? "text-green-600"
                                                : "text-red-500"
                                        }`}
                                    >
                                        Status: {sensor.active ? "Active" : "Inactive"}
                                    </p>
                                </div>

                                <button
                                    onClick={() => toggleActive(sensor.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                        sensor.active
                                            ? "bg-red-100 text-red-600 hover:bg-red-200"
                                            : "bg-green-100 text-green-600 hover:bg-green-200"
                                    }`}
                                >
                                    {sensor.active ? "Deactivate" : "Activate"}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sensors;
