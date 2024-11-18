import React, { useState } from "react";

function RegistrationPage() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleAuthCard = () => {
    setShowLogin(!showLogin);
  };

  return (
   
      <div
        className={`w-full max-w-[350px] md:max-w-[70%] h-[450px] sm:h-[500px] md:h-[600px] transform-style preserve-3d transition-transform duration-600 ${showLogin ? "rotate-y-180" : ""}`}
      >
        <div className="absolute w-full h-full backface-hidden">
          {showLogin ? (
            <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col justify-center items-center">
              <h2 className="text-2xl text-gray-800 mb-4">Welcome Back!</h2>
              <form className="space-y-4 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Login
                </button>
              </form>
              <p className="mt-4 text-center">
                Don’t have an account?{" "}
                <span
                  className="text-red-500 cursor-pointer font-bold"
                  onClick={toggleAuthCard}
                >
                  Register
                </span>
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col justify-center items-center">
              <h2 className="text-2xl text-gray-800 mb-4">Create Account</h2>
              <form className="space-y-4 w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                >
                  Register
                </button>
              </form>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <span
                  className="text-red-500 cursor-pointer font-bold"
                  onClick={toggleAuthCard}
                >
                  Login
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    
  );
}

export default RegistrationPage;
