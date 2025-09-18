import React, { useState } from "react";
import { Thermometer, Droplet, AlertTriangle } from "lucide-react";

const fieldsData = [
    { id: 1, name: "Field 1", crop: "Tomatoes", temp: 32, humidity: 60, rain: "No" },
    { id: 2, name: "Field 2", crop: "Potatoes", temp: 28, humidity: 75, rain: "Yes" },
    { id: 3, name: "Field 3", crop: "Carrots", temp: 35, humidity: 50, rain: "No" },
];

// AI suggestions mapped by crop
const aiSuggestionsByCrop = {
    Tomatoes: {
        dos: [
            "Maintain shade nets in high temp.",
            "Keep soil evenly moist.",
            "Mulch to retain humidity."
        ],
        donts: ["Avoid waterlogging.", "Don’t irrigate during peak sunlight."],
        cautions: ["High temp may cause blossom drop.", "Humidity >80% can cause fungal issues."]
    },
    Potatoes: {
        dos: ["Ensure good air circulation.", "Maintain soil moisture evenly.", "Use drip irrigation."],
        donts: ["Avoid very high humidity.", "Don’t leave soil dry for long."],
        cautions: ["High temp may reduce tuber quality.", "Excess humidity can lead to late blight."]
    },
    Carrots: {
        dos: ["Maintain cool soil.", "Water regularly in small amounts.", "Thin crops for airflow."],
        donts: ["Avoid excessive heat exposure.", "Don’t let soil dry completely."],
        cautions: ["Heat stress can deform roots.", "Dry conditions may cause cracking."]
    }
};

// Alerts logic
const getAlerts = (field) => {
    const alerts = [];
    if (field.temp > 34) alerts.push({ type: "critical", message: `${field.crop} field is too hot. Consider shading.` });
    if (field.humidity < 40) alerts.push({ type: "warning", message: `${field.crop} humidity too low. Increase irrigation.` });
    if (field.humidity > 80) alerts.push({ type: "critical", message: `${field.crop} humidity too high. Risk of fungal infection.` });
    return alerts;
};

const TempHumidity = () => {
    const [selectedField, setSelectedField] = useState(fieldsData[0]);
    const aiSuggestions = aiSuggestionsByCrop[selectedField.crop];
    const alerts = getAlerts(selectedField);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-green-700">Temperature & Humidity</h1>
                <p className="text-gray-600">Track crop-friendly environment conditions</p>
            </div>

            {/* Field Selection */}
            <div className="mb-6">
                <label className="block mb-2 text-gray-700 font-medium">Select Field</label>
                <select
                    value={selectedField.id}
                    onChange={(e) =>
                        setSelectedField(fieldsData.find((f) => f.id === parseInt(e.target.value)))
                    }
                    className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    {fieldsData.map((field) => (
                        <option key={field.id} value={field.id}>
                            {field.name} - {field.crop}
                        </option>
                    ))}
                </select>
            </div>

            {/* Current Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
                    <Thermometer className="w-10 h-10 text-red-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Temperature</p>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedField.temp}°C</h2>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-4">
                    <Droplet className="w-10 h-10 text-blue-500" />
                    <div>
                        <p className="text-gray-500 text-sm">Humidity</p>
                        <h2 className="text-2xl font-bold text-gray-800">{selectedField.humidity}%</h2>
                    </div>
                </div>
            </div>

            {/* AI Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-green-700 font-bold mb-3">Do's for {selectedField.crop}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {aiSuggestions.dos.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-red-500 font-bold mb-3">Don'ts for {selectedField.crop}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {aiSuggestions.donts.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-yellow-500 font-bold mb-3">Cautions for {selectedField.crop}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {aiSuggestions.cautions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Alerts */}
            <div className="bg-white p-6 rounded-2xl shadow mt-6">
                <h2 className="text-lg mb-4 font-bold text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" /> Alerts
                </h2>
                {alerts.length > 0 ? (
                    <div className="space-y-4">
                        {alerts.map((alert, idx) => (
                            <div
                                key={idx}
                                className={`p-4 rounded-2xl shadow flex items-start gap-3 ${
                                    alert.type === "critical"
                                        ? "bg-red-50 border-l-4 border-red-500"
                                        : "bg-yellow-50 border-l-4 border-yellow-400"
                                }`}
                            >
                                <AlertTriangle
                                    className={`w-6 h-6 ${
                                        alert.type === "critical" ? "text-red-500" : "text-yellow-500"
                                    }`}
                                />
                                <p
                                    className={`${
                                        alert.type === "critical"
                                            ? "text-red-700 font-semibold"
                                            : "text-yellow-700"
                                    }`}
                                >
                                    {alert.message}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 mt-2">No alerts available</p>
                )}
            </div>
        </div>
    );
};

export default TempHumidity;
