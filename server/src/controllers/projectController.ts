import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: `Error retrieving projects : ${error.message}` });
    }
};


export const createProject = async (req: Request, res: Response): Promise<void> => {
    const { name, description, startDate, endDate } = req.body;
    try {
        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                startDate,
                endDate
            }
        });
        res.status(201).json(newProject);
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: `Error creating project : ${error.message}` });
    }
};

export const deleteProject = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    
    try {
        const deleteProject = await prisma.project.delete({
            where: {
                id: parseInt(id, 10),
            },
        })
        res.status(201).json(deleteProject);
    }
    catch (error: any) {
        console.error(error);
        res.status(500).json({ message: `Error deleting project : ${error.message}` });
    }
}