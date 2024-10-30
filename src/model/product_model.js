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
    getCode() {
        return this._code;
    }

    // get product description
    getDescription() {
        return this._description;
    }

    // get product category
    getCategory() {
        return this._category;
    }

    // get product image
    getImage() {
        return this._image;
    }

    // get product unit price
    getUnitPrice() {
        return this._unitPrice;
    }

    // get product quantity on hand
    getQtyOnHand() {
        return this._qtyOnHand;
    }

    // set product code
    setCode(code) {
        this._code = code;
    }

    // set product description
    setDescription(description) {
        this._description = description;
    }

    // set product category
    setCategory(category) {
        this._category = category;
    }

    // set product image
    setImage(image) {
        this._image = image;
    }

    // set product unit price
    setUnitPrice(unitPrice) {
        this._unitPrice = unitPrice;
    }

    // set product quantity on hand
    setQtyOnHand(qtyOnHand) {
        this._qtyOnHand = qtyOnHand;
    }
}