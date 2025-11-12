import React, { Suspense } from "react";
import Banner from "./Banner";
import ChallengeCard from "../Layouts/ChallengeCard";
import Challenges from "./Challenges";
import Loading from "../Layouts/Loading";
import WhyGoGreen from "./WhyGoGreen";
import HowItWorks from "./HowItWorks";
import LiveStatistics from "./LiveStatistics";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LiveStatistics></LiveStatistics>
      <Suspense fallback={<Loading></Loading>}>
        <Challenges></Challenges>
      </Suspense>
      <WhyGoGreen></WhyGoGreen>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;
