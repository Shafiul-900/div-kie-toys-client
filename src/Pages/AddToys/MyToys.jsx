// import { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProviders";

const CheckOut = () => {
    // const services = useLoaderData();
    // const { title, _id, price, img } = services;
    // const { user } = useContext(AuthContext);

    const handelAdd = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const date = form.date.value;
        const phone = form.phone.value;
        
       const user = {firstName, date, phone}
        console.log(user);




        // fetch('http://localhost:5000/checkout', {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(checkout)
        // } )
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if(data.insertedId){
        //         alert('SuccessFully')
        //     }
        // })
    }

    return (
        <div>
            <h3 className="text-3xl text-center ">Book Service </h3>
            <form onSubmit={handelAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Last Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email"  placeholder="Email" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-block bg-orange-600" type="Submit" value="Order Conform" />
                </div>
            </form>
            <div className="card-body">
            </div>
        </div>
    );
};

export default CheckOut;