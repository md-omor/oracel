import React from "react";
import BestSeller from "./sections/BestSeller";
import Category from "./sections/Category";
import Drops from "./sections/Drops";
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Drops />
      <BestSeller />
      <Category />
      <Intro />
    </div>
  );
};

export default Home;
