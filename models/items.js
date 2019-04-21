const db = require('../models/conn');

class Item {

    constructor(id, name, sku, inventory) {
        this.id = id;
        this.name = name;
        this.sku = sku;
        this.inventory = inventory;

    }

    
    static inventoryChange(itemid, qty) {
        // needs to remove/add inventory to specific item
        console.log(`This is itemid: ${itemid}`);
        return db.result(`
        UPDATE items
        SET inventory = inventory + ${qty}
        WHERE id=${itemid}
        `)
        
    }
    
    
}

module.exports = Item;
// // get all items
// static getAllItems() {
//     return db.any(`
//     select * from items
//     `)
//     .then(itemsData => {
//         const arrayOfInstances = itemsData.map(item => new Item(item.id, item.name, item.sku, item.inventory));

//         return arrayOfInstances;
//     })
// }