import { useEffect, useState } from "react";
import Rating from "react-rating";
import { Link, useParams } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";
import useTitle from "../Utils/UseTitle";

const SingleToy = () => {
  useTitle("Car Details");
  const { id } = useParams();
  const [toy, serToy] = useState({});


  useEffect(() => {
    fetch(`https://my-toys-server-red.vercel.app/singleToy/${id}`)
      .then((res) => res.json())
      .then((data) => serToy(data));
  }, [id]);
 
  const { url, name, sellerName, email, price, rating, quantity, des } =
    toy || {};

  return (
    <div>
      <h2 className="text-3xl sm:text-5xl block font-extrabold text-[#65C3C8] text-center my-12 rounded ">
        Toy Details
      </h2>
      <div className="hero min-h-[500px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={url} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Name :{name}</h1>
            <p className="py-2">Seller Name : {sellerName}</p>
            <p className="py-2">Seller Email: {email}</p>
            <p className="py-2">Price:{price} taka</p>
            <p className="">
              Rating :
              <Rating
                readonly
                placeholderRating={rating}
                emptySymbol={<BsStar></BsStar>}
                placeholderSymbol={<BsStarFill></BsStarFill>}
                fullSymbol={<BsStarFill></BsStarFill>}
              />
            </p>
            <p className="py-2">Available Quantity:{quantity}</p>
            <p className="py-2 max-w-[500px] break-words">Description:{des}</p>

            <Link to="/" className="btn btn-primary">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
