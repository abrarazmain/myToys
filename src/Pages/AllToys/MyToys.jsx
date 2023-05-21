import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Utils/UseTitle";

const MyToys = () => {
  useTitle("my cars");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState(1);
  useEffect(() => {
    fetch(`https://my-toys-server-red.vercel.app/myToys/${user?.email}?sort=${sort}
        `)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [toggle, user, sort]);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://my-toys-server-red.vercel.app/deleteToy/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount == 1) {
                setToggle(!toggle);
                swalWithBootstrapButtons.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
              }
            });
        }
      });
  };

  return (
    <div className="overflow-x-auto mx-auto my-20">
      <div className=" my-12 items-center flex justify-center ">
        {" "}
        <h1 className="text-2xl">Sort by : </h1>
        <button onClick={() => setSort(1)} className="btn">
          Price Up to low
        </button>
        <button onClick={() => setSort(-1)} className="btn">
          Price Low to high
        </button>
      </div>
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
            <tr key={i}>
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
                <button onClick={() => handleDelete(toy._id)}>
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
