import { NavLink } from "react-router-dom";

const useNavlist = () => {
    return (
        <div className="flex flex-col text-center">
            <NavLink className='border' to="/dashboard">Tasks</NavLink>
            
        </div>
    );
};

export default useNavlist;