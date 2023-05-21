import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard";

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toys-dickie-server.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, []);
    return (
        <div style={{ position: 'relative' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto py-5 ">
                {
                    toys.map(toy => <AllToysCard
                        key={toy._id}
                        toy={toy}
                    ></AllToysCard>)
                }
            </div>
        </div>
    );
};

export default AllToys;