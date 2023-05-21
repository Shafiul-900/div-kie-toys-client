// import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
// import { useEffect, useState, } from "react";
import { Link } from 'react-router-dom';

const AllToysCard = ({ toy }) => {
    const { _id, photo, toys_name, price, sub_category, rating, title, } = toy;


    return (
        <div className="card  bg-slate-200 shadow-xl">
            <figure className="">
                <img src={photo} alt="Shoes" className="rounded-xl h-72 w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{toys_name}</h2>
                <div className=" ">
                    <div className="flex justify-between">
                        <h3 className="text-xl">{sub_category
                        }</h3>
                        <h3 className="text-2xl  text-black">Price: ${price}</h3>
                    </div>
                    <h2 className="text-lg">{title}</h2>
                    <h2 className="text-lg"> Rating: {rating}</h2>
                </div>
                <div>

                    <div className='text-xl flex  items-center justify-between '>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>


                        <Link to={`/toys/${_id}`} className="flex items-center text-xl   rounded-3xl text-orange-500">Details
                        </Link>
                      
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllToysCard;