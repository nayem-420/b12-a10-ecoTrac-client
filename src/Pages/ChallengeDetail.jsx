import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const AllChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/fakeData01.json")
      .then((res) => res.json())
      .then((data) => setChallenges(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <section className="my-6 py-10 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">
            All Eco-Friendly Challenges
          </h2>
          <motion.button
            onClick={() => navigate("/challenges/add")}
            className="btn bg-green-600 hover:bg-green-700 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            + Add Challenge
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge._id}
              className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => navigate(`/challenges/${challenge._id}`)}
            >
              <img
                src={challenge.image}
                alt={challenge.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {challenge.name}
                </h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  {challenge.category}
                </span>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllChallenges;
