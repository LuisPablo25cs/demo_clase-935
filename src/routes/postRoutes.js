import express from 'express'
import {
    createPost, 
    getAllPost, 
} from '../controllers/postController.js'

const router = express.Router();

router.post('/', createPost); 
router.get('/', getAllPost);

export default router; 