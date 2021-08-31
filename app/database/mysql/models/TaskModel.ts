

import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../MysqlConnection";
import ITModel from './IUModel';


class TaskModel extends Model {
  static findByIdAndDelete: any;
    static findByIdfindByIdAndDelete: any;
    static findByIdAndUpdate: any;
  static find(arg0: {}, arg1: (err: any, task: any) => void) {
      throw new Error('Method not implemented.');
  }
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public description!: string;
  public category!: string;
  public date!: Date;
}


TaskModel.init(
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

export default TaskModel;
