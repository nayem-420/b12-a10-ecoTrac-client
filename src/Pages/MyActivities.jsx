import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { FaTrophy, FaFire, FaLeaf } from "react-icons/fa";

const MyActivities = () => {
  const navigate = useNavigate();
  const [joinedChallenges, setJoinedChallenges] = useState([]);

  useEffect(() => {
    // Fetch user's joined challenges from localStorage/database
    // For demo, fetching all and marking some as joined
    fetch("/fakeData01.json")
      .then((res) => res.json())
      .then((data) => {
        // Simulate joined challenges with progress
        const joined = data.slice(0, 4).map((challenge) => ({
          ...challenge,
          progress: Math.floor(Math.random() * 100),
          joinedDate: new Date().toLocaleDateString(),
        }));
        setJoinedChallenges(joined);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const totalProgress =
    joinedChallenges.reduce((sum, c) => sum + c.progress, 0) /
      joinedChallenges.length || 0;

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            My Activities Dashboard
          </h1>
          <p className="text-gray-600">
            Track your eco-friendly journey and progress
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800">
              {joinedChallenges.length}
            </h3>
            <p className="text-gray-600">Active Challenges</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaFire className="text-5xl text-orange-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800">
              {totalProgress.toFixed(0)}%
            </h3>
            <p className="text-gray-600">Overall Progress</p>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-6 shadow-lg text-center"
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <FaLeaf className="text-5xl text-green-500 mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-800">
              {joinedChallenges.filter((c) => c.progress === 100).length}
            </h3>
            <p className="text-gray-600">Completed</p>
          </motion.div>
        </div>

        {/* Joined Challenges List */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Your Challenges
          </h2>

          {joinedChallenges.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 mb-4">
                You haven't joined any challenges yet
              </p>
              <motion.button
                onClick={() => navigate("/challenges")}
                className="btn bg-green-600 hover:bg-green-700 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Challenges
              </motion.button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {joinedChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge._id}
                  className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow cursor-pointer"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate(`/my-activities/${challenge._id}`)}
                >
                  <div className="flex gap-4">
                    <img
                      src={challenge.image}
                      alt={challenge.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">
                        {challenge.name}
                      </h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {challenge.category}
                      </span>
                      <p className="text-xs text-gray-500 mt-2">
                        Joined: {challenge.joinedDate}
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-bold text-green-600">
                        {challenge.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className="bg-green-600 h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${challenge.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </div>

                  <motion.button
                    className="btn btn-sm bg-green-600 hover:bg-green-700 text-white w-full mt-4"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/my-activities/${challenge._id}`);
                    }}
                  >
                    View Details →
                  </motion.button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MyActivities;
