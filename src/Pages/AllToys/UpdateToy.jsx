import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {
    const toy = useLoaderData()
    console.log(toy);
    return (
        <div>
            
        </div>
    );
};

export default UpdateToy;