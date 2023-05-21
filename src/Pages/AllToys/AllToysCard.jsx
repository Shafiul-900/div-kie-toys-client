// import { Link } from "react-router-dom";
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useEffect, useState, } from "react";

const AllToysCard = ({ toy }) => {
    const { _id, photo, car_toy_name, price, rating } = toy;

    const [toys, setToys] = useState([]);
    // const [details, setDetails] = useState([]);
    const [data, setData] = useState([]);
    console.log(data.photo)





    useEffect(() => {
        fetch('https://toys-dickie-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);


    const handel = (id) => {
        const data = toys.find(toy => toy._id == id)
        return setData(data);
    }

    return (
        <div className="card  bg-slate-200 shadow-xl">
            <figure className="">
                <img src={photo} alt="Shoes" className="rounded-xl h-72 w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{car_toy_name}</h2>
                <div className=" ">
                    <div className="flex justify-between">
                        <h3 className="text-xl">Toy Name:-</h3>
                        <h3 className="text-2xl  text-black">Price: ${price}</h3>
                    </div>
                    <h2 className="text-lg"> Title</h2>
                    <h2 className="text-lg">category</h2>
                </div>
                <div>

                    <div className='text-xl flex  items-center justify-between '>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <span className='ps-3 '>{rating?.number}</span>

                        {/* <Link className="flex items-center text-xl   rounded-3xl text-orange-500">Details
                        </Link> */}
                        {/* The button to open modal */}
                        <label htmlFor="my-modal-3" onClick={() => handel(_id)} >Details</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-48 top-0">✕</label>
                            {/* <div className="modal-box w-11/12 max-w-5xl"> */}

                                {/* <img className='w-full top-0 ' src={data.photo} alt="" /> */}
                                

                                {/* jkjkjkdjkjfkjdfkfjokd */}

                                <div className="card w-2/3  bg-slate-200 shadow-xl">
            <figure className="">
                <img src={photo} alt="Shoes" className="rounded-xl h-60 w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{car_toy_name}</h2>
                <div className=" ">
                    <div className="flex justify-between">
                        <h3 className="text-xl">Toy Name:-</h3>
                        <h3 className="text-2xl  text-black">Price: ${price}</h3>
                    </div>
                    <h2 className="text-lg"> Title</h2>
                    <h2 className="text-lg">category</h2>
                </div>
                <div>

                    <div className='text-xl flex  items-center justify-between '>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        >
                        </Rating>
                        <span className='ps-3 '>{rating?.number}</span>

                    </div>
                </div>
            </div>
        </div >


                                {/* jkjkjkdjkjfkjdfkfjokd */}



                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AllToysCard;