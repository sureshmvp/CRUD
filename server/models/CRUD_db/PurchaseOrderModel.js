import PurchaseOrderModelGenerated from "./generated/PurchaseOrderModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await PurchaseOrderModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PurchaseOrderModelGenerated,
  ...customModel
};
