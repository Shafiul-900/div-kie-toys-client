import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditToys = () => {

    const toys = useLoaderData();
    console.log(toys);
    const {description, email, photo, price, quantity, rating, seller_name, sub_category, title, toys_name, _id} = toys;

    const handelEditToys = event => {
        event.preventDefault();
        const form = event.target;
        const seller_name = form.seller_name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const toys_name = form.toys_name.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const title = form.title.value;
        const toys = {seller_name, email, photo, toys_name, sub_category, price, rating, quantity, description, title};
        // console.log(toys);
        // form.reset();
  
        fetch(`https://toys-dickie-server.vercel.app/toys/${_id}`, {
           method: "PATCH",
           headers: {
              'content-type': 'application/json'
           },
           body: JSON.stringify(toys)
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
           if(data.matchedCount){
              Swal.fire({
                 title: 'success!',
                 text: 'Toys Update successfully',
                 icon: 'success',
                 confirmButtonText: 'Ok'
               })
           }
        })
 
     };

    return (
        <div className="container mx-auto">
         <form onSubmit={handelEditToys}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" name="seller_name"  defaultValue={seller_name} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" defaultValue={email} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Toys Photo URL</span>
                  </label>
                  <input type="text" name="photo" defaultValue={photo} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Toys name</span>
                  </label>
                  <input type="text" name="toys_name"  defaultValue={toys_name} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Sub Category</span>
                  </label>
                  <input type="text" name="sub_category"  defaultValue={sub_category} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price" defaultValue={price} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name="rating"  defaultValue={rating} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Quantity</span>
                  </label>
                  <input type="text" name="quantity"  defaultValue={quantity} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Description</span>
                  </label>
                  <input type="text" name="description"  defaultValue={description} className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Title</span>
                  </label>
                  <input type="text" name="title"  defaultValue={title} className="input input-bordered" />
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

export default EditToys;