import { Router } from 'express';
import { getDates } from '../controllers/dates'

const router = Router();

router.get('/', getDates);

export default router