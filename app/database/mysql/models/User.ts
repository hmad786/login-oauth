import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from '../mysqlConnection';
import { v4 as uuidv4 } from 'uuid';

class User extends Model {
  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public googleId!: string;
  public name!: string;
  public emails!: string;
  public createdAt!: Date;
  static authenticate: any;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      
    },
    googleId:{
      type: new DataTypes.STRING(128),
      allowNull: false,
    },

    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    emails: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      createdAt: {
      type: new DataTypes.DATE,
      allowNull: false,
    },


  },

  {
    tableName: "users",
    sequelize, // passing the `sequelize` instance is required
  }
  
);

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
