const router = require('express').Router();
const userController = require('./controller/user.controller');

router.get('/', userController.getAll);

router.get('/:id', userController.findById);

router.post('/', userController.createUser);

router.put('/', (req, res) => {
  res.send('put from user')
})

router.delete('/', (req,res) => {
  res.send('delete from user')
})
module.exports = router;