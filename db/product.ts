import { Model, DataTypes } from "sequelize";
import { sequelize } from ".";

export class Product extends Model {}
Product.init(
  {
    price: { type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING },
  },
  { sequelize, modelName: "product" }
);
