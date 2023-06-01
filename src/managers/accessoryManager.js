const Accessory = require("../models/Accessory");

exports.getAll = () => Accessory.find();



exports.create =  function (accessoryData) {
    const accessory = new Accessory(accessoryData);
    return accessory.save();

  };
  