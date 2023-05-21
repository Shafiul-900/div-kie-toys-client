import banner1 from '../../../assets/bnner/istockphoto-1272759361-612x612.jpg';
import banner2 from '../../../assets/bnner/images.jpeg';
import banner3 from '../../../assets/bnner/images (2).jpeg';
import banner4 from '../../../assets/bnner/images (1).jpeg';
import banner5 from '../../../assets/bnner/beautiful-toy-car-design-template-5a31be8dfefd05f9bebb2844b7718fc6_screen.jpg';
import banner6 from '../../../assets/bnner/banner.2.jpg';

const Banner = () => {
    return (
        <div className="carousel  w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full " />
                <div className="absolute left-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>The best car toys for your baby within your price range</h2>
                        <p>Many have taken care doy from us for their children and they have got the right products.  Can take for your baby</p>
                        <div>
                            <button className="btn  bg-red-500 mr-5">Discover More</button>
                            <button className="btn btn-outline btn-success">Shop Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn bg-red-500  btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn   btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full " />
                <div className="absolute  left-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>The best car toys for your baby within your price range</h2>
                        <p>Many have taken care doy from us for their children and they have got the right products.  Can take for your baby</p>
                        <div>
                            <button className="btn  bg-red-500 mr-5">Discover More</button>
                            <button className="btn btn-outline btn-success">Shop Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn bg-red-500  btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn   btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full " />
                <div className="absolute  left-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>The best car toys for your baby within your price range</h2>
                        <p>Many have taken care doy from us for their children and they have got the right products.  Can take for your baby</p>
                        <div>
                            <button className="btn bg-red-500 mr-5">Discover More</button>
                            <button className="btn btn-outline btn-success">Shop Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn bg-red-500 bg-red-500  btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn   btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full " />
                <div className="absolute  left-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>The best car toys for your baby within your price range</h2>
                        <p>Many have taken care doy from us for their children and they have got the right products.  Can take for your baby</p>
                        <div>
                            <button className="btn  bg-red-500 mr-5">Discover More</button>
                            <button className="btn btn-outline btn-success">Shop Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn bg-red-500  btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn   btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full " />
                <div className="absolute  left-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>The best car toys for your baby within your price range</h2>
                        <p>Many have taken care doy from us for their children and they have got the right products.  Can take for your baby</p>
                        <div>
                            <button className="btn  bg-red-500 mr-5">Discover More</button>
                            <button className="btn btn-outline btn-success">Shop Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-outline  btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn   btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full " />
                <div className="absolute  left-0 h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2 '>
                        <h2 className='text-6xl font-bold'>The best car toys for your baby within your price range</h2>
                        <p>Many have taken care doy from us for their children and they have got the right products.  Can take for your baby</p>
                        <div>
                            <button className="btn  bg-red-500 mr-5">Discover More</button>
                            <button className="btn btn-outline btn-success">Shop Toys</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-outline  btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn   btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;