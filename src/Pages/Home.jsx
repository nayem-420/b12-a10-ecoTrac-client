import React, { Suspense } from "react";
import Banner from "./Banner";
import ChallengeCard from "../Layouts/ChallengeCard";
import Challenges from "./Challenges";
import Loading from "../Layouts/Loading";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-3 text-center gap-3 mt-6">
        <div className="bg-green-50 py-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-green-700">12,500 kg</h3>
          <p>CO₂ Saved</p>
        </div>
        <div className="bg-green-50 py-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-green-700">3,200 kg</h3>
          <p>Plastic Reduced</p>
        </div>
        <div className="bg-green-50 py-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-green-700">1,245+</h3>
          <p>Active Members</p>
        </div>
      </div>
      <Suspense fallback={<Loading></Loading>}>
        <Challenges></Challenges>
      </Suspense>
    </div>
  );
};

export default Home;
