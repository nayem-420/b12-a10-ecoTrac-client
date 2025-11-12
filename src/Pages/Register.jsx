import React from "react";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      className="hero bg-base-200 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Text Section */}
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold">
            Register Now to eco<span className="text-blue-500">Trac</span>!
          </h1>
          <p className="py-6 text-gray-600">
            Join our green community and start tracking your eco-friendly
            journey today! Together we can make the Earth cleaner 🌱
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-4">
              Create Account
            </h2>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Your name" />

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input"
                placeholder="Confirm password"
              />

              <motion.button
                className="btn btn-neutral mt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </fieldset>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Register;