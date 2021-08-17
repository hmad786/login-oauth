//import * as Sequelize from 'sequelize';

/*import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
import sequelize from '../db/sql';

export interface UserAttributes {
    id: string;
    googleId: string;
    name: string;
    email: string;
    createdAt?: Date;
}

export interface UserModel extends Model<UserAttributes>, UserAttributes {}
export class User extends Model<UserModel, UserAttributes> {}

export type UserStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
};

export function UserFactory (sequelize: Sequelize): UserStatic {
    return <UserStatic>sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        googleId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
       
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
       
    });
}
*/

import * as Sequelize from 'sequelize'
import sequelize from '../db/sql';

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