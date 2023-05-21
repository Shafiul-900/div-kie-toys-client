import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Category></Category>
            <Gallery></Gallery>
            <About></About>
        </div>
    );
};

export default Home;