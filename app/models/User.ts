
import * as Sequelize from 'sequelize'
import sequelize from './app/database/mysqlConnection';

export interface UserAddModel {
    email: string
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: string;
    googleId: string;
    name: string;
    email: string;
    createdAt?: Date;
    
}

export interface UserViewModel {
    id: String;
    email: string;
}


export const User = Sequelize.define<UserModel, UserAddModel>('sql_user', {
    id: {
        
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true
    },
     googleId: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
       
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
})

export default new sequelize(User, 'sql_user');