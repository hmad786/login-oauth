
import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../MysqlConnection";
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