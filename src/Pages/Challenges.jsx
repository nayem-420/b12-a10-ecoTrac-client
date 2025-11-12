import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Challenges = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/fakeData01.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, type: "spring" },
    }),
  };

  return (
    <motion.section
      className="my-6 py-10 bg-green-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-green-700"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Eco-Friendly Products
      </motion.h2>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product, i) => (
            <motion.div
              key={product._id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg cursor-pointer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-green-700 text-sm mb-1">
                  {product.category}
                </p>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <p className="font-semibold mt-2 text-green-800">
                  $ {product.price}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Seller: {product.seller_name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            to={"/challenges"}
            className="btn btn-primary flex items-center gap-2"
          >
            View All Challenges <FaArrowRightLong />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Challenges;