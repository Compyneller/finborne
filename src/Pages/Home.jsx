import React from "react";
import Buy from "../Components/BuySellTrade/Buy";
import Cards from "../Components/Cards/Cards";
import Global from "../Components/GlobalPresence/Global";
import Hero from "../Components/HeroArea/Hero";
import Trusted from "../Components/TrustedPlatform/Trusted";
import Why from "../Components/Why/Why";
import Zero from "../Components/ZeroFees/Zero";

const Home = () => {
  return (
    <div className="homeMainContainer">
      <Hero />
      <Global />
      <Zero />
      <Trusted />
      <Cards />
      <Buy />
      <Why />
    </div>
  );
};

export default Home;
