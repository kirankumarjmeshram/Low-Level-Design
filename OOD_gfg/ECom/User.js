class User {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    getName() {
        return this.name;
    }
    getPhone() {
        return this.phone;
    }
    toString() {
        return `User: {name: ${this.name}, phone: ${this.phone}}`
    }
}

export default User;