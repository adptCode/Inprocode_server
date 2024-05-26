import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('user', {
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    favoriteTeam: {
        type: DataTypes.STRING
    },

}, {
    createdAt: false,
    updatedAt: false
})

export default User;