/* eslint-disable react/prop-types */
import Singletask from "./Singletask";
import { useDrop } from "react-dnd";
import axiospublic from "../Api/axiospublic";
import useTask from "../Hooks/useTask";

const LIst = ({data,   setLoaddata }) => {
  

  const [tasks] = useTask()

  const secTionTypes = ["todo", "ongoing", "complate"];

  console.log(tasks);

  

  const toDo = data?.filter((item) => item?.type === "todo");
  const onGoing = data?.filter((item) => item?.type === "ongoing");
  const complate = data?.filter((item) => item?.type === "complate");
  
  return (
    <div className="flex flex-col gap-2  md:flex-row items-baseline justify-between">
      {secTionTypes.map((type, index) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [{ isOver }, tododrop] = useDrop(() => ({
          accept: "task",
          drop: (item) => addItemtoSection(item),
          collect: (monitor) => ({
            isOver: !!monitor.isOver(),
          }),
        }));

        let text = "todo";
        let bg = "bg-slate-700";
        let taskFor = toDo;

        if (type === "ongoing") {
          text = "cngoing";
          bg = "bg-orange-400";
          taskFor = onGoing;
        }
        if (type === "complate") {
          text = "complate";
          bg = "bg-green-600";
          taskFor = complate;
        }

        const addItemtoSection = (item) => {
          console.log("droped", item, type);

          setLoaddata(prev=>{
            const chTask = prev.map(p =>{
              if(p._id === item.id){
                return {...p, type: type}
              }
              return p
            })
            return chTask
          })
          
          axiospublic.put(`/task/${item?.id}`,{type})
          .then(res=> console.log(res.data))
          // refetch()
          
        };

        return (
          <div className="w-full rounded-lg" key={index}>
            <h1
              className={`py-3 text-center rounded-t-lg text-white capitalize text-3xl font-medium ${bg}`}
            >
              {text}
            </h1>
            <div
              className={`border w-full ${
                isOver ? "bg-slate-500" : ""
              } mx-auto min-h-40 `}
              ref={tododrop}
            >
              {taskFor &&
                taskFor.map((el) => (
                  <Singletask
                    key={el._id}
                    el={el}
                    data={data}
                    setLoaddata={setLoaddata}
                    // refetch={refetch}
                  ></Singletask>
                ))}
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default LIst;
