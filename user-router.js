const router = require('express').Router();
router.get('/', (req, res)=>{
  // get all todos
  res.send("Was machen die Kieler? Ja schlafen die denn?");
})

router.get('/:id', (req, res) => {
  // get todo by id 
  console.log(req.params.id)
  res.send(`Granate und ${req.params.id}!!!!`)
});

router.post('/',(req, res) => {
  res.send("post from user")
})

router.put('/', (req, res) => {
  res.send('put from user')
})

router.delete('/', (req,res) => {
  res.send('delete from user')
})
module.exports = router;