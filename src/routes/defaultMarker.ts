import { Router } from 'express';
import { getDefaultMarkers, getDefaultMarkersByCategories } from '../controllers/dafaultMarker';

const router = Router();

router.get('/', getDefaultMarkers);
router.get('/byCategories', getDefaultMarkersByCategories);

export default router;