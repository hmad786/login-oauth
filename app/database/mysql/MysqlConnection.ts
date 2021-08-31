import {Sequelize}  from 'sequelize';
import database from '../../../config/Database';
import TaskModel from './models/TaskModel';
import InitTask  from './models/TaskModel';
import UserModel from './models/UserModel';
//import { InitUser } from './models/UserModel';

const {DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD} = database;

const sequelize = new Sequelize(`mysql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:3306/${DB_NAME}`);

sequelize.authenticate().then(() => {
  console.info('Mysql Database connected.');
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err);
 })

export const db = {
  sequelize,
  TaskModel: TaskModel,
  UserModel: UserModel
}

export default sequelize;