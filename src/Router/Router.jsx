import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Landingpage/Landingpage";

const router =createBrowserRouter([
    {
        path: "/",
        element: <Landingpage></Landingpage>
    }
])
export default router;