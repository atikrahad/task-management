import { useContext, useEffect, useState } from "react";
import Addtask from "../../Components/Addtask";

import axiospublic from "../../Api/axiospublic";
import { Authpro } from "../../Router/Authprovider";
import LIst from "../../Components/LIst";

const Tasks = () => {
  const { user } = useContext(Authpro);
  const [loaddata, setLoaddata] = useState([])
  


 
  useEffect(()=>{
    axiospublic.get(`/task?email=${user?.email}`)
    .then(res =>setLoaddata(res.data) )
  },[user])
  
 

  return (
    <div>
      <Addtask 
      // refetch={refetch}
      loaddata={loaddata}
      setLoaddata={setLoaddata}
      ></Addtask>
      <LIst 
      // refetch={refetch} 
      data={loaddata}
      setLoaddata={setLoaddata}
      ></LIst>
    </div>
  );
};

export default Tasks;
