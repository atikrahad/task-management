import { FcMinus } from "react-icons/fc";
import useNavlist from "../../Hooks/useNavlist";

const Smsidber = () => {
  const navlist = useNavlist()
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="">
            <FcMinus></FcMinus>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {
              navlist
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Smsidber;
