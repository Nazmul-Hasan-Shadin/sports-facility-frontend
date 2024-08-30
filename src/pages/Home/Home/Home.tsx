import React from "react";
import Banner from "../../../components/ui/Banner/Banner";
import FeaturedFacilities from "../FeaturedFacility/FeaturedFacilities";
import HowItWorks from "../InfoGraphic/HowitWork";
import TestimonialsSlider from "../Testimonial/Testimonial";
import SeasonalPromotions from "../PromotionSection/PromotionSection";
import Footer from "../../Footer/Footer";
import HistoryMilestones from "../PromotionSection/PromotionSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedFacilities />
      <HowItWorks/>
      <HistoryMilestones/>
      <TestimonialsSlider/>
      <Footer/>
    </div>
  );
};

export default Home;
