import  TaskModel from '../../app/database/mysql/models/Task';
import {Request, Response} from "express";
import { get } from "lodash";

import TodoService from '../../app/Services/TodoService';

class TodoController{
    TodoService: any;

addTodoController(req: Request, res: Response) {
    const userId = get(req, "user._id");
    const body = req.body;
  
    const post = addTodo ({ ...body, user: userId });
  
    return res.send(post);
}


updateTodoController(req: Request, res: Response) {
    const userId = get(req, "user._id");
    const postId = get(req, "params.postId");
    const update = req.body;
  
    const post = findPost({ postId });
  
    if (!post) {
      return res.sendStatus(404);
    }
  
    if (String(post.user) !== userId) {
      return res.sendStatus(401);
    }
  
        const updatedPost = findAndUpdate({ postId }, update, { new: true });
  
        return res.send(updatedPost);
  
    }


    deletePostHandler(req: Request, res: Response) {
        const userId = get(req, "user._id");
        const postId = get(req, "params.postId");
      
        const post = findPost({ postId });
      
        if (!post) {
          return res.sendStatus(404);
        }
      
        if (String(post.user) !== String(userId)) {
          return res.sendStatus(401);
        }
      
        deletePost({ postId });
      
        return res.sendStatus(200);
      }


}
export default TodoController;

function addTodo(arg0: any) {
    throw new Error('Function not implemented.');
}

function findPost(arg0: { postId: any; }) {
    throw new Error('Function not implemented.');
}

function findAndUpdate(arg0: { postId: any; }, update: any, arg2: { new: boolean; }) {
    throw new Error('Function not implemented.');
}

