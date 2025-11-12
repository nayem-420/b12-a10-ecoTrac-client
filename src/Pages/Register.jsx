import React, { use } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(user);
        setUser(user);
      })
      .catch((e) => {
        const errorMessage = e.message;
        Swal.fire({
          icon: "error",
          title: { errorMessage },
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <motion.div
      className="hero bg-gradient-to-br from-green-100 via-green-50 to-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          className="text-center lg:text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold text-green-700">
            Register Now to eco<span className="text-blue-500">Trac</span>!
          </h1>
          <p className="py-6 text-gray-600">
            Join our green community and start tracking your eco-friendly
            journey today! Together we can make the Earth cleaner 🌱
          </p>
        </motion.div>

        <motion.div
          className="card bg-white/90 backdrop-blur-md w-full max-w-sm shadow-2xl border border-green-100"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form onSubmit={handleRegister} className="card-body">
            <h2 className="text-center text-3xl font-bold mb-4">
              Create Account
            </h2>
            <fieldset className="fieldset space-y-3">
              <label className="label font-semibold">Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Your name"
                required
              />

              <label className="label font-semibold">Email</label>
              <input
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />

              <label className="label font-semibold">Photo Url</label>
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full"
                placeholder="Photo URL"
              />

              <label className="label font-semibold">Password</label>
              <input
                name="password"
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
              />

              <div className="text-sm text-center mt-2">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-green-600 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>

              <motion.button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white mt-6 w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </motion.button>
            </fieldset>

            <div className="flex items-center justify-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 font-semibold">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <button className="btn bg-white text-black border-gray-300 hover:bg-gray-50 w-full">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Register with Google
            </button>
          </form>
        </motion.div>
      </div>

      

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

export default Register;
