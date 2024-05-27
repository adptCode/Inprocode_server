"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Marker = connection_1.default.define('marker', {
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
        allowNull: false
    }
}, {
    timestamps: false
});
exports.default = Marker;
