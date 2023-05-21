import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Gallery from "./Gallery";
import ShopCategory from "./ShopCategory";

import "aos/dist/aos.css";
import useTitle from "../../Utils/UseTitle";

const Home = () => {
  useTitle(`Home`);

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
