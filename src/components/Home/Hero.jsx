import React from "react";
import heroImg from "/src/assets/hero-image.png";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center my-[80px] gap-4">
        <div className="text-capitalize font-semibold">FURNITURE STORE</div>
        <div className="text-6xl font-bold w-2/3">
          Discover the Artistry of Modern Contemporary Furniture
        </div>
        <div className="text-lg">
          Experience the elegance and functionality of cutting-edge design where
          luxury meets innovation in every piece for ultimate relaxation
        </div>
      </div>
      <img src={heroImg} alt="hero" className="w-full" />
    </div>
  );
};

export default Hero;
