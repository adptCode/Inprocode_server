import { Router } from 'express';
import { getMarkers, createMarker, deleteAllMarkers } from '../controllers/marker';

const router = Router();

router.get('/', getMarkers);
router.post('/', createMarker);
router.delete('/all', deleteAllMarkers);

export default router;