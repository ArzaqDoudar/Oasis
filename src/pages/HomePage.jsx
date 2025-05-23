import React from "react";
import { CategoriesSection, Hero } from "../components";

const HomePage = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <Hero />
        <CategoriesSection />
      </div>
    </div>
  );
};

export default HomePage;
