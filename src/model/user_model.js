export default class user {
    constructor(id, username, email, password) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._password = password;
    }

    // get user id
    get Id() {
        return this._id;
    }

    // get user username
    get Username() {
        return this._username;
    }

    // get user email
    get Email() {
        return this._email;
    }

    // get user password
    get Password() {
        return this._password;
    }

    // set user id
    set Id(id) {
        this._id = id;
    }

    // set user username
    set Username(username) {
        this._username = username;
    }

    // set user email

    set Email(email) {
        this._email = email;
    }

    // set user password
    set Password(password) {
        this._password = password;
    }
}