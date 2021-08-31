import { Sequelize, Model, DataTypes } from "sequelize";
import { v4 as uuidv4 } from 'uuid';


import IModel from './IModel';
import sequelize = require("sequelize");

class UserModel {
  private _userModel: IModel;
  constructor(userModel: IModel) {
    this._userModel = userModel;
  }

  get id (): string {
       return this._userModel.id;
  }

  get googleId (): string {
    return this._userModel.googleId;
  }
  get name (): string {
    return this._userModel.name;
  }
  get emails (): string {
    return this._userModel.emails;
  }

  get createdAt (): Date {
    return this._userModel.createdAt; 
  }


}

export default UserModel;




/*
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

*/
////////////////////////////////////////////////////////////////