import React, { useEffect, useState } from "react";

const AllChallenges = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/fakeData01.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <section className="my-6 py-10 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        All Eco-Friendly Products
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-700 text-sm mb-1">{product.category}</p>
              <p className="text-gray-600 text-sm">{product.description}</p>
              <p className="font-semibold mt-2 text-green-800">
                $ {product.price}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Seller: {product.seller_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllChallenges;