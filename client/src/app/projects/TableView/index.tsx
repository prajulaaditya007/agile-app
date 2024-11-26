import { useAppSelector } from "@/app/redux";
import { useGetTasksQuery } from "@/state/api";
import React from "react";
import Header from "@/components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { dataGridClassNames, dataGridSxStyles } from "@/libs/utils";
import { columns } from './columns';

type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
};

const Table = ({id, setIsModalNewTaskOpen}: Props) => {
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    
    const {
        data: tasks,
        error,
        isLoading
    } = useGetTasksQuery({ projectId: Number(id) });
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred while fetching tasks.</div>;
    
    return (
        <div className="h-[540px] w-full px-4 pb-8 xl:px-6">
            <div className="pt-5">
                <Header name={'Table'} isSmallText/>
            </div>
            <DataGrid
                rows={tasks || []}
                columns={columns}
                className={dataGridClassNames}
                sx={dataGridSxStyles(isDarkMode)}
            />
        </div>
    );
};
export default Table;
