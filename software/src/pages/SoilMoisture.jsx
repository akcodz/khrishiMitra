import React, { useState } from 'react';
import { Droplet, AlertTriangle } from 'lucide-react';

const fieldsData = [
    { id: 1, name: 'Field 1', crop: 'Tomatoes', moisture: 45 },
    { id: 2, name: 'Field 2', crop: 'Potatoes', moisture: 38 },
    { id: 3, name: 'Field 3', crop: 'Carrots', moisture: 52 },
];

// AI suggestions mapped by crop
const aiSuggestionsByCrop = {
    Tomatoes: {
        dos: ['Water early in the morning.', 'Use drip irrigation for efficiency.', 'Mulch to retain soil moisture.'],
        donts: ['Avoid overwatering to prevent root rot.', 'Do not let soil dry completely.'],
        cautions: ['High humidity may cause fungal diseases.', 'Too much water can damage fruit quality.'],
    },
    Potatoes: {
        dos: ['Maintain consistent soil moisture.', 'Use drip irrigation if possible.', 'Monitor for pests regularly.'],
        donts: ['Avoid waterlogging the soil.', 'Do not water during the night excessively.'],
        cautions: ['Excess water can cause tuber rot.', 'Uneven moisture may reduce yield.'],
    },
    Carrots: {
        dos: ['Water lightly but frequently.', 'Keep soil loose for root growth.', 'Apply organic mulch.'],
        donts: ['Avoid heavy watering that compacts soil.', 'Do not use excessive fertilizer.'],
        cautions: ['Soil too dry can cause root splitting.', 'Waterlogging may attract pests.'],
    },
};

// Generate alerts based on soil moisture %
const getAlerts = (field) => {
    const alerts = [];
    if (field.moisture < 40) {
        alerts.push({ type: 'critical', message: `${field.crop} soil is too dry. Immediate irrigation needed.` });
    } else if (field.moisture > 70) {
        alerts.push({ type: 'critical', message: `${field.crop} soil is waterlogged. Reduce irrigation immediately.` });
    }
    return alerts;
};

const SoilMoisture = () => {
    const [selectedField, setSelectedField] = useState(fieldsData[0]);

    const handleChange = (e) => {
        const field = fieldsData.find((f) => f.id === parseInt(e.target.value));
        setSelectedField(field);
    };

    const aiSuggestions = aiSuggestionsByCrop[selectedField.crop];
    const alerts = getAlerts(selectedField);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-green-700">Soil Moisture Monitor</h1>
                <p className="text-gray-600">Optimize soil moisture for healthy crops</p>
            </div>

            {/* Field Selection */}
            <div className="mb-6">
                <label className="block mb-2 text-gray-700 font-medium">Select Field</label>
                <select
                    value={selectedField.id}
                    onChange={handleChange}
                    className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
                >
                    {fieldsData.map((field) => (
                        <option key={field.id} value={field.id}>
                            {field.name} - {field.crop}
                        </option>
                    ))}
                </select>
            </div>

            {/* Current Soil Moisture */}
            <div className="bg-white p-6 rounded-2xl shadow mb-6 flex items-center gap-4">
                <Droplet className="w-10 h-10 text-blue-500" />
                <div>
                    <p className="text-gray-500 text-sm">Current Soil Moisture</p>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedField.moisture}%</h2>
                </div>
            </div>

            {/* AI Suggestions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Dos */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-green-700 font-bold mb-3">Do's for {selectedField.crop}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {aiSuggestions.dos.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Don'ts */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-red-500 font-bold mb-3">Don'ts for {selectedField.crop}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {aiSuggestions.donts.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Cautions */}
                <div className="bg-white p-4 rounded-2xl shadow">
                    <h3 className="text-yellow-500 font-bold mb-3">Cautions for {selectedField.crop}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {aiSuggestions.cautions.map((item, idx) => (
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
                {alerts.length > 0 ? (
                    <div className="space-y-4">
                        {alerts.map((alert, idx) => (
                            <div
                                key={idx}
                                className={`p-4 rounded-2xl shadow flex items-start gap-3 ${
                                    alert.type === 'critical'
                                        ? 'bg-red-50 border-l-4 border-red-500'
                                        : 'bg-yellow-50 border-l-4 border-yellow-400'
                                }`}
                            >
                                <AlertTriangle
                                    className={`w-6 h-6 ${
                                        alert.type === 'critical' ? 'text-red-500' : 'text-yellow-500'
                                    }`}
                                />
                                <p
                                    className={`${
                                        alert.type === 'critical'
                                            ? 'text-red-700 font-semibold'
                                            : 'text-yellow-700'
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

export default SoilMoisture;
