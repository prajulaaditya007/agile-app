import { Project } from "@/state/api";
import { format } from "date-fns";

type Props = {
    project: Project;
};

const ProjectCard = ({ project }: Props) => {
    return (
        <div className="mb-4 rounded-lg bg-white p-6 dark:bg-dark-secondary dark:text-white transition-colors">
            <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">ID:</strong> {project.id}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Name:</strong> {project.name}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Description:</strong> {project.description || "No description provided"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Start Date:</strong> {project.startDate ? format(new Date(project.startDate), "P") : "Not set"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">End Date:</strong> {project.endDate ? format(new Date(project.endDate), "P") : "Not set"}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
