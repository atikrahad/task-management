import { useEffect, useState } from "react";
import Singletask from "../../Components/Singletask";
import Addtask from "../../Components/Addtask";

const Tasks = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("task.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <Addtask></Addtask>
      <div className="flex items-center justify-between">
        <div className="border w-[70%] mx-auto min-h-screen">
          {item &&
            item.map((el) => <Singletask key={el.id} el={el}></Singletask>)}
        </div>

        <div className="border w-[70%] mx-auto min-h-screen">
          {item &&
            item.map((el) => <Singletask key={el.id} el={el}></Singletask>)}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
