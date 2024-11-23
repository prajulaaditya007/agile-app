import { Task } from "@/state/api";
import Image from "next/image";
import { format } from "date-fns";

type Props = {
    task: Task;
};

const TaskCard = ({ task }: Props) => {
    return (
        <div className="mb-4 rounded-lg bg-white p-6 dark:bg-dark-secondary dark:text-white transition-colors">
            {task.attachments && task.attachments.length > 0 && (
                <div className="mb-4">
                    <strong className="block text-gray-800 dark:text-gray-200 mb-2">Attachments:</strong>
                    <div className="flex flex-wrap gap-3">
                        {task.attachments.slice(0, 3).map((attachment, index) => (
                            <Image
                                key={index}
                                src={`/${attachment.fileURL}`}
                                alt={`${attachment.fileName}`}
                                width={400}
                                height={200}
                                className="rounded-md object-cover"
                            />
                        ))}
                    </div>
                </div>
            )}
            <div className="space-y-2">
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">ID:</strong> {task.id}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Title:</strong> {task.title}
                </p>
                <p className="text-gray-800  dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Description:</strong> {task.description || "No description provided"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Status:</strong> {task.status}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Priority:</strong> {task.priority}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Tags:</strong> {task.tags || "No tags"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Start Date:</strong> {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Due Date:</strong> {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Author:</strong> {task.author ? task.author.username : "Unknown"}
                </p>
                <p className="text-gray-800 dark:text-gray-200">
                    <strong className="text-gray-900 dark:text-gray-100">Assignee:</strong> {task.assignee ? task.assignee.username : "Unassigned"}
                </p>
            </div>
        </div>
    );
};

export default TaskCard;
