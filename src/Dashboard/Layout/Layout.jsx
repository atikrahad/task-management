import { Outlet } from "react-router-dom";
import Smsidber from "./Smsidber";
import useNavlist from "../../Hooks/useNavlist";

const Layout = () => {
  const navlist = useNavlist();
  return (
    <div className="grid grid-cols-12">
      <div className="bg-slate-100 relative md:col-span-2 h-full border">
        <div className="fixed px-10">
          <h1 className="text-center text-2xl font-bold py-2">Dashboard</h1>
          <ul className="hidden md:contents">{navlist}</ul>
        </div>
      </div>
      <div className="col-span-12  md:col-span-10 ">
        <div className="    ">
          <div className="fixed bg-slate-100 w-full flex items-center border-b py-3">
            <div className="contents md:hidden">
              <Smsidber></Smsidber>
            </div>
            <h1 className="px-5 font-bold">ITask</h1>
          </div>
        </div>
        <div className="min-h-[1000px] pt-12 bg-slate-50">
          <Outlet></Outlet>

        </div>
      </div>
    </div>
  );
};

export default Layout;
