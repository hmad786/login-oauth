

import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from './IModel';
import IModel from './IModel';

class TaskModel {
  private _taskModel: IModel;
  
  constructor(taskModel: IModel) {
    this._taskModel = taskModel;
  }

  get id (): string {
       return this._taskModel.id;
  }

  get description (): string {
    return this._taskModel.description;
  }
  get category (): string {
    return this._taskModel.category;
  }

  get createdAt (): Date {
    return this._taskModel.createdAt; 
  }


}

export default TaskModel;





/*
class Task extends Model {
  static findByIdAndDelete: any;
  static find(arg0: {}, arg1: (err: any, task: any) => void) {
      throw new Error('Method not implemented.');
  }
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public description!: string;
  public category!: string;
  public date!: Date;
}


Task.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
    },
    description:{
      type: new DataTypes.STRING(128),
      allowNull: false,
    },

    category: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
      createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "tasks",
    sequelize, // passing the `sequelize` instance is required
  }
);

export default Task;

*/
