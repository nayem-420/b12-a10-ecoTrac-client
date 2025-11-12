import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const JoinChallenge = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    fetch("/fakeData01.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setChallenge(found);
      });
  }, [id]);

  const handleJoinChallenge = () => {
    // Save to database/localStorage
    Swal.fire({
      icon: "success",
      title: "Challenge Joined!",
      text: `You've successfully joined "${challenge.name}"`,
      confirmButtonColor: "#16a34a",
    }).then(() => {
      navigate("/my-activities");
    });
  };

  if (!challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
            Join Challenge
          </h2>
          <img
            src={challenge.image}
            alt={challenge.name}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          <h3 className="text-2xl font-bold mb-4">{challenge.name}</h3>
          <p className="text-gray-600 mb-6">{challenge.description}</p>

          <div className="flex gap-4">
            <motion.button
              onClick={handleJoinChallenge}
              className="btn bg-green-600 hover:bg-green-700 text-white flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Confirm & Join
            </motion.button>
            <motion.button
              onClick={() => navigate(`/challenges/join/${id}`)}
              className="btn btn-outline flex-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JoinChallenge;
