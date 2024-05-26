import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('calcioapp', 'root', 'adminsql', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;