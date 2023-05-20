import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
    const [cars, setCars] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/allToys/--`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      });
  }, []);
  console.log(cars);
  return (
    <div className="overflow-x-auto w-full my-20">
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
          {cars.map((car,i) => (
            // eslint-disable-next-line react/jsx-key
              <tr>
                  <td>{ i+ 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                 
                  <div>
                              <div className="font-bold">{ car?.sellerName || 'unavailable'}</div>
                  </div>
                </div>
              </td>
                  <td>{car?.name}</td>
                  <td>{ car?.category}</td>
                  <td>{ car?.price}</td>
                  <td>{ car?.quantity}</td>
              <th>
                <Link to={`/singleToy/${car._id}`} className="btn  btn-xs">details</Link>
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
  );
};

export default AllToys;
