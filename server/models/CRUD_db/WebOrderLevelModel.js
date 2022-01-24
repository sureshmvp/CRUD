import WebOrderLevelModelGenerated from "./generated/WebOrderLevelModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await WebOrderLevelModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...WebOrderLevelModelGenerated,
  ...customModel
};
