import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "postgres://ttvstpna:Js9NiIcRNAwTfWFraIdogwCKY2PonsrO@motty.db.elephantsql.com/ttvstpna"
);

async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
