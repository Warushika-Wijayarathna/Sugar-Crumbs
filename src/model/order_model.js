export default class order {
    constructor(invoice_id, user_id, customer_id, order_date, order_time, order_items, sub_total, service_tax, total_price, payment_method, cash_amount, balance) {
        this._invoice_id = invoice_id;
        this._user_id = user_id;
        this._customer_id = customer_id;
        this._order_date = order_date;
        this._order_time = order_time;
        this._order_items = order_items;
        this._sub_total = sub_total;
        this._service_tax = service_tax;
        this._total_price = total_price;
        this._payment_method = payment_method;
        this._cash_amount = cash_amount;
        this._balance = balance;
    }

    // Getters
    get invoice_id() {
        return this._invoice_id;
    }

    get user_id() {
        return this._user_id;
    }

    get customer_id() {
        return this._customer_id;
    }

    get order_date() {
        return this._order_date;
    }

    get order_time() {
        return this._order_time;
    }

    get order_items() {
        return this._order_items;
    }

    get sub_total() {
        return this._sub_total;
    }

    get service_tax() {
        return this._service_tax;
    }

    get total_price() {
        return this._total_price;
    }

    get payment_method() {
        return this._payment_method;
    }

    get cash_amount() {
        return this._cash_amount;
    }

    get balance() {
        return this._balance;
    }

    // Setters
    set invoice_id(value) {
        this._invoice_id = value;
    }

    set user_id(value) {
        this._user_id = value;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    set order_date(value) {
        this._order_date = value;
    }

    set order_time(value) {
        this._order_time = value;
    }

    set order_items(value) {
        this._order_items = value;
    }

    set sub_total(value) {
        this._sub_total = value;
    }

    set service_tax(value) {
        this._service_tax = value;
    }

    set total_price(value) {
        this._total_price = value;
    }

    set payment_method(value) {
        this._payment_method = value;
    }

    set cash_amount(value) {
        this._cash_amount = value;
    }

    set balance(value) {
        this._balance = value;
    }
}