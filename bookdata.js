import bodyParser from 'body-parser';
import express, { application } from 'express';
const app = express();
import {
  handlePost,
  handleGet,
  handleput,
  handleDelete,
} from '../controller/bookdata.js';
import authentication from '../middleware/auth.js';

const router = express.Router();

router.use(bodyParser.json());

router.post('/', authentication, handlePost);

router.get('/', authentication, handleGet);

router.put('/:id', authentication, handleput);

router.delete('/:id', authentication, handleDelete);

export default router;
