import {request, Request, response, Response} from "express"; 
import TaskModel from '../database/mysql/models/TaskModel';
import ITodoService from "./ITodoService";
import TaskStore from "../Stores/TaskStore";

import Task from '../../app/database/mysql/models/TaskModel';
 
class TodoService implements ITodoService{


//app.get('/', (req, res) => {
    getTodo(){
        TaskStore.findAll().then((TaskModel) => {
          return response.json(Task);
        });

    }

    //app.post('/', (req, res) => {
    addTodo(){
        const {description,category,date} = request.body;
        TaskStore.create(request.body).then((TaskModel) => {
            return response.json(Task);
          });


    }

    //app.delete('/:id', (req, res) => {

    removeTodo(){
        const { id } = request.params;
        TaskStore.deleteById(id).then((ok) => {
          console.log(ok);
          console.log(`Deleted record with id: ${id}`);
          response.status(200).json([]);
        });


    }

    //app.put('/:id', (req, res) => {
    updateTodo(){
        const { id } = request.params;
        const todo = { description: request.body.description, category: request.body.category, date: request.body.date};
        TaskStore.updateById(id, todo)
          .then(response.status(200).json([]));


    }
      

}


export default TodoService;


 /*   

    addTodo(todoBody){
        try {
            TaskModel.create({
                description: request.body.description,
                category: request.body.category,
                date: request.body.date
            }, todoBody,)

            const response = {message: "Todo added"}
            return response;
            
    
        }
        catch (error) {
            console.log(error);
        }

    }


    updateTodo(todoBody){
        try {

            const updateTodo:| null =  TaskModel.findByIdAndUpdate( { _id: todoBody.id }, todoBody, )
            const allTodos = TaskModel.find({ _id: todoBody.id }, todoBody,);
            const response = {
            message: "Todo updated",
            todo: updateTodo,
            todos: allTodos,
            }

            return response;
        } catch (error) {
            console.log(error);
        }

    }
      

    removeTodo(){
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
        const response = {message: "Todo deleted"};
            return response;

       }


}

export default TodoService;


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