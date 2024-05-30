import { Router } from 'express';
import { getEvents, getEvent, postEvent, updateEvent, deleteEvent } from '../controllers/event';

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', postEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;