"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Admin.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Active", "Inactive"),
        defaultValue: "Active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at", // Map createdAt to created_at
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at", // Map updatedAt to updated_at
      },
    },
    {
      sequelize,
      modelName: "Admin",
      tableName: "Admins",
      timestamps: true, // Enable automatic timestamps
    }
  );

  return Admin;
};
