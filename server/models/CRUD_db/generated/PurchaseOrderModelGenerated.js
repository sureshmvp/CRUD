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
 *  TO CUSTOMIZE PurchaseOrderModelGenerated.js PLEASE EDIT ../PurchaseOrderModel.js
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
  * PurchaseOrderModel.create
  *   @description CRUD ACTION create
  *   @param PurchaseOrder obj Object to insert
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.PurchaseOrder.create(item);    return result;
  },
  
  /**
  * PurchaseOrderModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id PurchaseOrder
  *
  */
  async delete(id) {
    return await Database.getConnection().models.PurchaseOrder.destroy({ where: { _id: id } });
  },
  
  /**
  * PurchaseOrderModel.findByPoNumber
  *   @description CRUD ACTION findByPoNumber
  *   @param Objectid key Id of the resource PoNumber to search
  *
  */
  async findByPoNumber(key) {
    return await Database.getConnection().models.PurchaseOrder.findAll({ where: { "PoNumber": key } });
  },
  
  /**
  * PurchaseOrderModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id PurchaseOrder
  *   @returns PurchaseOrder
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.PurchaseOrder.findByPk(id);
    return result;
  },
  
  /**
  * PurchaseOrderModel.getpo_lineDetails
  *   @description CRUD ACTION getpo_lineDetails
  *   @param Objectid id ID of PurchaseOrder from po_lineDetails
  *
  */
  async getpo_lineDetails(id) {
    return await Database.getConnection().models.PurchaseOrder.findAll({ where: { po_lineDetails: id } });
  },
  
  /**
  * PurchaseOrderModel.getpo_webOrderLevel
  *   @description CRUD ACTION getpo_webOrderLevel
  *   @param Objectid id ID of PurchaseOrder from po_webOrderLevel
  *
  */
  async getpo_webOrderLevel(id) {
    return await Database.getConnection().models.PurchaseOrder.findAll({ where: { po_webOrderLevel: id } });
  },
  
  /**
  * PurchaseOrderModel.list
  *   @description CRUD ACTION list
  *   @returns ARRAY OF PurchaseOrder
  *
  */
  async list() { 
    return await Database.getConnection().models.PurchaseOrder.findAll();
      },
  
  /**
  * PurchaseOrderModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id PurchaseOrder
  *   @returns PurchaseOrder
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.PurchaseOrder.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
