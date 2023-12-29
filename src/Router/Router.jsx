import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Landingpage/Landingpage";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Layout from "../Dashboard/Layout/Layout";
import Addtask from "../Dashboard/Pages/Addtask";
import Profile from "../Dashboard/Pages/Profile";
import Mytask from "../Dashboard/Pages/Mytask";
import Tasks from "../Dashboard/Pages/Tasks";
import Privateroute from "./Privateroute";

const router =createBrowserRouter([
    {
        path: "/",
        element: <Landingpage></Landingpage>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/dashboard",
        element: <Layout></Layout>,
        children: [
            {
               index: true, 
               element: <Tasks></Tasks>
            },
            {
               path: '/dashboard/addtask', 
               element: <Addtask></Addtask>
            },
            {
               path: '/dashboard/mytask', 
               element: <Mytask></Mytask>
            },
            {
               path: '/dashboard/profile', 
               element: <Profile></Profile>
            },
            
        ]
    }
])
export default router;