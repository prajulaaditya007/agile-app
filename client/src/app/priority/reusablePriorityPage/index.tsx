import { Priority, Task, useGetTasksByUserQuery } from "@/state/api";
import { useState } from "react";
import { useAppSelector } from "@/app/redux";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  priority: Priority;
};
const ReusablePriorityPage = ({priority}: Props) => {
    const [view, setView] = useState("list");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
    const userId = 1;
    const {data: tasks, isLoading, isError: isTasksError} = useGetTasksByUserQuery(userId || 0, {
      skip: false
      //TODO: make it `userId === null` after API change is made for auth.
    });
    
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const filteredTasks = tasks?.filter((tasks: Task) => tasks.priority === priority);
    
    if (isTasksError || !tasks) return <div>Error Fetching tasks</div>
    
    return (
        <div className={`m-5 p-4`}>
            <ModalNewTask isOpen={isModalNewTaskOpen} onClose={()=>setIsModalNewTaskOpen(false)} />
        {/*    7:04:00 */}
        </div>
    );
};
export default ReusablePriorityPage;
