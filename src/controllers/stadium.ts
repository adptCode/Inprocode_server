import { Request, Response } from 'express';
import Stadium from '../models/stadium';

export const getStadiums = async (req: Request, res: Response) => {
    try {
        const stadiums = await Stadium.findAll();
        res.json(stadiums);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
};