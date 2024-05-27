import { Router } from 'express';
import { getStadiums } from '../controllers/stadium';

const router = Router();

router.get('/', getStadiums);

export default router;