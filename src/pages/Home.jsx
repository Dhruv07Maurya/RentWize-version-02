import React, { useContext } from "react";
import Layout from "../components/Layout";
import myContext from "../context/myContext";
import HeroSection from "../components/HeroSection";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Track from "../components/Track";
import Testimonial from "../components/Testimonial";

function Home() {
      
  return (
    <div>
      <Layout>
        <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        <Testimonial/>
      </Layout>
    </div>
  );
}

export default Home;
