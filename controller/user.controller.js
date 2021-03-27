const userModel = require('../models/user');
const db = require('../models');
async function createUser (req, res) {
  console.log('Hello user controller');
  const {username, password} = req.body;
  const newUser = await userModel.create({username, password});
  console.log(newUser);
  res.status(201)
  res.json(newUser);
}

async function getAll (req, res) {
  const users = await userModel.findAll();
  res.json(users);
}

async function findById (req, res) {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ where: {id}});
    if (!user) {
      res.status(404);
      res.json({msg: "Could not find user with id of " + id});
    }
    res.status(200);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.json({msg: "Server error"});
  }

}

module.exports = { createUser, getAll, findById}