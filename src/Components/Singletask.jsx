/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdEdit } from "react-icons/md";
import axiospublic from "../Api/axiospublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Singletask = ({ el,data,setLoaddata, }) => {
  const { _id, title, description, deadline, priority } = el;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: _id },
    
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  

  const handleDeletetask = (id) => {
    axiospublic.delete(`/task/${id}`).then((res) => {
      console.log(res.data);
      toast.warn("Delete successfull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
    const remainingData = data.filter(item=> item._id !== id)
    setLoaddata(remainingData);
  };

  return (
    <div ref={drag} className={`m-2 p-3 border bg-green-300 ${isDragging? 'bg-red-300  hidden ': ''}`}>
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-medium">{title}</h1>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <BsThreeDotsVertical></BsThreeDotsVertical>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 px-5 shadow bg-base-100 rounded-box "
          >
            <button
              onClick={() => handleDeletetask(_id)}
              className="text-red-500 flex items-center gap-2"
            >
              <MdDelete></MdDelete>Delete
            </button>
            <button className="text-green-500 flex items-center gap-2">
              <MdEdit></MdEdit> Edit
            </button>
          </ul>
        </div>
      </div>
      <p>{description}</p>
      <div className="flex justify-between items-center">
        <button className="p-2 cursor-auto rounded-xl bg-cyan-200">
          {deadline}
        </button>
        <button className="bg-slate-500 text-white w-40">{priority}</button>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};
Singletask.propTypes = {
  el: PropTypes.object,
  onDropTodo: PropTypes.func,
  refetch: PropTypes.func,
};
export default Singletask;
