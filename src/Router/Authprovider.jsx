import { createContext } from "react";

const Authpro = createContext()
const Authprovider = ({children}) => {
    const authinfo = {

    }
    return (
        <Authpro.Provider value={authinfo}>
            {
                children
            }
        </Authpro.Provider>
    );
};

export default Authprovider;