import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sheaird/Footer/Footer";
import Navbar from "../Pages/Sheaird/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-slate-400 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;