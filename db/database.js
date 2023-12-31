const Ticket = require('../models/Ticket');

class Database {
    constructor(){
        this.array = [];
    }

    create(name,price){
        const ticket = new Ticket(name,price);
        this.array.push(ticket);
        return ticket;
    };


    find(){
        return this.array;
    };

    findById(ticketId){
        // const tickets = this.array.filter((ticket)=>{
        //     ticket.id == ticketId;
        // });

        const tickets = this.array.filter((ticket)=> ticket.id === ticketId );
        return tickets;

    };

    findByName(name){
        const tickets = this.array.filter((ticket)=> ticket.name === name );
        return tickets;

    };

    bulk(name,price,quantity){
        const bulkArray = [];
        for(let i = 0;i<quantity;i++){
            const ticket = this.create(name,price);
            bulkArray.push(ticket);
        }
        return bulkArray;
    }

    updateByName(ticketName,updatedName){
        // extra knowledge 
        // const tickets = this.array.filter((ticket)=> ticket.name === ticketId);
        // tickets.filter((ticket)=> ticket.name = updatedName || ticket.name);
        // return tickets;

        this.array.forEach((ticket)=>{
            if (ticket.name === ticketName) {
                console.log(updatedName)
                ticket.name = updatedName || ticket.name;
            }
        });
        return this.array.filter((ticket)=> ticket.name === updatedName);
    }

    updateById(ticketId,updatedName){
        const tickets = this.array.filter((ticket)=> ticket.id === ticketId);
        tickets.filter((ticket)=> ticket.name = updatedName || ticket.name);
        return tickets;
    }

    deleteById(ticketId){
        const deletedTicket = this.findById(ticketId);
        this.array = this.array.filter((ticket)=> ticket.id !== ticketId );
        return deletedTicket;

    }

    deleteByName(ticketName){
        const deletedItems = this.array.filter((ticket)=> ticket.name === ticketName)
        this.array = this.array.filter((ticket)=>{
            if (ticket.name !== ticketName) {
                return ticket;
            }
        });
        return deletedItems;

        // const deletedTicket = this.findByName(ticketName);
        // this.array = this.array.filter((ticket)=> ticket.name !== ticketName );
        // return deletedTicket;
    }


    draw(winnercount){
        const winnerArray = new Array();
        let count = 0;
        while(count < winnercount){
            const index = Math.floor(Math.random() * this.array.length);
            console.log(index);
            if(!winnerArray.includes[index]){
                winnerArray.push(this.array[index]);
                count++;
            }
        }
        return winnerArray;
    };
    
}


const database = new Database;


module.exports = database;


