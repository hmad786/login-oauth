
import TaskModel from '../database/mysql/models/TaskModel';

import ITStore from '../Stores/ITStore';

class TaskStore implements ITStore{
  TaskModel: any;
  

  // create a new todo
  add(id: string, description: string, category: string, date: Date){
    const newTodo = {description, category, date };
    const todo = new this.TaskModel(newTodo);

    return todo.save();
  }

  // return all todos

  findAll() {
    return this.TaskModel.find();
  }

  

  //find todo by the id
  findById(id) {
    return this.TaskModel.findById(id);
  }

    // delete todo
  deleteById(id) {
    return this.TaskModel.findByIdAndDelete(id);
  }

  //update todo
  updateById(id, object) {
    const query = { _id: id };
    return this.TaskModel.findOneAndUpdate(query, { $set: { description: object.description, category: object.category, date: object.datedone } });
  }
}

export default TaskStore;