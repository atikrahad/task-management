import { useContext, useEffect, useState } from "react";
import Singletask from "../../Components/Singletask";
import Addtask from "../../Components/Addtask";
import { useQuery } from "@tanstack/react-query";
import axiospublic from "../../Api/axiospublic";
import { Authpro } from "../../Router/Authprovider";

const Tasks = () => {
  const {user} = useContext(Authpro)
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("task.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const {refetch,isPending, data} = useQuery({
    queryKey: ["task"],
    queryFn: async()=>{
     const res = await  axiospublic.get(`/task?email=${user?.email}`)
      return res.data;
    }
  })
  if(isPending){
    return "loading"
  }
  
console.log(data);
  return (
    <div>
      <Addtask refetch={refetch}></Addtask>
      <div className="flex items-center justify-between">
        <div className="border w-[70%] mx-auto min-h-screen">
          {data &&
            data.map((el) => <Singletask key={el.id} el={el} refetch={refetch}></Singletask>)}
        </div>

        <div className="border w-[70%] mx-auto min-h-screen">
          {data &&
            data.map((el) => <Singletask key={el.id} el={el}></Singletask>)}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
