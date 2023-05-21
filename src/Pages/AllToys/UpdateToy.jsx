import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import useTitle from "../../Utils/UseTitle";

const UpdateToy = () => {
  useTitle("Update Cars");
  const { register, handleSubmit } = useForm();

  const toy = useLoaderData();

  const onSubmit = (data) => {
    const processedData = {
      ...data,
      price: parseFloat(data.price),
      rating: parseFloat(data.rating),
    };
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
        text: "You wont to update this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, UPDATE",
        cancelButtonText: "No, cancel!",
        // reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`https://my-toys-server-red.vercel.app/updateToy/${toy?._id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(processedData),
          })
            .then((res) => res.json())
            .then((result) => {
          
              if (result.modifiedCount) {
                swalWithBootstrapButtons.fire(
                  "UPDATED!",
                  "Your file has been updated.",
                  "success"
                );
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled", "error");
        }
      });
  };

  return (
    <form className="mb-36 rounded" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 rounded ">
        Update The Toy
      </h2>
      <div className="grid gap-6  md:grid-cols-2 bg-[#65C3C8] py-4 px-3  ">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Picture URL
          </label>
          <input
            defaultValue={toy?.url}
            {...register("url")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="URL"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Toy Name
          </label>
          <input
            defaultValue={toy?.name}
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            placeholder="Toy Name"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            defaultValue={toy?.price}
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
            value={toy?.rating}
            {...register("rating")}
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="rating (max value =5)"
            max="5"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Available Quantity
          </label>
          <input
            defaultValue={toy?.quantity}
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
            defaultValue={toy?.des}
            {...register("des")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="description"
          />
        </div>
        <input
          className="btn bg-[#65C3C8] text-black"
          type="submit"
          value="Update"
        />
        <Link to="/myToys">
          {" "}
          <input
            className="btn w-full bg-[#65C3C8] text-black"
            type="submit"
            value="Back to My toys"
          />
        </Link>
      </div>
    </form>
  );
};

export default UpdateToy;
