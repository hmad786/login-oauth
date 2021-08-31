import express from "express";

const router = express.Router();
import TodoController from '../Controllers/TodoController';

// Routes...
router.get('/',  TodoController.getTodoController);
router.post('/', TodoController.addTodoController);
router.put('/:id', TodoController.updateTodoController);
router.delete('/:id',  TodoController.removeTodoController);

export default router;
