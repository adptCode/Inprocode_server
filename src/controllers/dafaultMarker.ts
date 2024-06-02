import { Request, Response } from 'express';
import DefaultMarker from '../models/defaultMarker';

export const getDefaultMarkers = async (req: Request, res: Response) => {
    try {
        const markers = await DefaultMarker.findAll();
        res.json(markers);
    } catch (error) {
        console.error('Error fetching default markers:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const getDefaultMarkersByCategories = async (req: Request, res: Response) => {
    const { categories } = req.query;
    try {
        const categoryArray = (categories as string).split(',');
        const markers = await DefaultMarker.findAll({
            where: {
                category: categoryArray
            }
        });
        res.json(markers);
    } catch (error) {
        console.error('Error fetching default markers by categories:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
};