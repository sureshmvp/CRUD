// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_CRUD_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * LineDetail
      * ------------------------------------
      */
    class LineDetail extends Sequelize.Model{}
    LineDetail.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      po_lineDetails: {
        type: Sequelize.INTEGER,
        references: {
          model: PurchaseOrder,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "linedetail", timestamps: false }
    );



    /**
      * ------------------------------------
      * PurchaseOrder
      * ------------------------------------
      */
    class PurchaseOrder extends Sequelize.Model{}
    PurchaseOrder.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING
      },
      
      PoNumber: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      po_lineDetails:  {
        type: Sequelize.INTEGER,
        references: {
          model: "LineDetail",
          key: '_id',
        },
      },
        
      po_webOrderLevel:  {
        type: Sequelize.INTEGER,
        references: {
          model: "WebOrderLevel",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "purchaseorder", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * WebOrderLevel
      * ------------------------------------
      */
    class WebOrderLevel extends Sequelize.Model{}
    WebOrderLevel.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      po_webOrderLevel: {
        type: Sequelize.INTEGER,
        references: {
          model: PurchaseOrder,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "weborderlevel", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
