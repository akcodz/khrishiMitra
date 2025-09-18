import React, { useState } from "react";

const ManageRequest = () => {
    // Initial request data
    const [requests, setRequests] = useState([
        { id: "R001", sender: "Ramesh Kumar", content: "Soil moisture sensor not working properly.", status: "In Progress" },
        { id: "R002", sender: "Sita Devi", content: "Field 2 has irrigation issue, water not reaching evenly.", status: "Pending" },
        { id: "R003", sender: "Anil Patel", content: "Rain detection sensor giving false signals.", status: "Pending" },
    ]);

    // Function to update status
    const updateStatus = (id, newStatus) => {
        setRequests(
            requests.map((req) =>
                req.id === id ? { ...req, status: newStatus } : req
            )
        );
    };

    return (
        <div className="p-6">
            {/* Title outside card */}
            <h2 className="text-3xl font-bold text-green-600 mb-4">Manage Requests</h2>

            {/* Card container */}
            <div className="bg-white p-6 rounded-2xl shadow">
                {requests.length === 0 ? (
                    <p className="text-gray-500">No requests available.</p>
                ) : (
                    <div className="space-y-4">
                        {requests.map((req) => (
                            <div
                                key={req.id}
                                className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-700">
                                            {req.sender}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {req.content}
                                        </p>
                                    </div>

                                    {/* Status selection */}
                                    <select
                                        value={req.status}
                                        onChange={(e) => updateStatus(req.id, e.target.value)}
                                        className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="Approved">Approved</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Rejected">Rejected</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageRequest;
