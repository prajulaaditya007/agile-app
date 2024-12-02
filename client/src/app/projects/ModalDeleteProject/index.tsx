"use client"

import Modal from "@/components/Modal";
import { Delete, X } from "lucide-react";
import { useDeleteProjectMutation } from "@/state/api";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};
const ModalDeleteProject = ({ isOpen, onClose }: Props) => {
    const pathName = usePathname();
    const router = useRouter();
    // Get the deleteProject mutation hook
    const [deleteProject, { isLoading: isDeleting, isSuccess }] = useDeleteProjectMutation();
    // TODO: Create a toast to show responses
    
    const extractIdFromPath = (): number | null => {
        const segments = pathName?.split("/");
        const id = segments ? segments[segments.length - 1] : null;
        return id && !isNaN(Number(id)) ? Number(id) : null;
    };
    
    const id = extractIdFromPath();
    
    const handleDelete = async (id: number | null) => {
        if (!id) {
            console.error("Invalid project ID");
        }
        
        try {
            if (id) {
                await deleteProject({ id }).unwrap();
                onClose();
                router.push("/");
            }
            
        } catch (error) {
            console.error("failed to delete project", error);
        }
    };
    
    
    return (
        <Modal isOpen={isOpen} onClose={onClose} name={"Confirm Delete Project"}>
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-gray-700 mb-4">Are you sure you want to delete this project?</p>
                <div className="flex justify-end space-x-4">
                    <button
                        className="flex items-center gap-2 px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold rounded"
                        onClick={onClose}
                    >
                        <X className="h-5 w-5" />
                        Cancel
                    </button>
                    <button
                        className="flex items-center gap-2 px-6 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded"
                        onClick={() => handleDelete(id)}
                        disabled={isDeleting}
                    >
                        <Delete className="h-5 w-5" />
                        {isDeleting ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalDeleteProject;
