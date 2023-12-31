const short = require('short-uuid');

class Ticket {
    constructor(name,price){
        this.name = name;
        this.price = price;
        this.id = short.generate();
        this.date = new Date();
    }
}

module.exports = Ticket;