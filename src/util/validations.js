const emptyString = (val) => {
    if (!val) return true
    if (typeof val != 'string') return true
    if (!val.trim()) return true
    return false
}

const emptyNumber = (val) => {
    if (!val) return true
    if (isNaN(val)) return true
    if (!Number(val)) return true
    return false
}

const emptyArray = (arr) => {
    if (!arr) return true
    if (!Array.apply(arr)) return true
    if (arr.length == 0) return true
    return false
}

const emptyObject = (obj) => {
    for (const key in obj) {
        return false
    }
    return true
}

const invalidEmail = (email) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return !emailRegex.test(email)
}

let invalidPassword = function (password) {
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
    return !passwordRegex.test(password)
}

let invalidURL = function (val) {
    let rejx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/
    return !rejx.test(val)
}

let invalidPhone = function (number) {
    let phoneRegex = /^[6-9]\d{9}$/;
    return !phoneRegex.test(number);
}

const invalidPincode = function (value) {
    let pinRegex = /^[1-9]{1}[0-9]{5}$/;
    return !pinRegex.test(value);
}

const notExistInArray = function (array = [], values = []) {
    return !values.every(each => {
        return array.includes(each);
    });
}


module.exports = {
    emptyString,
    emptyNumber,
    emptyArray,
    emptyObject,
    invalidEmail,
    invalidURL,
    invalidPassword,
    invalidPhone,
    invalidPincode,
    notExistInArray,
}