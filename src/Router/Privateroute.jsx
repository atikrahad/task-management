import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Authpro } from "./Authprovider";

const Privateroute = ({children}) => {
    const {user, laoding} = useContext(Authpro)
    const location = useLocation()
    console.log(location);
    if(laoding){
        return (
            <div>Loading</div>
        )
    }else if(user?.email){
        return children
    }
    else{return <Navigate state={location.pathname} to="/login"></Navigate>;}
};

Privateroute.propTypes = {
    children: PropTypes.node,
  };

export default Privateroute;