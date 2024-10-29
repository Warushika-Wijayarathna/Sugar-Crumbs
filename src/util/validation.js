export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const validateMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
}

export const validateName = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
}

export const validateAddress = (address) => {
    const addressRegex = /^[a-zA-Z0-9\s,]+$/;
    return addressRegex.test(address);
}

export const validateNumber = (number) => {
    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(number);
}

export const validatePrice = (price) => {
    const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
    return priceRegex.test(price);
}

export const validateQuantity = (quantity) => {
    const quantityRegex = /^[0-9]+$/;
    return quantityRegex.test(quantity);
}

