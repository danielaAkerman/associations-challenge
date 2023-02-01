import { User } from "./user";
import { Product } from "./product";
import { Auth } from "./auth";

User.hasMany(Product);
Product.belongsTo(User);

export { User, Product, Auth };
