const database = require('../db/database');
const router = require('express').Router();

// create -d
// find -d
// findById -d
// findByName -d
// bulk -d
// updateByName -d
// updateById -d
// deleteById -d
// deleteByName -d
// draw



router.get('/',(req,res)=>{
    const allTickets = database.find();
    res.send(allTickets);
});

router.post('/t/sell',(req,res)=>{
    const {name,price} = req.body;
    const ticket = database.create(name,price);
    res.send(ticket);
});

router.post('/t/sell/bulk',(req,res)=>{
    const {name,price,quantity} = req.body;
    const tickets = database.bulk(name,price,quantity);
    res.send(tickets);
});
router.get('/t/draw',(req,res)=>{
    const winnerCount = req.body.winnerCount;
    const winners = database.draw(winnerCount);
    res.send(winners)

});


router.route('/t/:ticketId')
    .get((req,res)=>{
        const ticketId = req.params.ticketId;
        const tickets = database.findById(ticketId);
        res.send(tickets);
    })
    .patch((req,res)=>{
        const ticketId = req.params.ticketId;
        const updatedName = req.body.updatedName;
        const updateById = database.updateById(ticketId,updatedName);
        res.send(updateById)
    })
    .delete((req,res)=>{
        const ticketId = req.params.ticketId;
        const deleetedItem = database.deleteById(ticketId);
        res.send(deleetedItem)
    });





    router.route('/u/:username')
    .get((req,res)=>{
        const username = req.params.username;
        const tickets = database.findByName(username);
        res.send(tickets);
    })
    .patch((req,res)=>{
        const username = req.params.username;
        const updatedName = req.body.updatedName;
        const updateByName = database.updateByName(username,updatedName);
        res.send(updateByName);

    })
    .delete((req,res)=>{
        const username = req.params.username;
        const deletedItems = database.deleteByName(username);
        res.send(deletedItems)
    });





module.exports = router;

