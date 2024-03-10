// import Sequelize from 'sequelize';
// import databaseConfig from '../config/database';
// import Aluno from '../models/Aluno';
// import User from '../models/User';
// import Foto from '../models/Foto';

// const models = [Aluno, User, Foto];

// const connection = new Sequelize(databaseConfig);

// models.forEach((model) => model.init(connection));
// models.forEach((model) => model.associate && model.associate(connection.models));

import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

// Update database configuration to use environment variables
const connection = new Sequelize({
  dialect: databaseConfig.dialect,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// Initialize models and establish associations
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

// Test the connection
connection
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default connection;
