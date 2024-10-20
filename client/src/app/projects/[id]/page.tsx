"use client";

import { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader"
import Board from "@/app/projects/BoardView";

type Props = {
    params: {
        id: string;
    };
};
const Project = ({ params }: Props) => {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
    return (
        <div>
            {/* MODAL NEW TASK */}
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "board" &&
                (
                    <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )}
        </div>
    );
};
export default Project;
