import React, { useState } from 'react';
import { Droplet, AlertTriangle } from 'lucide-react';

const fieldsData = [
    { id: 1, name: 'Field 1', crop: 'Tomatoes', irrigation: 'OFF' },
    { id: 2, name: 'Field 2', crop: 'Potatoes', irrigation: 'ON' },
    { id: 3, name: 'Field 3', crop: 'Carrots', irrigation: 'OFF' },
];

// AI suggestions for irrigation
const aiSuggestionsByCrop = {
    Tomatoes: [
        'Ensure irrigation occurs when soil is dry.',
        'Avoid overwatering to prevent root rot.',
    ],
    Potatoes: [
        'Moderate irrigation is best for tubers.',
        'Do not irrigate during heavy rain.',
    ],
    Carrots: [
        'Irrigate lightly to keep soil loose.',
        'Avoid waterlogging as roots may split.',
    ],
};

// Alerts for irrigation issues (example data with types)
const irrigationAlerts = {
    Tomatoes: [
        { type: 'critical', message: 'High temperature forecasted — increase monitoring.' },
        { type: 'normal', message: 'Risk of fungal infection if overwatered.' },
    ],
    Potatoes: [
        { type: 'critical', message: 'Excess water may cause tuber rot.' },
        { type: 'normal', message: 'Soil moisture sensors indicate borderline saturation.' },
    ],
    Carrots: [
        { type: 'critical', message: 'Roots may crack under irregular watering.' },
        { type: 'normal', message: 'Avoid irrigation after heavy rainfall to prevent rot.' },
    ],
};

const IrrigationControl = () => {
    const [selectedField, setSelectedField] = useState(fieldsData[0]);
    const [irrigationStatus, setIrrigationStatus] = useState(selectedField.irrigation);

    const handleFieldChange = (e) => {
        const field = fieldsData.find((f) => f.id === parseInt(e.target.value));
        setSelectedField(field);
        setIrrigationStatus(field.irrigation);
    };

    const handleStatusChange = (status) => {
        setIrrigationStatus(status);
    };

    const suggestions = aiSuggestionsByCrop[selectedField.crop];
    const alerts = irrigationAlerts[selectedField.crop];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-green-700">Irrigation Control</h1>
                <p className="text-gray-600">Manage and optimize drip irrigation for your crops</p>
            </div>

            {/* Field Selection */}
            <div className="mb-6">
                <label className="block mb-2 text-gray-700 font-medium">Select Field</label>
                <select
                    value={selectedField.id}
                    onChange={handleFieldChange}
                    className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    {fieldsData.map((field) => (
                        <option key={field.id} value={field.id}>
                            {field.name} - {field.crop}
                        </option>
                    ))}
                </select>
            </div>

            {/* Current Irrigation Status */}
            <div className="bg-white p-6 rounded-2xl shadow mb-6 flex items-center gap-4">
                <Droplet className="w-10 h-10 text-blue-500" />
                <div>
                    <p className="text-gray-500 text-sm">Current Irrigation Status</p>
                    <h2
                        className={`text-2xl font-bold ${
                            irrigationStatus === 'ON' ? 'text-green-600' : 'text-red-500'
                        }`}
                    >
                        {irrigationStatus}
                    </h2>
                </div>

                {/* ON and OFF Buttons */}
                <div className="ml-auto flex gap-3">
                    <button
                        onClick={() => handleStatusChange('ON')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            irrigationStatus === 'ON'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-green-100'
                        }`}
                    >
                        ON
                    </button>
                    <button
                        onClick={() => handleStatusChange('OFF')}
                        className={`px-4 py-2 rounded-lg font-medium ${
                            irrigationStatus === 'OFF'
                                ? 'bg-red-500 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-red-100'
                        }`}
                    >
                        OFF
                    </button>
                </div>
            </div>

            {/* AI Suggestions */}
            <div className="bg-white p-4 rounded-2xl shadow mb-6">
                <h3 className="text-green-700 font-bold mb-3">AI Suggestions for {selectedField.crop}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {suggestions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Alerts Section */}
            <div className="bg-white p-6 rounded-2xl shadow mt-6">
                <h2 className="text-lg mb-4 font-bold text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" /> Alerts
                </h2>
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
            </div>
        </div>
    );
};

export default IrrigationControl;
