import express from "express";

const router = express.Router();
import TodoController from '../Controllers/TodoController';

// Routes...
router.get('/', TodoController.getTodo);
router.post('/create-task', TodoController.todoCreate);
router.put('/edit-todo/:id', TodoController.todoUpdate);
router.get('/delete-task', TodoController.todoDelete);

export default router;
