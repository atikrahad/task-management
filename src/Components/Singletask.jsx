import PropTypes from "prop-types"
import { useDrag } from "react-dnd";
import { BsThreeDotsVertical } from "react-icons/bs";
const Singletask = ({ el }) => {
  const { title, short_description, deadline, priority } = el;

  const [{isDragging}, drag] = useDrag(() => ({
    type: "task",
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  console.log(isDragging);

  return (
    <div ref={drag} className="m-2 p-3 border bg-green-300">
      <div className="flex items-center justify-between">
        <h1 className=" text-xl font-medium">{title}</h1>
        <div>
            <BsThreeDotsVertical></BsThreeDotsVertical>
        </div>
      </div>
      <p>{short_description}</p>
      <div className="flex justify-between items-center">
        <button className="p-2 cursor-auto rounded-xl bg-cyan-200">{deadline}</button>
        <button className="bg-slate-500 text-white w-40">{priority}</button>
      </div>
    </div>
  );
};
Singletask.propTypes={
    el: PropTypes.object,
    onDropTodo: PropTypes.func
}
export default Singletask;
