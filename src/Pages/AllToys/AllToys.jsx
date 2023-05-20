import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    const [cars, setCars] = useState([]);
    // const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
      fetch(`http://localhost:5000/allToys/--`)
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
        });
    }, [cars]);
    
    // useEffect(() => {
    //   fetch(`http://localhost:5000/toyByName/${searchText}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCars(data);
    //     });
    // }, [cars]);

    // const handleSearch = e => { 
    //     const form = e.target
    //     const search = form.search.value
    //     setSearchText(search)
    // }
    
    // console.log(searchText);
    
  return (
    <>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
                  <input
                name="search"
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by car name"
            required
          />
                  <button
                      
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>{" "}
      <div className="overflow-x-auto w-full mb-20 mt-4">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cars.map((car, i) => (
              // eslint-disable-next-line react/jsx-key
              <tr>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">
                        {car?.sellerName || "unavailable"}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{car?.name}</td>
                <td>{car?.category}</td>
                <td>{car?.price}</td>
                <td>{car?.quantity}</td>
                <th>
                  <Link to={`/singleToy/${car._id}`} className="btn  btn-xs">
                    details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default AllToys;
