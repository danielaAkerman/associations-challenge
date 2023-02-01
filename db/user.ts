import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

export class User extends Model {}
User.init(
  {
    fullname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    birthdate: { type: DataTypes.DATEONLY },
  },
  { sequelize, modelName: "user" }
);
