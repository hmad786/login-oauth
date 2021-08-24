import * as Sequelize from 'sequelize'

import { v4 as uuidv4 } from 'uuid';

class User extends Sequelize.Model {
    id : string | undefined;
    googleId: string | undefined;
    name: String | undefined;
    emails: String | undefined;
    createdAt: Date | undefined;
  static authenticate: any;
}
export const InitUser = (sequelize: Sequelize.Sequelize) => {

    User.init({
        id: Sequelize.DataTypes.UUID,
        googleId: Sequelize.DataTypes.STRING,
        name: Sequelize.DataTypes.STRING,
        emails: Sequelize.DataTypes.STRING,
        createdAt: Sequelize.DataTypes.DATE

        
    }, {
        sequelize, tableName: "userLogin"
    })
    uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
};

export default User;













/*
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

export const User = Sequelize.define<UserModel, UserAddModel>('mysqlConnection', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        autoIncrement: true,
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
*/
