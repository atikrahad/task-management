import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Authpro } from "./Authprovider";

const Privateroute = ({children}) => {
    const {user, laoding} = useContext(Authpro)

    if(laoding){
        return 'fdskjh'
    }else if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>;
};

Privateroute.propTypes = {
    children: PropTypes.node,
  };

export default Privateroute;