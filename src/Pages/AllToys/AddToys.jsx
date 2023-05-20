import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";

import Swal from 'sweetalert2'

const AddToys = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const { email, displayName } = user || {};

  const onSubmit = (data) => {
    const processedData = {
      ...data,
      price: parseFloat(data.price),
    };

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(processedData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          console.log('yup');
          Swal.fire(
            'Success!',
            'Toy added successfully!',
            'ok'
          )
        }
      });
  };
  return (
    <form className="mb-36 rounded" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 rounded ">
        Add A Toy
      </h2>
      <div className="grid gap-6  md:grid-cols-2 bg-[#65C3C8] py-4 px-3  ">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Picture URL
          </label>
          <input
            {...register("url")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="URL"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Toy Category
          </label>
          <select
            {...register("category")}
            className="select select-primary w-full"
          >
            <option>Sports Car</option>
            <option>Truck</option>
            <option>Regular Car</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Toy Name
          </label>
          <input
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Toy Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            seller name
          </label>
          <input
            value={displayName || ""}
            {...register("sellerName")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Seller Name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Seller Email
          </label>
          <input
            value={email || ""}
            {...register("email")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            {...register("price")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="price"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Rating
          </label>
          <input
            {...register("rating")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="rating"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Available Quantity
          </label>
          <input
            {...register("quantity")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder=""
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Detail Description
          </label>
          <input
            {...register("des")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="description"
          />
        </div>
        <input
          className="btn bg-[#65C3C8] text-black"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  );
};

export default AddToys;
