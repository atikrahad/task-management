import { useContext } from "react";
import { Authpro } from "../Router/Authprovider";
import { useQuery } from "@tanstack/react-query";
import axiospublic from "../Api/axiospublic";

const useTask = () => {
    const {user} = useContext(Authpro)
    const {   data: tasks=[] } = useQuery({
        queryKey: "task",
        queryFn: async () => {
          const res = await axiospublic.get(`/task?email=${user.email}`);
          return res.data;
        },
      });
      return [ tasks]
};

export default useTask;