import React, { useState } from "react";
import { Send } from "lucide-react";

const RaiseTicket = () => {
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === "") return;
        setSubmitted(true);
        setMessage("");
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-green-700">Raise Ticket</h1>
            <p className="text-gray-600 mb-6">
                You can report your issue to the admin here.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow">
                {submitted ? (
                    <p className="text-green-600 font-medium">
                        ✅ Your ticket has been submitted successfully!
                    </p>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <label className="block text-gray-700 font-medium">
                            Describe your issue:
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter details about the issue..."
                            rows={5}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition"
                        >
                            <Send className="w-5 h-5" />
                            Submit Ticket
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default RaiseTicket;
