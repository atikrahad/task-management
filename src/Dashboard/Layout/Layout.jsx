import { Outlet } from "react-router-dom";
import Smsidber from "./Smsidber";
import useNavlist from "../../Hooks/useNavlist";
import { useContext } from "react";
import { Authpro } from "../../Router/Authprovider";

const Layout = () => {
  const navlist = useNavlist();
  const { user, Logout } = useContext(Authpro);

  const handlelogout = () => {
    Logout();
  };
  return (
    <div className="grid grid-cols-12">
      <div className="bg-slate-100 relative md:col-span-2 h-full border">
        <div className="fixed px-10">
          <h1 className="text-center text-2xl font-bold py-2">Dashboard</h1>
          <ul className="hidden md:contents">{navlist}</ul>
          <button className="btn" onClick={handlelogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="col-span-12  md:col-span-10 ">
        <div className="    ">
          <div className="fixed bg-slate-100 w-full flex items-center border-b py-3">
            <div className="contents md:hidden">
              <Smsidber></Smsidber>
            </div>
            <div className="flex justify-between">
              <h1 className="px-5 font-bold">ITask</h1>
              <h1 className="px-5 font-bold">{user?.email}</h1>
            </div>
          </div>
        </div>
        <div className="min-h-screen pt-16 bg-slate-50">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Layout;
