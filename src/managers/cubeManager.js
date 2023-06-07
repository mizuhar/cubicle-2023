const uniqid = require("uniqid");
const db = require("../db.json");
const Cube = require("../models/Cube");

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean()
  if (search) {
    result = result.filter((cub) =>
      cub.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    result = result.filter((cub) => cub.difficultyLevel >= Number(from));
  }
  if (to) {
    result = result.filter((cub) => cub.difficultyLevel <= Number(to));
  }
  return result;
};
exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneByAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

exports.create =  function (cubeData) {
  const cube = new Cube(cubeData);
  return cube.save();
};
exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId)
exports.update =  (cubeId,cubeData) => Cube.findByIdAndUpdate(cubeId,cubeData)
 


exports.attachAccessory = async (cubeId,accessoryId) => {
  return  Cube.findByIdAndUpdate(cubeId,{$push: {accessories: accessoryId}})
}
