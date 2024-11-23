"use client";

import { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "@/app/projects/BoardView";
import List from "@/app/projects/ListView";
import Timeline from "@/app/projects/TimelineView";

type Props = {
    params: {
        id: string;
    };
};
const Project = ({ params }: Props) => {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
    return (
        <div>
            {/* MODAL NEW TASK */}
            <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "Board" &&
                (
                    <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )}
            {activeTab === "List" &&
                (
                    <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )}
            {activeTab === "Timeline" &&
                (
                    <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
                )}
        </div>
    );
};
export default Project;
