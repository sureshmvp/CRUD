// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_CRUD_db";
import UserModel from "../models/CRUD_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.CRUD_db.host +
        ":" +
        properties.CRUD_db.port +
        "//" +
        properties.CRUD_db.user +
        "@" +
        properties.CRUD_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.CRUD_db.name,
      properties.CRUD_db.user,
      properties.CRUD_db.password,
      {
        host: properties.CRUD_db.host,
        dialect: properties.CRUD_db.dialect,
        port: properties.CRUD_db.port,
        logging: false
      }
    );
    this.dbConnection_CRUD_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_CRUD_db;
  }
}

export default new Database();
