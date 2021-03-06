/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE LineDetailModelGenerated.js PLEASE EDIT ../LineDetailModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_CRUD_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * LineDetailModel.create
  *   @description CRUD ACTION create
  *   @param LineDetail obj Object to insert
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.LineDetail.create(item);    return result;
  },
  
  /**
  * LineDetailModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id LineDetail
  *
  */
  async delete(id) {
    return await Database.getConnection().models.LineDetail.destroy({ where: { _id: id } });
  },
  
  /**
  * LineDetailModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id LineDetail
  *   @returns LineDetail
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.LineDetail.findByPk(id);
    return result;
  },
  
  /**
  * LineDetailModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF LineDetail
  *
  */
  async list() { 
    return await Database.getConnection().models.LineDetail.findAll();
      },
  
  /**
  * LineDetailModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id LineDetail
  *   @returns LineDetail
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.LineDetail.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
