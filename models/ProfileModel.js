// BiodataModel.js
import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const Biodata = db.define(
  "biodatas",
  {
    biodata_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ktp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "user_id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Biodata.belongsTo(Users, { foreignKey: "user_id" });

export default Biodata;
