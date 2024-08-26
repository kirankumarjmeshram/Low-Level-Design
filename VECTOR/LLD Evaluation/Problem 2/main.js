const Product = require('./Product');
const Warehouse = require('./Warehouse');
const InventoryManager = require('./InventoryManager');

const manager = new InventoryManager();
const warehouse1 = new Warehouse('1', 'Location A');
const warehouse2 = new Warehouse('2', 'Location B');

// Add warehouses to inventory manager
manager.addWarehouse(warehouse1);
manager.addWarehouse(warehouse2);

// Create products
const prod1 = new Product('p1', 'Product 1', 0);
const prod2 = new Product('p2', 'Product 2', 0);

// Add products to warehouses
manager.addProductsToWarehouse('1', prod1, 50);
manager.addProductsToWarehouse('2', prod2, 10);

// Update product quantity in a warehouse
manager.updateProductQuantityInWarehouse('1', 'p1', 30);

// Check for low stock alerts
const lowStockAlerts = manager.checkStockLevels(25);
console.log('Low Stock Alerts:', lowStockAlerts); // Should show alerts for products below the threshold
