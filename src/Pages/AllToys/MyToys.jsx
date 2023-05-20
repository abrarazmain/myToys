import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}
        `)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  return (
    <div className="overflow-x-auto my-20">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Email</th>
            <th>Toy Name</th>
            <th>pic URL</th>
            <th>Toy Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, i) => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <th>{i + 1}</th>
              <td>{toy.sellerName}</td>
              <td>{toy.email}</td>
              <td>{toy.name}</td>
              <td>{toy.url}</td>
              <td>{toy.category}</td>
              <td>{toy.price}</td>
              <td>{toy.rating}</td>
              <td>{toy.quantity}</td>
              <td>
                <Link to={`/updateToy/${toy._id}`}>
                  <BiEdit></BiEdit>
                </Link>{" "}
                <button>
                  <MdDeleteForever></MdDeleteForever>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Email</th>
            <th>Toy Name</th>
            <th>pic URL</th>
            <th>Toy Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyToys;
