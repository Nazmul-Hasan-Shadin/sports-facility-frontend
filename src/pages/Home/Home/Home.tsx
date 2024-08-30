import React from "react";
import Banner from "../../../components/ui/Banner/Banner";
import FeaturedFacilities from "../FeaturedFacility/FeaturedFacilities";
import HowItWorks from "../InfoGraphic/HowitWork";
import Footer from "../../Footer/Footer";
import TestimonialsSlider from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedFacilities />
      <HowItWorks/>
      <TestimonialsSlider/>
      <Footer/>
    </div>
  );
};

export default Home;
