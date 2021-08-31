import  Task from '../../app/models/task';
import {Request, Response} from "express";

class TodoController{

// rendering to home page
static async getTodo (req: Request, res: Response){
    try {
        await Task.find({}, (err: any, task: any) => {
            if(err){
                console.log('Error in fetching tasks from db');
                return;
            }
    
            return res.render('home', {
                tittle: "Todo List",
                task: task
            });
        })
    }
    catch (error) {
        console.log(error)
     }

}

// creating task
static todoCreate (req: Request, res: Response){
    try {
        Task.create({
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        }, (err: any) => {
            if (err) {
                console.log('error in creating task', err);
                return; 
            }

            return res.redirect('back');
            });
    }
    catch (error) {
        console.log(error);
     }
}
// deleting todo task

static async todoDelete(req: Request, res: Response) {
     const id = req.query;
     const count = Object.keys(id).length;
     for(let i=0; i < count ; i++){
         
         // finding and deleting tasks from db using id...
         await Task.findByIdAndDelete(Object.keys(id)[i], (err: any) => {
         if(err){
             console.log('error in deleting task');
             }
         })
     }
     return res.redirect('back'); 
}
}
export default TodoController;

