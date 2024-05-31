import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Dates = db.define('dates', {
    year: {
        type: DataTypes.NUMBER,
    },
    amount: {
        type: DataTypes.NUMBER,
    },
    colorcode: {
        type: DataTypes.STRING,
    }
},{
    timestamps: false
})

export default Dates;
