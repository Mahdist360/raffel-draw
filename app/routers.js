const router = require('express').Router();

router.use('/api/v1/tickets',require('../routes/Ticket'));



router.get('/', (req, res) => {
    res.send('Hello World!')
});


router.get('/health',(req,res)=>{
    res.json({msg:'success'})
});




module.exports = router;

