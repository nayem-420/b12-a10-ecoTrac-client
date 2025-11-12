import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Login = () => {
  return (
    <motion.div
      className="hero bg-gradient-to-br from-green-100 via-green-50 to-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left side intro text */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-green-700">
            Welcome Back 🌿
          </h1>
          <p className="py-4 text-gray-600 max-w-sm">
            Log in to continue your eco journey and track your sustainable
            impact with <span className="text-green-600 font-semibold">ecoTrac</span>.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="card bg-white/90 backdrop-blur-md w-full max-w-sm shadow-2xl border border-green-100"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="card-body">
            <h1 className="text-4xl font-bold text-center mb-4">
              Login to <span className="text-green-600">eco</span>
              <span className="text-emerald-500">Trac</span>
            </h1>

            <motion.fieldset
              className="fieldset space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered"
                placeholder="Enter your email"
              />
              <label className="label font-semibold">Password</label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="Enter your password"
              />

              <div className="flex justify-between text-sm mt-2">
                <a className="link link-hover text-green-700">
                  Forgot password?
                </a>
                <p>
                  New here?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="btn bg-green-600 hover:bg-green-700 text-white mt-6 w-full"
              >
                Login
              </motion.button>
            </motion.fieldset>
          </div>
        </motion.div>
      </div>

      {/* floating eco icons */}
      <motion.div
        className="absolute top-10 left-10 text-green-300 text-6xl opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🍃
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-green-200 text-5xl opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌱
      </motion.div>
    </motion.div>
  );
};

export default Login;