const router = require('express').Router();
const todoRouter = require ('./todo-router');
const userRouter = require ('./user-router');

router.get(`/`,(req, res)=>{
  res.send("get response");
  console.log("get response");
});


router.use('/todo',todoRouter);
router.use('/user',userRouter);


module.exports = router;