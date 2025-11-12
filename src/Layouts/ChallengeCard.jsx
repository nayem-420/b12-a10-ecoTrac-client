import React from "react";

const activeChallenges = [
  {
    title: "Plastic-Free July",
    category: "Waste Reduction",
    metric: "Reduce 5 kg plastic",
    image: "/src/assets/plastic-free.png",
  },
  {
    title: "Save Energy Week",
    category: "Energy Conservation",
    metric: "Reduce 50 kWh",
    image: "",
  },
  {
    title: "Water Saver Challenge",
    category: "Water Conservation",
    metric: "Save 1000 liters",
    image: "/src/assets/water-saver.jpg",
  },
  {
    title: "Plant 10 Trees",
    category: "Green Living",
    metric: "10 trees planted",
    image: "/src/assets/plant-trees.jpg",
  },
];

const ChallengeCard = () => {
  return (
    <section className="py-10 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8">Active Challenges</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4">
        {activeChallenges.map((challenge, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={challenge.image}
              alt={challenge.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{challenge.title}</h3>
              <p className="text-sm text-green-700">{challenge.category}</p>
              <p className="mt-2 text-gray-600">{challenge.metric}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeCard;
