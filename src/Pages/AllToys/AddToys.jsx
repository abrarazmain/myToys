import { useForm } from "react-hook-form";

const AddToys = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="mb-36" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#b18aff] text-center my-12">
          Add A Toy
        </h2>
      <div className="grid gap-6  md:grid-cols-2 bg-[#b18aff] py-4 px-3  ">
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
            <option>Spots Toy</option>
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
            {...register("email")}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            {...register("price")}
            type="text"
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
          className="btn bg-[#b18aff] text-black"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  );
};

export default AddToys;
