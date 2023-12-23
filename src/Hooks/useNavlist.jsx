import { NavLink } from "react-router-dom";

const useNavlist = () => {
    return (
        <div className="flex flex-col text-center">
            <NavLink to="/dashboard">Tasks</NavLink>
            <NavLink to="/dashboard/mytask">My task</NavLink>
            <NavLink to="/dashboard/addtask">Add task</NavLink>
            <NavLink to="/dashboard/profile">Profile</NavLink>
        </div>
    );
};

export default useNavlist;