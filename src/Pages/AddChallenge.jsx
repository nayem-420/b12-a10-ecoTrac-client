import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddChallenge = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newChallenge = {
      name: form.name.value,
      category: form.category.value,
      description: form.description.value,
      image: form.image.value,
    };

    // Save to database
    // console.log(newChallenge);

    Swal.fire({
      icon: "success",
      title: "Challenge Added!",
      text: "Your challenge has been created successfully",
      confirmButtonColor: "#16a34a",
    }).then(() => {
      navigate("/challenges");
    });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            Add New Challenge
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label font-semibold">Challenge Name</label>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter challenge name"
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Category</label>
              <select
                name="category"
                className="select select-bordered w-full"
                required
              >
                <option value="">Select Category</option>
                <option value="Zero Waste">Zero Waste</option>
                <option value="Energy Saving">Energy Saving</option>
                <option value="Composting">Composting</option>
                <option value="Plastic Free">Plastic Free</option>
              </select>
            </div>

            <div>
              <label className="label font-semibold">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-32"
                placeholder="Describe your challenge"
                required
              />
            </div>

            <div>
              <label className="label font-semibold">Image URL</label>
              <input
                name="image"
                type="url"
                className="input input-bordered w-full"
                placeholder="Enter image URL"
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <motion.button
                type="submit"
                className="btn bg-green-600 hover:bg-green-700 text-white flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Challenge
              </motion.button>
              <motion.button
                type="button"
                onClick={() => navigate("/challenges")}
                className="btn btn-outline flex-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default AddChallenge;
