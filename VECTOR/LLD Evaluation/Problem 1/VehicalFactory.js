const VehicalRegistry =  require("./VehicalRegistry.js");

class VehicalFactory {
    createVehical(type, specs) {
        let vehical;
        switch(type) {
            case 'Car':
                vehical = new Car(specs);
                break;
            case 'Bike':
                vehical = new Bike(specs);
                break;
            case 'Truck':
                vehical = new Truck(specs);
                break;
            default:
                throw new Error('Invalid type');

        }
        VehicalRegistry.getInstance().registerVehical(vehical);
        return vehical;
    }

    
}

// 



//
class  Vehical {
    constructor(type, specs) {
        this.type = type;
        this.specs = specs;
        this.registrationNumber = this.generateRegistrationNumber();
    }

    generateRegistrationNumber() {
        return Math.random().toString(36).substring(2,11).toUpperCase()
    }

    displayDetails(){
        console.log(`Type: ${this.type}`);
        console.log(`Registration Number: ${this.registrationNumber}`);
        console.log(`Specs: ${JSON.stringify(this.specs)}`);
    }
}

class Car extends  Vehical {
    constructor(specs) {
        super("Car", specs)
    }
}

class Bike extends Vehical {
    constructor(specs) {
        super('Bike', specs);
    }
}

class Truck extends Vehical {
    constructor (specs) {
        super('Bike', specs);
    }
}

module.exports = VehicalFactory;