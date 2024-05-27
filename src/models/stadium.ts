import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Stadium = db.define('stadium', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'stadi',
    createdAt: false,
    updatedAt: false
});

export default Stadium;
