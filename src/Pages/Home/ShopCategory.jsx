import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  const [activeTab, setActiveTab] = useState("allToys");
  const [cars, setCars] = useState();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`https://my-toys-server-red.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, [activeTab]);

  // console.log(car._id);
  return (
    <div className="my-20">
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-4 ">
        Available Toys
      </h2>
      <div className="tab-container text-center">
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center">
            <div
              onClick={() => handleTabClick("allToys")}
              className={`cursor-pointer mr-4 py-2 px-4 rounded ${
                activeTab == "allToys" ? "bg-[#65C3C8]" : ""
              }`}
            >
              All Toys
            </div>
            <div
              onClick={() => handleTabClick("Sports Car")}
              className={`cursor-pointer mr-4 py-2 px-4 rounded ${
                activeTab == "Sports Car" ? "bg-[#65C3C8]" : ""
              }`}
            >
              Sport Car
            </div>
            <div
              onClick={() => handleTabClick("Truck")}
              className={`cursor-pointer py-2 px-4 rounded ${
                activeTab == "Truck" ? "bg-[#65C3C8] " : ""
              }`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTabClick("Regular Car")}
              className={`cursor-pointer py-2 px-4 rounded ${
                activeTab == "Regular Car" ? "bg-[#65C3C8] " : ""
              }`}
            >
              Regular Car
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6"></div>
      {/* map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12  " data-aos='fade-left'>
        {cars &&
          cars.map((car) => (
            <>
              <div className="card w-96 bg-base-100 shadow-xl my-3">
                <figure>
                  <img className="h-[250px]" src={car.url} alt="Car" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{car.name}</h2>
                  <p>Price : {car.price}</p>
                  <p>rating : {car.rating}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/singleToy/${car._id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ShopCategory;
