import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import UserToys from "./UserToys";
import Swal from "sweetalert2";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);


    const url = `http://localhost:5000/toys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])

    const handelDelete = (id) => {
        const alert = confirm('Are You sure delete ?')

        if (alert) {
            fetch(`http://localhost:5000/toys/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Toys Added successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        });
                        const remaining = mytoys.filter(toys => toys._id !== id);
                        setMytoys(remaining);
                    }
                })
        }
    };

    return (
        <div className="overflow-x-auto w-full container mx-auto my-5 ">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                          
                        </th>
                        <th>Photo</th>
                        <th>Toys Name</th>
                        <th>Title</th>
                        <th>sub category</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th>View Details / Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mytoys.map(toys => <UserToys
                            key={toys._id}
                            toys={toys}
                            handelDelete={handelDelete}
                        ></UserToys>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;