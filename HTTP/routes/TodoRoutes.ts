import express from "express";

const router = express.Router();
import TodoController from '../Controllers/TodoController';

// Routes...
router.get('/api/user/:id', TodoController.getTodoController);
router.post('/api/user', TodoController.addTodoController);
router.put('/api/user/:id', TodoController.updateTodoController);
router.get('/api/user/:id', TodoController.removeTodoController);

export default router;
