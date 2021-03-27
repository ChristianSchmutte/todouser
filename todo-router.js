const router = require('express').Router();
router.get('/', (req, res)=>{
  // get all todos
  res.send("Hello from todo router");
})

router.get('/:id', (req, res) => {
  // get todo by id 
  console.log(req.params.id)
  res.send(`HEllo todo with id ${req.params.id}`)
});





router.post('/',(req, res) => {
  res.send("post from todo")
});

router.put('/', (req, res) => {
  res.send('put from todo')
});

router.delete('/', (req,res) => {
  res.send('delete from todo')
});
module.exports = router;