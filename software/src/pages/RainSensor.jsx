import React, { useState } from "react";
import { CloudRain, AlertTriangle } from "lucide-react";

const fieldsData = [
    { id: 1, name: "Field 1", crop: "Tomatoes", rain: "No Rain" },
    { id: 2, name: "Field 2", crop: "Potatoes", rain: "Light Rain" },
    { id: 3, name: "Field 3", crop: "Carrots", rain: "Heavy Rain" },
];

// AI suggestions mapped by crop and rain status
const aiSuggestions = {
    Tomatoes: {
        "No Rain": {
            dos: ["Irrigate using collected water.", "Check soil moisture before watering."],
            donts: ["Do not overwater.", "Avoid leaving water stagnant."],
            cautions: ["Dry soil can stress plants."],
        },
        "Light Rain": {
            dos: ["Supplement irrigation lightly.", "Monitor soil moisture closely."],
            donts: ["Do not irrigate excessively."],
            cautions: ["Soil may become soggy if watered too soon."],
        },
        "Heavy Rain": {
            dos: ["Ensure drainage to prevent waterlogging."],
            donts: ["Do not irrigate."],
            cautions: ["High rain may cause root rot or fungal diseases."],
        },
    },
    Potatoes: {
        "No Rain": {
            dos: ["Irrigate moderately.", "Ensure soil is moist but not soggy."],
            donts: ["Do not overwater."],
            cautions: ["Dry soil may reduce tuber size."],
        },
        "Light Rain": {
            dos: ["Adjust irrigation according to soil moisture."],
            donts: ["Avoid excess water."],
            cautions: ["Check for early signs of blight."],
        },
        "Heavy Rain": {
            dos: ["Improve drainage."],
            donts: ["Do not irrigate."],
            cautions: ["Risk of tuber rot is high."],
        },
    },
    Carrots: {
        "No Rain": {
            dos: ["Irrigate regularly.", "Keep soil loose for root growth."],
            donts: ["Avoid dry soil stress."],
            cautions: ["Roots may split if soil is too dry."],
        },
        "Light Rain": {
            dos: ["Monitor soil moisture.", "Irrigate lightly if needed."],
            donts: ["Do not overwater."],
            cautions: ["High moisture may attract pests."],
        },
        "Heavy Rain": {
            dos: ["Ensure drainage.", "Protect roots from excess water."],
            donts: ["Do not irrigate."],
            cautions: ["Roots may rot in saturated soil."],
        },
    },
};

// Alerts based on rain
const getAlerts = (field) => {
    if (field.rain === "Heavy Rain") {
        return [
            {
                type: "critical",
                message: `${field.crop} is exposed to heavy rain. Risk of waterlogging and root rot.`,
            },
        ];
    } else if (field.rain === "No Rain") {
        return [
            {
                type: "normal",
                message: `${field.crop} is under dry conditions. Irrigation may be required.`,
            },
        ];
    }
    return [];
};

const RainSensor = () => {
    const [selectedField, setSelectedField] = useState(fieldsData[0]);
    const suggestions = aiSuggestions[selectedField.crop][selectedField.rain];
    const alerts = getAlerts(selectedField);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-green-700">Rain Sensor Monitor</h1>
                <p className="text-gray-600">
                    Optimize irrigation based on rainfall and crop type
                </p>
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

            {/* Current Rain Status */}
            <div className="bg-white p-6 rounded-2xl shadow mb-6 flex items-center gap-4">
                <CloudRain className="w-10 h-10 text-blue-500" />
                <div>
                    <p className="text-gray-500 text-sm">Current Rain Status</p>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedField.rain}</h2>
                </div>
            </div>

            {/* AI Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-green-700 font-bold mb-3">
                        Do's for {selectedField.crop} ({selectedField.rain})
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {suggestions.dos.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-red-500 font-bold mb-3">
                        Don'ts for {selectedField.crop} ({selectedField.rain})
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {suggestions.donts.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-yellow-500 font-bold mb-3">
                        Cautions for {selectedField.crop} ({selectedField.rain})
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {suggestions.cautions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Alerts Section */}
            <div className="bg-white p-6 rounded-2xl shadow mt-6">
                <h2 className="text-lg mb-4 font-bold text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" /> Alerts
                </h2>
                <div className="space-y-4">
                    {alerts.length > 0 ? (
                        alerts.map((alert, idx) => (
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
                        ))
                    ) : (
                        <p className="text-gray-600">No alerts available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RainSensor;
