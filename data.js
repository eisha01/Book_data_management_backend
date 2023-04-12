import bodyParser from 'body-parser';
import express from 'express';
import { handlePost, handlePostSignup, handleget } from '../controller/data.js';
import authentication from '../middleware/auth.js';

const router = express.Router();

router.use(bodyParser.json());

router.post('/signup', handlePostSignup);

router.post('/login', handlePost);

router.get('/', authentication, handleget);

export default router;
