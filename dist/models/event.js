"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Event = connection_1.default.define('Event', {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    start: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    end: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Event;
