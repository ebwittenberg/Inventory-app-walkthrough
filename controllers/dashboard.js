const Item = require('../models/items');
const Purchase = require('../models/purchases');


async function simulatePurchase(req, res) {
    console.log(req.body);
    
    // needs to add purchase record into purchases for specific item
    const purchaseId = await Purchase.newPurchase(req.body.itemid, req.body.qty);

    console.log(purchaseId);
    
    await Item.inventoryChange(req.body.itemid, -req.body.qty);
    
    
    res.send(`Purchase ID: ${purchaseId.id}`);
    
    
}

module.exports = {
    simulatePurchase
} 




// async function showDashboard(req, res) {
//                     // dashboard needs to show all items with their current stock positions
//                     const allItems = await Item.getAllItems();
                
//                     const itemsList = allItems.map(item => {
//                     return `
//                     <div class="row text-center">
//                         <div class="col-sm border bg-light">
//                             ${item.name}
//                         </div>
//                         <div class="col-sm border bg-light">
//                             ${item.sku}
//                         </div>
//                         <div class="col-sm border bg-light">
//                             ${item.inventory}
//                         </div>
//                     </div>
//                     `
//                     })
//                     res.render('dashboard', {
//                         locals: {
//                             item: itemsList.join('')
//                         }
//                     });
                
//                 }
    