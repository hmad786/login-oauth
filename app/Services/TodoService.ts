import {request, Request, response, Response} from "express"; 
import TaskModel from '../database/mysql/models/TaskModel';
import ITodoService from "./ITodoService";
 
class TodoService implements ITodoService{

    getTodo(){
        try {
          const todos  = TaskModel.find()
          response.status(200).json({ todos })
        } catch (error) {
          throw error
        }
      }

    addTodo(): void{
        try {
            const add = TaskModel.create({
                description: request.body.description,
                category: request.body.category,
                date: request.body.date
            }, (err: any) => {
                if (err) {
                    console.log('error in creating task', err);
                    return; 
                }
            })
        //   return add;
    
        }
        catch (error) {
            console.log(error);
        }

    }


    updateTodo(): void{
        try {
            const { params: { id }, body, } = request
            const updateTodo:| null =  TaskModel.findByIdAndUpdate( { _id: id }, body )
            const allTodos = TaskModel.find()
            response.status(200).json({
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
          })
        } catch (error) {
            console.log(error);
        }

    
    
      }
      

    removeTodo(): void{
        const id = request.query;
        const count = Object.keys(id).length;
        for(let i=0; i < count ; i++){
            
            // finding and deleting tasks from db using id...
            TaskModel.findByIdfindByIdAndDelete(Object.keys(id)[i], (err: any) => {
            if(err){
                console.log('error in deleting task');
                }
            })
        }

       }


}

export default TodoService;


/*
    addTodo = async (req: Request, res: Response): Promise<void> => {
        try {
            TaskModel.create({
                description: req.body.description,
                category: req.body.category,
                date: req.body.date
            }, (err: any) => {
                if (err) {
                    console.log('error in creating task', err);
                    return; 
                }
            })
    
        }
        catch (error) {
            console.log(error);
        }

    }
    */