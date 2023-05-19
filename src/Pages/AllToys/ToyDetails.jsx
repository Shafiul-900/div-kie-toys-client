
import {  useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const { picture_url, car_toy_name, } = useLoaderData();

    return (
            <div className="card w-3/4 mx-auto bg-base-100 shadow-xl">
                <figure className="w-full"><img src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{car_toy_name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
    );
};

export default ToyDetails;