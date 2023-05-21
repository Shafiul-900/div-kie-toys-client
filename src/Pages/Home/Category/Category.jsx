import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [all, setAll] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://toys-dickie-server.vercel.app/toys')
            .then(res => res.json())
            .then(data =>{
                const cata = data.slice(0, 12);
                setCategory(cata)
            })
    }, []);
    useEffect(() => {
        fetch('https://toys-dickie-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setAll(data))
    }, []);

    const handelFilter = (categoryItem) => {
        const updateItems = category.filter((curItem) => {
            return curItem.sub_category === categoryItem;
        });
        setCategory(updateItems);
    }
    


    const navItems = <>
        <li><button onClick={()=> setCategory(all)}>All</button></li>
        <li><button onClick={()=> handelFilter('Sports Car')}>Sports car</button></li>
        <li><Link onClick={()=> handelFilter('truck')}>Truck</Link></li>
        <li><Link onClick={()=> handelFilter('regular Car')}>Regular car</Link></li>
        <li><Link onClick={()=> handelFilter('mini fire truck')}>Mini fire truck</Link></li>
        <li><Link onClick={()=> handelFilter('mini police car')}>Mini police car</Link></li>
    </>
    return (
        <div className="mt-10">
            <div className=" w-1/3 rounded-xl mx-auto navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        {navItems}
                    </ul>
                </div>
            </div>

            {/* main items section */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-5 ">
                    {
                        category.map((toy) => {
                            const { photo, car_toy_name, price } = toy;
                            return (
                                <>
                                    <div className="card  bg-slate-200 shadow-xl">
                                        <figure className="">
                                            <img src={photo} alt="Shoes" className="rounded-xl h-72 w-full" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{car_toy_name}</h2>
                                            <div className="card-actions flex">
                                                <p className="text-xl  text-orange-500">Price: ${price}</p>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;