

const AddToys = () => {


   const handelAddToys = event => {
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

      fetch('http://localhost:5000/toys', {
         method: "POST",
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(toys)
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
      })
   };

   return (

      <div className="container mx-auto">
         <h3 className="text-3xl text-center ">Book Service </h3>
         <form onSubmit={handelAddToys}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Seller Name</span>
                  </label>
                  <input type="text" name="seller_name"  placeholder="Seller Name" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="Email" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Toys Photo URL</span>
                  </label>
                  <input type="text" name="photo" placeholder="Toys Photo URL" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Toys name</span>
                  </label>
                  <input type="text" name="toys_name"  placeholder="Toys Name" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Sub Category</span>
                  </label>
                  <input type="text" name="sub_category"  placeholder="Sub Category" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Price</span>
                  </label>
                  <input type="text" name="price"  placeholder="Price" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name="rating"  placeholder="Rating" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Quantity</span>
                  </label>
                  <input type="text" name="quantity"  placeholder="Quantity" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Description</span>
                  </label>
                  <input type="text" name="description"  placeholder="Description" className="input input-bordered" />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Title</span>
                  </label>
                  <input type="text" name="title"  placeholder="Title" className="input input-bordered" />
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

export default AddToys;