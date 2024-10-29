import { Request, Response } from 'express';
import { getAllUsers } from '../services/userService';

// Exporta a função para obter todos os usuários
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const addUser = async (req: Request, res: Response) => {
};
