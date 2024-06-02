"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const DefaultMarker = connection_1.default.define('defaultmarker', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    latitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'defaultmarker'
});
exports.default = DefaultMarker;
