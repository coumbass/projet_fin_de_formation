import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    navigate("/dashboard"); // Redirige vers la page Dashboard
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <div className="relative w-full">
        <img
          src="https://media.istockphoto.com/id/1469091983/photo/programmer-typing-computer-codes-on-computer.jpg?s=1024x1024&w=is&k=20&c=aBh_QyT0_snwvfnQpyOYREVZ5xEmIgPC-5-OLSH8EF4="
          className="absolute inset-0 w-full h-full object-cover"
          alt="background"
        />
        <div className="relative pt-20 flex flex-col items-center max-w-7xl mx-auto">
          <div className="flex gap-5 flex-col md:flex-row w-full">
            <div className="md:w-1/2 text-white">
              <img
                src="https://via.placeholder.com/207"
                className="w-52"
                alt="Logo"
              />
              <h1 className="mt-6 text-4xl text-amber-500">India's First eCommerce</h1>
              <h2 className="mt-4 text-3xl font-semibold">and Applied Marketing Academy</h2>
              <p className="mt-3 text-xl">
                Industry backed programs designed by professionals to accelerate your digital career.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-10 rounded-2xl shadow-lg">
              <img
                src="https://via.placeholder.com/139"
                className="w-36 mx-auto"
                alt="Learner"
              />
              <h2 className="mt-5 text-2xl font-bold text-neutral-700 text-center">Learner Login</h2>
              <p className="mt-4 text-lg text-neutral-700 text-center">Sign In to your Account</p>
              <form className="mt-6 space-y-6" onSubmit={handleSignIn}>
                <div>
                  <label className="block text-neutral-900">Email ID</label>
                  <input
                    type="email"
                    placeholder="Enter your Email ID"
                    className="w-full p-4 border border-zinc-400 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-neutral-900">Password</label>
                  <div className="flex items-center p-4 border border-zinc-400 rounded-lg">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      className="flex-1"
                    />
                    <img
                      src="https://via.placeholder.com/24"
                      alt="visibility"
                      className="w-6"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-amber-500" />
                    <span>Remember Me</span>
                  </label>
                  <a href="#" className="text-indigo-800 font-bold">Forgot Password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 text-white font-bold rounded-full mt-10"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <footer className="mt-16 text-center text-amber-500">
            <p>Terms of Use | Privacy Policy | Legal Notices & Terms</p>
            <p className="text-white font-bold mt-2">© 2023 digiaccel, All rights reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
