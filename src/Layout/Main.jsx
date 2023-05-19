import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
