
import {Request, Response} from "express";

import TodoService from '../../app/Services/TodoService';

class TodoController{



  async getTodoController(req: Request, res: Response) {

    const todo =await getTodo();
    res.status(200).json(todo );
}

async addTodoController(req: Request, res: Response) {

  const {description,category,date} = req.body;
  const {id} = req.params;
  const todo = await addTodo({id, description, category, date});

  res.status(201).send(todo);
}


async updateTodoController(req: Request, res: Response) {

  const {description,category,date} = req.body;
  const {id} = req.params;
  const todo = await updateTodo({id, description, category, date});

  res.status(200).send(todo);

}


async deleteTodoController(req: Request, res: Response) {

  const {description,category,date} = req.body;
  const {id} = req.params;
  const todo = await removeTodo({id, description, category, date});

  res.status(204).send(todo);
}


}
export default TodoController;
