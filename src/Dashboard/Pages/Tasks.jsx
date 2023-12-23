import { useEffect, useState } from "react";

const Tasks = () => {
  const [item, setItem] = useState([]);
  useEffect(()=>{
    fetch("task.json")
    .then(res => res.json())
    .then(data => setItem(data))
  },[])
  console.log(item);
  return (
    <div>
      <div></div>
      <div>
        <div className="border w-[70%] mx-auto min-h-screen">
          {
            item && item.map(el => <li key={el.id}>{el.title}</li>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tasks;
