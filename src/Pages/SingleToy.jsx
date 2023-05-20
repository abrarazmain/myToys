import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleToy = () => {
const{ id }= useParams()
    const [toy, serToy] = useState({})
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/singleToy/${id}`)
            .then(res => res.json())
           .then(data => serToy(data))
    },[id])
    console.log(toy);
    const {url}=toy || {}

    

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={url}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
