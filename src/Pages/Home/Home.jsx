import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import ShopCategory from "./ShopCategory";
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../Utils/UseTitle";

const Home = () => {
  useTitle(`Home`)
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 800,  // Duration of animations (in milliseconds)
      easing: 'ease',  // Easing function for animations
      once: true,  // Whether animations should be triggered only once
    });
  }, []);
  return <div>
    <Banner></Banner>
    <Gallery></Gallery>
    <div data-aos=" fade-right"><ShopCategory></ShopCategory></div>
    <div data-aos="fade-left "><ContactUs></ContactUs></div>
  </div>;
};

export default Home;
