import { Link } from "react-router-dom";
import logo from "../../../assets/rsz_2images-removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/addtoys'>Add Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/blog'>Blogs</Link></li>
    </>
    return (
        <div style={{ position: "sticky", top: '0', zIndex: "1" }} className=" navbar bg-slate-200 h-8 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>

                <div className="flex justify-center items-center">
                    <Link to='/' className="normal-case text-xl">
                        <img style={{ height: '70px', paddingTop: '0' }} src={logo} alt="" />
                    </Link>
                    <h1 className="text-lg font-bold text-red-500">DivKie-Toys</h1>
                </div>

            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end" >
                <div>
                    {user && 
                        <img style={{width: "60px"}} className="rounded-full pr-2" src={user.photoURL} alt="" /> 
                    }
                </div>
                {user ?
                    <span><button className="text-red-400" onClick={handelLogOut}>LogOut</button></span> : <Link className="pr-3 text-red-400" to="/login">LogIn</Link>
                }
            </div>
        </div>
    )
};

export default Navbar;