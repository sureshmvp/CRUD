import LineDetailModelGenerated from "./generated/LineDetailModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await LineDetailModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LineDetailModelGenerated,
  ...customModel
};
