import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, LogIn, UserPlus } from "lucide-react"; // Icons
import authImg from "../assets/auth-img.jpg";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const { email, password, fullName } = formData;
    if (!email || !password || !fullName) {
      setError("Please fill all required fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, update user profile with fullName here
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    console.log("Registering:", fullName, email, password);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-[700px] w-full">
      {/* Left Side Image */}
      <div className="w-1/2 h-screen hidden md:inline-block">
        <img className="h-full w-full" src={authImg} alt="leftSideImage" />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center">
        <form
          className="md:w-96 w-80 flex flex-col items-center justify-center"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          <h2 className="text-4xl text-gray-900 font-semibold">
            {isLogin ? "Sign In" : "Register"}
          </h2>
          <p className="text-sm text-gray-500/90 mt-3">
            {isLogin
              ? "Welcome back! Please sign in to continue"
              : "Create your account to get started"}
          </p>

          {/* Error */}
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          {/* Email */}
          <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-4 gap-2 mt-6">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          {/* Full Name */}
          {!isLogin && (
            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-4 gap-2">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>
          )}

          {/* Password */}
          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-4 gap-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              required
            />
          </div>

          {/* Remember + Forgot (Login only) */}
          {isLogin && (
            <div className="w-full flex items-center justify-between mt-6 text-gray-500/80">
              <div className="flex items-center gap-2">
                <input className="h-5" type="checkbox" id="checkbox" />
                <label className="text-sm" htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <a className="text-sm underline" href="#">
                Forgot password?
              </a>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-green-700 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {isLogin ? (
              <>
                <LogIn className="w-5 h-5" /> Login
              </>
            ) : (
              <>
                <UserPlus className="w-5 h-5" /> Register
              </>
            )}
          </button>

          {/* Toggle */}
          <p className="text-gray-500/90 text-sm mt-4">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <button
                  type="button"
                  className="text-green-500 hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-green-500 hover:underline"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
