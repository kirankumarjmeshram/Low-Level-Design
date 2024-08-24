const VehicalFactory = require('./VehicalFactory');
const VehicalRegistry = require('./VehicalRegistry');

const factory = new VehicalFactory();

const car1 = factory.createVehical("Car",{
    brand:"Tata",
    model:"Tata Safari",
    color: "White"
})

const car2 = factory.createVehical("Car",{
    brand:"Toyota",
    model:"Toyota Hilux",
    color: "White"
})

// car1.displayDetails();
// car2.displayDetails();
VehicalRegistry.getInstance().displayAllVehicles();