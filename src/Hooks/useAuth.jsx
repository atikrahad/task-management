import { useContext } from "react";
import { Authpro } from "../Router/Authprovider";

const useAuth = () => {
    const result = useContext(Authpro)
    return result
};

export default useAuth;