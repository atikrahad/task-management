import { IoIosAdd } from "react-icons/io";

import "react-datepicker/dist/react-datepicker.css";

const Addtask = () => {
  return (
    <div className="border p-3 text-center">
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Create a new task<IoIosAdd className="border text-3xl"></IoIosAdd>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-green-100 min-h-[30vh]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form className="max-w-xl mx-auto">
            <input
              type="text"
              maxLength={25}
              placeholder="Task name"
              className="outline-none bg-transparent w-full "
            />
            <textarea
              maxLength={100}
              className=" outline-none bg-transparent w-full"
              placeholder="Short description"
            ></textarea>
            <div className="flex bg-green-200 rounded-lg py-2 gap-2 items-center justify-between">
              <select className="outline-none  bg-green-200 w-full">
                <option value={"low"}>Low</option>
                <option value={"modarate"}>Modarate</option>
                <option value={"high"}>High</option>
              </select>

              <input
                type="number"
                placeholder="Deadline"
                className="outline-none bg-green-200 p-2 w-full "
              />
            </div>
            <input
              type="submit"
              className="btn bg-gray-600 text-green-100 block my-2"
              value={"Add Task"}
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Addtask;
