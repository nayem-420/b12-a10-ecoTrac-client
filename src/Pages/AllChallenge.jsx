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

  const handleCardClick = (challengeId) => {
    // Save to localStorage as joined challenge
    const joinedChallenges = JSON.parse(
      localStorage.getItem("joinedChallenges") || "[]"
    );

    // Check if already joined
    if (!joinedChallenges.includes(challengeId)) {
      joinedChallenges.push(challengeId);
      localStorage.setItem(
        "joinedChallenges",
        JSON.stringify(joinedChallenges)
      );
    }

    // Navigate to activity detail
    navigate(`/my-activities/${challengeId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <motion.section
      className="my-6 py-10 bg-green-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-green-700 mb-3">
            All Eco-Friendly Challenges
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our eco-challenges and make a positive impact on the
            environment. Track your progress and earn rewards!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {challenges.map((challenge) => (
            <motion.div
              key={challenge._id}
              className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => handleCardClick(challenge._id)}
            >
              <motion.img
                src={challenge.image}
                alt={challenge.name}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {challenge.name}
                </h3>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full inline-block mt-2">
                  {challenge.category}
                </span>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {challenge.description}
                </p>
                <div className="flex justify-between items-center mt-3">
                  <p className="font-semibold text-green-800">
                    ${challenge.price}
                  </p>
                  <p className="text-xs text-gray-400">
                    by {challenge.seller_name}
                  </p>
                </div>

                <motion.button
                  className="btn btn-sm bg-green-600 hover:bg-green-700 text-white w-full mt-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(challenge._id);
                  }}
                >
                  Join Challenge →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AllChallenges;
