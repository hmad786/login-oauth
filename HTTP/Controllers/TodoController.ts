
import {Request, Response} from "express";

import TodoService from '../../app/Services/TodoService';

class TodoController{



  async getTodoController(req: Request, res: Response) {

    const todo =await TodoService.getTodo();
    res.status(200).json(todo );
}

async addTodoController(req: Request, res: Response) {

  const {description,category,date} = req.body;
  const {id} = req.params;
  const todo = await TodoService.addTodo({id, description, category, date});

  res.status(201).send(todo);
}


async updateTodoController(req: Request, res: Response) {

  const {description,category,date} = req.body;
  const todo = await TodoService.updateTodo({description, category, date});

  res.status(200).send(todo);

}


async removeTodoController(req: Request, res: Response) {

  const {description,category,date} = req.body;
  const {id} = req.params;
  const todo = await TodoService.removeTodo({id, description, category, date});

  res.status(204).send(todo);
}




}
export default TodoController;
