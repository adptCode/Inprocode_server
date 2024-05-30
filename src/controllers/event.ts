import { Request, Response } from 'express';
import Event from '../models/event';

export const getEvents = async (req: Request, res: Response) => {
    const events = await Event.findAll();
    res.json(events);
};

export const getEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const event = await Event.findByPk(id);

    if (event) {
        res.json(event);
    } else {
        res.status(404).json({
            msg: `Doesn't exist event with id ${id}`
        });
    }
};

export const deleteEvent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const event = await Event.findByPk(id);

    if (!event) {
        res.status(404).json({
            msg: `Doesn't exist event with id ${id}`
        });
    } else {
        await event.destroy();
        res.json({
            msg: 'Event delete successful'
        });
    }
};

export const postEvent = async (req: Request, res: Response) => {
    const { title, date, color, start, end } = req.body;

    console.log("Received data:", req.body);
    console.log(date)
    if (!date) {
        return res.status(400).json({
            msg: 'La data è obbligatoria'
        });
    }

    try {
        const event = await Event.create({title,date,color,start,end});
        res.json({
            msg: 'Event create successful',
            event
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
};

export const updateEvent = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const event = await Event.findByPk(id);

        if (event) {
            await event.update(body);
            res.json({
                msg: 'Event update successful',
                event
            });
        } else {
            res.status(404).json({
                msg: `Doesn't exist event with id ${id}`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Something went wrong'
        });
    }
};