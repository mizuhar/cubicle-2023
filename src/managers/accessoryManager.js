const Accessory = require("../models/Accessory");





exports.create = async function (accessoryData) {
    const accessory = new Accessory(accessoryData);
    await accessory.save();
  
    return accessory;
  };
  