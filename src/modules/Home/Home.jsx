import React from "react";
import BestSeller from "./sections/BestSeller";
import Blog from "./sections/Blog";
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
      <Blog />
    </div>
  );
};

export default Home;
