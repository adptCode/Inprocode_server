import { Request, Response } from 'express';
import Marker from '../models/marker';

export const getMarkers = async (req: Request, res: Response) => {
    try {
        const markers = await Marker.findAll();
        res.json(markers);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const createMarker = async (req: Request, res: Response) => {
    const { latitude, longitude, name } = req.body;
    try {
        const marker = await Marker.create({ latitude, longitude, name });
        res.json(marker);
        
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};

export const deleteAllMarkers = async (req: Request, res: Response) => {
    try {
        await Marker.destroy({ where: {}, truncate: true });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};