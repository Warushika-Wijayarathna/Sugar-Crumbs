export default class customer {
    constructor(id, name, email, phone, address) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
    }

    // get customer_id
    get Id() {
        return this._id;
    }

    // get customer_name
    get Name() {
        return this._name;
    }

    // get customer_email
    get Email() {
        return this._email;
    }

    // get customer_phone
    get Phone() {
        return this._phone;
    }

    // get customer_address
    get Address() {
        return this._address;
    }

    // set customer_id
    set Id(id) {
        this._id = id;
    }

    // set customer_name
    set Name(name) {
        this._name = name;
    }

    // set customer_email
    set Email(email) {
        this._email = email;
    }

    // set customer_phone
    set Phone(phone) {
        this._phone = phone;
    }

    // set customer_address
    setAddress(address) {
        this._address = address;
    }
}