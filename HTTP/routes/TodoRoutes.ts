import express from "express";

const router = express.Router();
import TodoController from '../Controllers/todoController';

// Routes...
router.get('/', TodoController.getTodo);
router.post('/create-task', TodoController.todoCreate);
router.get('/delete-task', TodoController.todoDelete);

export default router;
