import React from "react";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from '../components/SectionFour'
import Footer from '../components/Footer'
//ANIMATED AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
  AOS.init();
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
}

export default HomePage;
