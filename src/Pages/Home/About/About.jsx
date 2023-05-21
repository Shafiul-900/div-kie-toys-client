

const About = () => {
    return (
        <div className="mt-20">
            <h3 className='text-3xl text-center text-black font-bold'>About Us</h3>
            <div className="hero min-h-screen pb-20 p-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src='https://cdn.shopify.com/s/files/1/0011/8367/8476/products/DiecastCarGT3RSR_Bentley_Golden_1_360x.png?v=1683900474' className="w-3/4  rounded-lg shadow-2xl" />
                        <img src="https://cdn.shopify.com/s/files/1/0011/8367/8476/products/DiecastCarGT3RSR_Bentley_Golden_1_360x.png?v=1683900474" className="w-1/2 border-white border-8 rounded-lg absolute right-14 top-1/2 shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-4'>

                        <h1 className="text-3xl font-bold">We have the best products and currently we are selling the best products.</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dot look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dot look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dot look even slightly believable.
                            the majority have suffered alteration in some form, by injected humour, or randomised words which dot look even slightly believable.
                        </p>
                        <button className="btn bg-gray-600-500">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;