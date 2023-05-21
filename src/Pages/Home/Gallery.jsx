import { useEffect } from "react";
import AOS from "aos";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 800, // Duration of animations (in milliseconds)
      easing: "ease", // Easing function for animations
      once: true, // Whether animations should be triggered only once
    });
  }, []);
  return (
    <>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <h2 className=" text-5xl block font-extrabold text-[#65C3C8] text-center my-4">
          Photo Gallery
        </h2>
        <div className="-m-1 flex flex-wrap md:-m-2" data-aos='fade-right'>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/pKJCb8D/istockphoto-939438514-612x612.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/MctjPPr/istockphoto-1069933778-170667a.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/HxmkKd8/image-98970-1670581560.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/XWBgvf0/istockphoto-539350870-170667a.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/RpG9StL/Child-Toys-Portrait-1296x728-Header.jpg"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/gMdVjmj/images.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
