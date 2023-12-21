import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Landingpage/Landingpage";
import Login from "../Authentication/Login";

const router =createBrowserRouter([
    {
        path: "/",
        element: <Landingpage></Landingpage>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
])
export default router;