import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Event = db.define('Event', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    start: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    end: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    createdAt: false,
    updatedAt: false
});

export default Event;