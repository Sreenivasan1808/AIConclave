import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Tab from "./Tab";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-fit">
      <div className="w-[60%] m-2 fixed top-0 z-10">
        <Navbar></Navbar>
      </div>
      <Hero />
      <Tab></Tab>
    </div>
  );
};

export default Home;
