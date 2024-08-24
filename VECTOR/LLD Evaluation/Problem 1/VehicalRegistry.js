class VehicalRegistry {
    constructor(){
        if(VehicalRegistry.instance) {
            throw new Error("Use VehicleRegistery.getInstance() to get the singleton instance");
        }
        this.vehicles = [];
        VehicalRegistry.instance = this;

    }
    static getInstance(){
        if(!VehicalRegistry.instance){
            VehicalRegistry.instance = new VehicalRegistry();
            }
            return VehicalRegistry.instance;
    }

    registerVehical(vehical) {
        this.vehicles.push(vehical);
   }

    displayAllVehicles(){
        console.log("Registered Vehicals");
        this.vehicles.forEach(vehicle => vehicle.displayDetails());
    }

}
module.exports = VehicalRegistry