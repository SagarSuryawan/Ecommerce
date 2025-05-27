import React, { useState } from "react";

const Signin = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.email || !form.password) {
            setError("Please enter both email and password.");
            return;
        }
        alert("Logged in successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center  bg-[#106EBE]">
            <form
                onSubmit={handleSubmit}
                className="bg-[#0FFCBE] p-8 rounded-lg shadow-md w-full max-w-sm "
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                {error && (
                    <div className="text-red-600 mb-4 text-center">{error}</div>
                )}
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-gray-900 text-white rounded font-semibold hover:bg-gray-800 transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Signin;
