import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheaird/Footer/Footer";
import Navbar from "../Pages/Sheaird/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-black">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;