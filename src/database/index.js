import Sequelize from 'sequelize';
/**
 * All models need to be imported on index.js
 */
import User from '../app/models/User';

import databaseConfig from '../config/database';

/**
 * Array including all models
 */
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
