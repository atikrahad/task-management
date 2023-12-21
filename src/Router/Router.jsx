import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Landingpage/Landingpage";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Layout from "../Dashboard/Layout/Layout";

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
                
            }
        ]
    }
])
export default router;