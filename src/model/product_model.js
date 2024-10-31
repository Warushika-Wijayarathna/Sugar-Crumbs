export default class product {
    constructor(code, description, category, image, unitPrice, qtyOnHand) {
        this._code = code;
        this._description = description;
        this._category = category;
        this._image = image;
        this._unitPrice = unitPrice;
        this._qtyOnHand = qtyOnHand;
    }

    // get product code
    get Code() {
        return this._code;
    }

    // get product description
    get Description() {
        return this._description;
    }

    // get product category
    get Category() {
        return this._category;
    }

    // get product image
    get Image() {
        return this._image;
    }

    // get product unit price
    get UnitPrice() {
        return this._unitPrice;
    }

    // get product quantity on hand
    get QtyOnHand() {
        return this._qtyOnHand;
    }

    // set product code
    set Code(code) {
        this._code = code;
    }

    // set product description
    set Description(description) {
        this._description = description;
    }

    // set product category
    set Category(category) {
        this._category = category;
    }

    // set product image
    set Image(image) {
        this._image = image;
    }

    // set product unit price
    set UnitPrice(unitPrice) {
        this._unitPrice = unitPrice;
    }

    // set product quantity on hand
    set QtyOnHand(qtyOnHand) {
        this._qtyOnHand = qtyOnHand;
    }
}