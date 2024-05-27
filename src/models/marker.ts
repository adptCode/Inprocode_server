import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Marker = db.define('marker', {
    latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Marker;