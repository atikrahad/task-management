import { Outlet } from "react-router-dom";
import Smsidber from "./Smsidber";

const Layout = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="bg-slate-100 md:col-span-2 h-full border">
                <h1 className="text-center text-2xl font-bold py-2">Dashboard</h1>
            </div>
            <div className="col-span-12 md:col-span-10 ">
                <div className="fixed bg-slate-100 flex items-center w-full border-b py-3">
                    <div className="contents md:hidden"><Smsidber></Smsidber></div>
                    <h1 className="px-5 font-bold">ITask</h1>
                </div>
                <div className="min-h-screen bg-slate-50">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Layout;