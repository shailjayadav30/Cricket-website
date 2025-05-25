import axios, { AxiosError } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting after registration

const Register: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // For error messages
  const [success, setSuccess] = useState<string | null>(null); // For success messages
  const navigate = useNavigate(); // For redirecting to login page

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success messages

    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        name: fullName,
        email: email,
        password: password,
        confirmpassword: confirmPassword, // Fixed typo from confirmpassword
      });

      const data = response.data; // axios.post already parses JSON, no need for response.data()
      console.log("Registration successful:", data);

      // Store JWT token in localStorage (or use another method like cookies)
      localStorage.setItem("token", data.token);

      // Set success message
      setSuccess(data.message || "Registration successful! Redirecting to login...");

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Handle errors from backend
      const err =
      error as AxiosError<{
        message:string}>
        const errmsg=err.response?.data?.message || err.message || "An eror occured during registration"
        console.log("Error in register",error)
        alert(
          errmsg
        )
    }
  };

  return (
    <div className="min-h-screen pt-14 flex items-center justify-center bg-gray-900 to-gray-100">
      <div className="bg-white p-6 pt-4 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Register</h2>

        {/* Display success or error messages */}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-600">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1b9aaa] text-white py-2 rounded-md hover:bg-[#028293] transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;