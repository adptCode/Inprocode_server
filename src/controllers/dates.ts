import { Request, Response } from 'express';
import  Dates  from '../models/dates'



export const getDates = async (req: Request, res: Response) => {
    const dates = await Dates.findAll();
    res.json(dates);
};