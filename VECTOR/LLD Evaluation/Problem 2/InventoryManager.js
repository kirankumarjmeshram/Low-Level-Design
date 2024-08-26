const Product = require('./Product');
const Warehouse = require('./Warehouse');

class InventoryManager{
    constructor(){
        this.warehouses = new Map();
    }

    addWarehouse(warehouse){
        this.warehouses.set(warehouse.id, warehouse);
    }

    addProductsToWarehouse(warehouseId, product, quantity){
        if(this.warehouses.has(warehouseId)){
            this.warehouses.get(warehouseId).addProducts(product, quantity);
        }else{
            throw new Error('Warehouse not found');
        }
    }

    updateProductQuantityInWarehouse(warehouseId, productId, quantity) {
        if(this.warehouses.has(warehouseId)){
            this.warehouses.get(warehouseId).updateProductQuantity(productId, quantity);
        }else{
            throw new Error('Warehouse Not found');
        }
    }
    getQuantityInWarehouse(warehouseId, productId) {
        if(this.warehouses.has(warehouseId)) {
            return this.warehouses.get(warehouseId).getProductQuantity(productId);
        }
    }

    checkStockLevels(threshold) {
        const alerts = [];
        for(const [id, warehouse] of this.warehouses) {
            for(const [productId, product] of warehouse.products) {
                if(product.getQuantity() < threshold){
                    alerts.push({
                        warehouseId: id,
                        productId: productId,
                        productName: product.getName(),
                        quantity: product.getQuantity()
                    });
                }
               
            }
        }
        return alerts;
    }
}

module.exports =  InventoryManager;