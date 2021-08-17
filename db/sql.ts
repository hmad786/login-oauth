
import mysql from 'mysql2';
/*
 import connection=mysql.createConnection;({
   host:'localhost',
   username:'madi',
   password:'Madi@123',
   database:'todo'
 })

connection.connect((err: any)=> {
  if (err) throw err;
  console.log("Connected mysql!");
});
 
//module.exports = connection;

export {connection};


import * as Sequelize from 'sequelize';

const db = 'todo'
const username = 'madi'
const password = 'Madi@123'

export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();
*/
import { Sequelize } from 'sequelize';

const db = 'todo';
const username = 'madi';
const password = 'Madi@123';

const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate().then(() => {
  console.info('Mysql Database connected.');
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err);
 })

export default Sequelize;