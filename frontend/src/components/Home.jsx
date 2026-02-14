import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Treatments from "./Treatments";
import Experts from "./Experts";
import Transformations from "./Transformations";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Treatments></Treatments>
      <Experts></Experts>
      <Transformations></Transformations>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
