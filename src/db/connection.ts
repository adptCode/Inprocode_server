import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('calcioapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;