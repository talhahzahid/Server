import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const userMessageSchema = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    fullName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Full name is required" },
        len: {
          args: [2, 100],
          msg: "Full name must be between 2 and 100 characters",
        },
      },
    },

    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Must be a valid email address" },
        notEmpty: { msg: "Email is required" },
        len: {
          args: [5, 150],
          msg: "Email must be between 5 and 150 characters",
        },
      },
    },

    companyName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Company name is required" },
        len: {
          args: [2, 100],
          msg: "Company name must be between 2 and 100 characters",
        },
      },
    },

    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Phone number is required" },
        isNumeric: { msg: "Phone number must contain only numbers" },
        len: {
          args: [7, 20],
          msg: "Phone number must be between 7 and 20 digits",
        },
      },
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Message is required" },
        len: {
          args: [10, 1000],
          msg: "Message must be between 10 and 1000 characters",
        },
      },
    },
  },
  {
    timestamps: true,
    tableName: "customer_message",
  }
);

export default userMessageSchema;
