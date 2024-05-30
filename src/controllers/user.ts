import { Request, Response } from "express"
import User from "../models/user"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const listUsers = await User.findAll();
        res.json(listUsers);
    } catch(error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
   
}

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if(user) {
            res.json(user)
        } else {
            res.status(404).json({
                error: `Doesn't exist user with id ${id}`
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }  
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
    
        if(!user) {
            res.status(404).json({
                error: `Doesn't exist user with id ${id}`
            })
        } else {
            await user.destroy();
            res.json({
                msg: 'User delete successfull'
            })
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }  
}

export const postUser = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const existingUser = await User.findOne({ where: { email: body.email } });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        const user = await User.create(body);
        res.json({ msg: 'User created successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }

   
}

export const updateUser = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.update(body);
            res.json({ msg: 'User updated successfully' });
        } else {
            res.status(404).json({ error: `User with id ${id} doesn't exist` });
        }
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
   
}
