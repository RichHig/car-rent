import React from "react";
import Banner from "../../components/banner/Banner";
import BookCar from "../../components/bookCar/BookCar";
import ChooseUs from "../../components/chooseUs/ChooseUs";
import Download from "../../components/download/Download";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import PickCar from "../../components/pickCar/PickCar";
import PlanTrip from "../../components/planTrip/PlanTrip";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};

export default Home;
