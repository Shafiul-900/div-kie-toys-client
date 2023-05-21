import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import {  useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const { photo, toys_name, price, description, sub_category, rating, email, seller_name
        , title } = useLoaderData();

    return (
        <div className="card w-2/3 mx-auto bg-base-100 shadow-xl">
            <figure><img className="w-full h-96" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <div className="flex justify-between">
                    <h2 className="text-xl">{toys_name}</h2>
                    <h1>{title}</h1>
                </div>
                <div className="flex justify-between items-center gap-1">
                    <div className=" flex">
                        <h3>{rating}</h3>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                    </div>
                    <h2 className="text-2xl justify-end">Price: ${price}</h2>
                </div>
                <div className="flex justify-between">
                    <h2 className="text-3xl pb-2">{seller_name}</h2>
                    <h2>{sub_category}</h2>
                </div>
                <div>
                    <h2 className="text-2xl pb-2">{email}</h2>

                    <p>{description}</p>
                </div>
                
            </div>
        </div>
    );
};

export default ToyDetails;