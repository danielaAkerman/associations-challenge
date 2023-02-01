import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

export class Auth extends Model {}
Auth.init(
  {
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    user_id: { type: DataTypes.INTEGER },
  },
  { sequelize, modelName: "auth" }
);
