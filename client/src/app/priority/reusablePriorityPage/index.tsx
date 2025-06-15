"use client";

import { Priority, Task, useGetTasksByUserQuery } from "@/state/api";
import { useState } from "react";
import { useAppSelector } from "@/app/redux";
import ModalNewTask from "@/components/ModalNewTask";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import { DataGrid } from "@mui/x-data-grid";
import { dataGridClassNames, dataGridSxStyles } from "@/libs/utils";
import { columns } from "@/libs/columns";

type Props = {
  priority: Priority;
};

const ReusablePriorityPage = ({ priority }: Props) => {
  const [view, setView] = useState("list");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  const userId = 1;
  const {
    data: tasks,
    isLoading,
    isError: isTasksError,
  } = useGetTasksByUserQuery(userId || 0, {
    skip: false,
    //TODO: make it `userId === null` after API change is made for auth.
  });

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  const filteredTasks = tasks?.filter(
    (tasks: Task) => tasks.priority === priority
  );

  if (isTasksError || !tasks) return <div>Error Fetching tasks</div>;

  return (
    <div className={`m-5 p-4`}>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
      />
      <Header
        name={"Priority Page"}
        buttonComponent={
          <button
            className={`mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`}
            onClick={() => setIsModalNewTaskOpen(true)}
          >
            Add Task
          </button>
        }
      />
      <div className={`mb-4 flex justify-start`}>
        <button
          className={`px-4 py-2 ${view === "list" ? "bg-gray-300" : "bg-white"} rounded-l`}
          onClick={() => setView("list")}
        >
          List
        </button>

        <button
          className={`px-4 py-2 ${view === "table" ? "bg-gray-300" : "bg-white"} rounded-l`}
          onClick={() => setView("table")}
        >
          Table
        </button>
      </div>
      {isLoading ? (
        <div>Loading tasks...</div>
      ) : view === "list" ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredTasks?.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        view === "table" &&
        filteredTasks && (
          <div className="w-full">
            <DataGrid
              rows={filteredTasks}
              columns={columns}
              checkboxSelection
              getRowId={(row) => row.id}
              className={dataGridClassNames}
              sx={dataGridSxStyles(isDarkMode)}
            />
          </div>
        )
      )}
    </div>
  );
};
export default ReusablePriorityPage;
