import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const AllToysCard = ({ toy }) => {
    const { _id, picture_url, car_toy_name, selar_name, price } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture_url} alt="Shoes" className="rounded-xl h-72" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{car_toy_name}</h2>
                <div className="card-actions flex">
                    <p className="text-xl  text-orange-500">Price: ${price}</p>

                </div>
                <div>
                <Link to={`/toys/${_id}`} className=" text-xl bg-white  rounded-3xl text-orange-500"><FaArrowRight></FaArrowRight>
                 </Link> 
                  {/* <Link to='/login' className=" text-xl bg-white  rounded-3xl text-orange-500"><FaArrowRight></FaArrowRight> </Link> */}
                </div>
            </div>
        </div>
    );
};

export default AllToysCard;