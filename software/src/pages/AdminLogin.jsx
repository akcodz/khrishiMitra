import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, LogIn, Loader } from "lucide-react"; 
import sanitizeInput from "../utils/sanitizeInput";
import { adminLogin } from "../firebase/authController/auth";

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { cleanData, error } = sanitizeInput(formData, "login");
    if (error) return setError(error);

    setLoading(true);

    try {
      const result = await adminLogin(cleanData.email, cleanData.password);
      if (result.success) {
        navigate("/admin-dashboard");
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-green-100 py-32">
      {/* Left Side Branding */}
      <div className="hidden md:flex w-1/2 h-full text-white flex-col items-center justify-center border-r-1 border-green-950">
        <h1 className="text-5xl font-bold text-green-900">Krishi Mitra</h1>
        <p className="text-lg mt-4 text-green-900 text-center px-8">
          Empowering Farmers with Smart Agriculture Solutions
        </p>
      </div>

      {/* Right Side Login Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center px-6">
        <form
          className="md:w-96 w-80 flex flex-col items-center justify-center p-8"
          onSubmit={handleLogin}
        >
          <h2 className="text-4xl text-gray-900 font-semibold mb-2">
            Admin Login
          </h2>
          <p className="text-base text-gray-500/90 mb-6">
            Sign in to manage the Krishi Mitra platform
          </p>

          {/* Error */}
          {error && <p className="text-red-500 text-base mb-4">{error}</p>}

          {/* Email */}
          <div className="flex items-center w-full border border-gray-300/60 h-14 rounded-full overflow-hidden pl-4 gap-3 mb-4">
            <Mail className="w-6 h-6 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Admin Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-gray-700 placeholder-gray-500/80 outline-none text-base w-full h-full"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center w-full border border-gray-300/60 h-14 rounded-full overflow-hidden pl-4 gap-3 mb-6">
            <Lock className="w-6 h-6 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent text-gray-700 placeholder-gray-500/80 outline-none text-base w-full h-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-full text-white text-lg font-medium bg-green-700 hover:bg-green-800 transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader className="animate-spin w-5 h-5" />
            ) : (
              <>
                <LogIn className="w-6 h-6" /> Login
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
