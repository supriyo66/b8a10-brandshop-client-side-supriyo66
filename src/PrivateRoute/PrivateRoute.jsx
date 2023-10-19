import { useContext } from "react";
import { AuthContext } from "../pages/Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext);

    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;