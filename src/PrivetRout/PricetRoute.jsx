import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PricetRoute = ({children}) => {

    const location = useLocation();
    console.log(location);
    const {user, loading} = useContext(AuthContext);

    if(loading) {
        return <h1>Logding...</h1>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PricetRoute;