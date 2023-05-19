import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";

const ShopCategory = () => {
  const [activeTab, setActiveTab] = useState("allToys");
  const [cars, setCars] = useState();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, [activeTab]);

  console.log(cars);
  return (
    <div className="my-12">
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#b18aff] text-center my-4 ">
        Available Toys
      </h2>
      <div className="tab-container text-center">
        <div className="w-full mx-auto">
          <div className="flex justify-center items-center">
            <div
              onClick={() => handleTabClick("allToys")}
              className={`cursor-pointer mr-4 py-2 px-4 rounded ${
                activeTab == "allToys" ? "bg-[#b18aff]" : ""
              }`}
            >
              All Toys
            </div>
            <div
              onClick={() => handleTabClick("Sports Car")}
              className={`cursor-pointer mr-4 py-2 px-4 rounded ${
                activeTab == "Sports Car" ? "bg-[#b18aff]" : ""
              }`}
            >
              Sport Car
            </div>
            <div
              onClick={() => handleTabClick("Truck")}
              className={`cursor-pointer py-2 px-4 rounded ${
                activeTab == "Truck" ? "bg-[#b18aff] " : ""
              }`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTabClick("Regular Car")}
              className={`cursor-pointer py-2 px-4 rounded ${
                activeTab == "Regular Car" ? "bg-[#b18aff] " : ""
              }`}
            >
              Regular Car
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6"></div>
      {/* map */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {cars &&
          cars.map((car) => (
            <>
              <div className="card w-96 bg-base-100 shadow-xl ">
                <figure>
                  <img src={car.url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{car.name}</h2>
                  <p>Price : {car.price}</p>
                  <p>rating : {car.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
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
